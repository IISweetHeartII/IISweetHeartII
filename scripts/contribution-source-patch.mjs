/**
 * generate-snake-animation reads the contribution calendar through the GitHub
 * GraphQL API. For this account that query is too expensive to compute and
 * GitHub answers RESOURCE_LIMITS_EXCEEDED, which broke every run since
 * 2026-07-16. Narrowing the date range or dropping fields does not help: any
 * uncached range fails.
 *
 * The public contributions page returns the same grid as plain HTML, with no
 * token and no query cost. This intercepts the GraphQL call and answers it from
 * that page instead. Loaded with `node --import`, so the patch is in place
 * before the CLI runs.
 */
const LEVELS = [
  "NONE",
  "FIRST_QUARTILE",
  "SECOND_QUARTILE",
  "THIRD_QUARTILE",
  "FOURTH_QUARTILE",
];

const fetchContributionCalendar = async (login) => {
  const res = await originalFetch(
    `https://github.com/users/${encodeURIComponent(login)}/contributions`,
    { headers: { "User-Agent": "snake-workflow" } },
  );

  if (!res.ok)
    throw new Error(`contributions page returned ${res.status} for ${login}`);

  const html = await res.text();

  const days = [
    ...html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g),
  ].map(([, date, level]) => ({ date, level: Number(level) }));

  if (days.length < 300)
    throw new Error(`contributions page yielded only ${days.length} days`);

  days.sort((a, b) => a.date.localeCompare(b.date));

  // The snake solver only reads the level and the x/y position, which it takes
  // from the week index and the weekday, so the counts are left at zero.
  const origin = Date.parse(days[0].date);
  const weeks = [];

  for (const { date, level } of days) {
    const dayOffset = Math.round((Date.parse(date) - origin) / 86400_000);
    const week = (weeks[Math.floor(dayOffset / 7)] ??= { contributionDays: [] });

    week.contributionDays.push({
      contributionCount: 0,
      contributionLevel: LEVELS[level],
      weekday: new Date(date).getUTCDay(),
      date,
    });
  }

  return { data: { user: { contributionsCollection: { contributionCalendar: { weeks } } } } };
};

const originalFetch = globalThis.fetch;

globalThis.fetch = async (input, init) => {
  const url = typeof input === "string" ? input : input?.url;

  if (url?.includes("/graphql") && typeof init?.body === "string") {
    const { query, variables } = JSON.parse(init.body);

    if (query?.includes("contributionsCollection")) {
      const login = variables?.login;

      if (!login) throw new Error("no login in the contribution query");

      console.log(`🎣 reading contributions of ${login} from the profile page`);

      return Response.json(await fetchContributionCalendar(login));
    }
  }

  return originalFetch(input, init);
};
