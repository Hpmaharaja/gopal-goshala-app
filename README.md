<p align="center">
<img src="https://raw.githubusercontent.com/mmazzarolo/tap-the-number/master/extra/tap_the_number_title.png" width="420"></img><br />  <br /> 
<a href="https://itunes.apple.com/us/app/tap-the-number/id1206517840?l=it&ls=1&mt=8"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png" width="120"></img></a> 
</p>
&nbsp;  
&nbsp;  

Gopal Goshala is a simple React-Native application for a non-profit cause devoted to helping cows in India. Unfortuntely, the situation today for the cows is terrible as they are not treated well. Cows often end up eating plastic, are left thirsty in the hot weather of the sub-continent, and eventually live painful lives. Gopal Goshala helps this cause by sheltering, feeding, and tending cows who need it the most. This application dives into what Gopal Goshala does, where they provide assistance, and how you can make a difference too! 

## The stack and the dependencies
#### React-Native


## Project structure 
The structure of the application and all its files are the following:
```javascript
src
 ├── index.js // The app entry point
 │
 ├── assets // audio & fonts that must be linked in the app
 │
 ├── components
 │   ├── CustomText.js // A wrapper on the text used in the entire app (responsive + custom font)
 │   ├── Tile.js // The tile component used in the home screen and in the playground
 │   └── TouchableView.js // A cross-platform helper view with a touchable behavior
 │
 ├── config
 │   ├── colors.js // Colors (the available tiles colors, etc...)
 │   ├── env.js // Platform specific variables (IS_ENV_DEVELOPMENT, IS_ANDROID, etc...)
 │   ├── metrics.js // App metrics (DEVICE_WIDTH, TILE_SIZE, etc...)
 │   └── timings.js // Timing specific variables (TIME_LIMIT_MS, etc...)
 │
 ├── containers
 │   ├── App // The root app screen, routing is handled here
 │   ├── Endgame // The post-game screen (with the score and restart button)
 │   ├── Home // The home screen (with the start game button)
 │   └── Playground // The screen where the game runs
 │       ├── Board // The board game, renders the tiles
 │       ├── BoardTile // A Tile with Board-specific behaviors
 │       └── TimeBar // The top-bar with that shows the remaining time
 │
 ├── images // The app images
 │
 ├── services
 │   └── audio.js // Simple wrapper over react-native-sound 
 │
 ├── stores // MobX stores
 │   ├── game.js // All the app logic is handled here (Board setup, scoring, etc...)
 │   └── router.js // A super simple router 
 │
 ├── types // Flowtype types
 │
 └── utils
     ├── boardUtils.js // Board setup utils (getRandomTilePosition, getRandomNumber, etc...)
     ├── colorUtils.js // Color utils (getDifferentLuminance, etc...)
     └── timeUtils.js // Simple timing helpers (mostly wrappers over setTimeout)
```
The project structure I used here may seem over-engineered at first, but this setup paid off almost 
instantly (continue below).

