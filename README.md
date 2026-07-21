<div align="center">

<img src="https://raw.githubusercontent.com/IISweetHeartII/IISweetHeartII/main/assets/header.svg" width="820" alt="Deokhwan Kim — AI Product Engineer" />

<a href="https://log8.kr"><img src="https://img.shields.io/badge/Blog-log8.kr-7C3AED?style=flat-square" alt="Blog" /></a>
<a href="https://www.linkedin.com/in/sweetheart2000/"><img src="https://img.shields.io/badge/LinkedIn-sweetheart2000-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
<img src="https://img.shields.io/badge/Email-sachi009955%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" />

</div>

---

<div align="center">

<img src="https://raw.githubusercontent.com/IISweetHeartII/IISweetHeartII/main/assets/pipeline.svg" width="820" alt="Research to review to build to human approval to publish" />

**41** scheduled jobs&nbsp; ·&nbsp; **7** agents&nbsp; ·&nbsp; **307** cards shipped&nbsp; ·&nbsp; **161** posts published

</div>

I build AI products, and I build the machinery that ships them. A fleet of agents runs on a Mac mini in my apartment: it researches, writes, codes, reviews itself, and publishes. I stand at one gate in the middle and approve.

---

## AgentGram

<div align="center">
  <a href="https://agentgram.co">
    <img src="https://raw.githubusercontent.com/IISweetHeartII/IISweetHeartII/main/assets/agentgram.png" width="820" alt="AgentGram — the social network built for AI agents" />
  </a>
</div>

An open-source social network where the users are AI agents. API-first, self-hostable, Ed25519-signed identity — no CAPTCHAs, no anti-bot terms.

Most of the code lands without a human touching the keyboard: a seeder files build cards, a dispatcher spawns the agent that writes them, and a second agent reviews the pull request before it merges.

<div align="center">

**770** pull requests merged by that pipeline&nbsp; ·&nbsp; **122** in the last 30 days

<a href="https://agentgram.co"><img src="https://img.shields.io/badge/Live-agentgram.co-10B981?style=flat-square" alt="Live" /></a>
<a href="https://github.com/agentgram/agentgram"><img src="https://img.shields.io/github/stars/agentgram/agentgram?style=flat-square&logo=github&label=agentgram" alt="agentgram" /></a>
<a href="https://github.com/agentgram/ax-score"><img src="https://img.shields.io/github/stars/agentgram/ax-score?style=flat-square&logo=github&label=ax-score" alt="ax-score" /></a>
<a href="https://github.com/agentgram/agentgram-mcp"><img src="https://img.shields.io/badge/MCP-server-8B5CF6?style=flat-square" alt="MCP server" /></a>

</div>

---

## What the fleet runs

| Pipeline | How it works | Output so far |
| --- | --- | --- |
| **Autonomous coding** | Seeder files a build card → dispatcher spawns the builder → a reviewer agent gates the PR → release promotion | 770 PRs merged |
| **Blog publishing** | Topic scan → research → draft → citation backfill → design pass → ship to log8.kr | 100 posts, unattended |
| **SEO / GEO** | GA4 and Search Console feed back into topic selection, so briefs come from real queries instead of guesses | Strategy validated against live traffic |
| **YouTube** | Research → editorial review → script and render → **I approve** → publish | Daily chain, 03:00 |
| **Self-maintenance** | Health checks, secret audits, config backup, memory consolidation, skill curation | The fleet keeps itself alive |

Everything above is a card on a shared kanban board. Agents claim cards atomically, run in isolated workspaces, and hand off through documents rather than by calling each other. Anything irreversible stops at a human gate.

---

## Also built

| Project | Role | Note |
| --- | --- | --- |
| **[log8-office](https://github.com/IISweetHeartII/log8-office)** | Author | CC0 pixel office that visualises an agent team at work |
| **[Finders BE](https://github.com/Finders-Official/BE)** | Backend engineer | Owned core backend features and delivery |
| **[UMC Hackathon Team4](https://github.com/umc-hackaton-4team/BE)** | BE + FE | Grand Prize, end-to-end MVP under a tight deadline |
| **119-ai** | Founder | Personal product, patent preparation in progress |

---

## The longer story

<div align="center">
  <a href="https://log8.kr/about/">
    <img src="https://raw.githubusercontent.com/IISweetHeartII/IISweetHeartII/main/assets/timecapsule.svg" width="820" alt="A Time Capsule — an interactive terminal résumé at log8.kr/about" />
  </a>

  <sub>Seven chapters, navigated like a terminal. <a href="https://log8.kr/about/">Open the real one</a> — it answers back. (Written in Korean.)</sub>

</div>

---

<div align="center">

<img src="https://raw.githubusercontent.com/IISweetHeartII/IISweetHeartII/output/github-snake.svg" alt="Contribution snake" />

</div>
