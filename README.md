<div align="center"> 
<img src="app/favicon.ico" height="50px" width="auto" /> 
<h3>
 Life Game App
</h3>
<p>A cellular automaton as video game</p>
</div>

<div align="center">
    <a href="https://life-game-nextjs.vercel.app/" target="_blank">
        Preview
    </a> 
</div>

<p></p>

<div align="center">

![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
</div>

# Life Game Next JS

I create a cellular automaton as game with nextjs

## Rules of game 

The game is played on an **infinite grid of square cells**, and its evolution is only determined by its initial state. The rules of the game are simple, and describe the evolution of the grid⁵:

- **Birth**: a cell that is dead at time t will be alive at time t + 1 if exactly 3 of its eight neighbors were alive at time t.
- **Death**: a cell can die by:
  - **Overcrowding**: if a cell is alive at time t + 1 and 4 or more of its neighbors are also alive at time t, the cell will be dead at time t + 1.
  - **Exposure**: if a live cell at time t has only 1 live neighbor or none, it will be dead at time t + 1.
- **Survival**: a cell survives from time t to time t + 1 if and only if 2 or 3 of its neighbors are alive at time t.


![banner](/public/assets/images/capture_cells.jpg)