# Fuentes Concrete

Next.js 16, React 19, TypeScript, Tailwind CSS 4
Deployed on Vercel: https://fuentes-concrete.vercel.app
Local dev: http://localhost:3000

## Run Agents

WORK=/Users/brandonhopkins/Projects/fuentes-concrete/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/fuentes-concrete/agents/content-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/fuentes-concrete/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/fuentes-concrete/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
