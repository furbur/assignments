
# gamestudio-assignment
Desktop HTML5 Tetris-like game called ‘Save the Animal’.

## Controls
* [ARROW LEFT] - Move left
* [ARROW RIGHT] - Move right
* [ARROW UP] - rotate the animal
* [ARROW DOWN] -  speed up dropping
* [SPACE] - instantly drop the animal down

## Additional info
SUPPORTED BROWSERS (the game was tested with): Firefox and IE9+. Chrome blocks local file access (game images in this case) for security reasons so the game needs to be hosted from a server if you want to play it with Crome.

## Comments about the assignment
* The converted data file (.json) did not work on PIXI.JS version 4.8.6. It's possible that the file was converted for other framework. I solved the problem by repacking textures with TexturePacker and generating new data file for PIXI.JS.
* The assignment was originally meant to be finished within few hours. In my case this assignment took way longer. The main reason is that I don't have any previous experience of JavaScript/ES6 or related frameworks / libraries. I tinkered one long day with javascript and PIXI.JS and on other day made the assignment. I used some time on third day on documentation. The assignment itself was interesting learning experience.
* The game has the features (excluding the extra mobile support) what was defined. However the collision system does not work currently as intended. All the special cases for different sized animals and rotations are missing and because of that the collision feels quite wonky.
* There is only one state implemented to the game so restarting needs to be done by refreshing the webpage.