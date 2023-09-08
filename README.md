# Life Game Next JS

I create a cellular automaton as game with nextjs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Rules of game 

The game is played on an **infinite grid of square cells**, and its evolution is only determined by its initial state. The rules of the game are simple, and describe the evolution of the grid⁵:

- **Birth**: a cell that is dead at time t will be alive at time t + 1 if exactly 3 of its eight neighbors were alive at time t.
- **Death**: a cell can die by:
  - **Overcrowding**: if a cell is alive at time t + 1 and 4 or more of its neighbors are also alive at time t, the cell will be dead at time t + 1.
  - **Exposure**: if a live cell at time t has only 1 live neighbor or none, it will be dead at time t + 1.
- **Survival**: a cell survives from time t to time t + 1 if and only if 2 or 3 of its neighbors are alive at time t.
