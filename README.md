# Life Game Next JS

I create a cellular automaton as game with nextjs

## Rules of game 

The game is played on an **infinite grid of square cells**, and its evolution is only determined by its initial state. The rules of the game are simple, and describe the evolution of the grid⁵:

- **Birth**: a cell that is dead at time t will be alive at time t + 1 if exactly 3 of its eight neighbors were alive at time t.
- **Death**: a cell can die by:
  - **Overcrowding**: if a cell is alive at time t + 1 and 4 or more of its neighbors are also alive at time t, the cell will be dead at time t + 1.
  - **Exposure**: if a live cell at time t has only 1 live neighbor or none, it will be dead at time t + 1.
- **Survival**: a cell survives from time t to time t + 1 if and only if 2 or 3 of its neighbors are alive at time t.
