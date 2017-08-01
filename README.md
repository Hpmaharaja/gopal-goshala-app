# Gopal Goshala React-Native App 

To try the android app : [Gopal Goshala on Play Store](https://play.google.com/store/apps/details?id=com.goshala1 "Gopala Goshala")

## Description
Gopal Goshala is a simple React-Native application for a non-profit cause devoted to helping cows in India. Unfortuntely, the situation today for the cows is terrible as they are not treated well. Cows often end up eating plastic, are left thirsty in the hot weather of the sub-continent, and eventually live painful lives. Gopal Goshala helps this cause by sheltering, feeding, and tending cows who need it the most. This application dives into what Gopal Goshala does, where they provide assistance, and how you can make a difference too! 


## The Stack and Dependencies
### React-Native
```
"dependencies": {
    "native-base": "^2.3.1",
    "react": "16.0.0-alpha.12",
    "react-native": "0.46.4",
    "react-native-sound": "^0.10.3",
    "react-navigation": "^1.0.0-beta.11"
  }

```

## Project structure 
The structure of the application and all its files are the following:
```javascript
src
 ├── index.android.js // The app component entry box
 │
 ├── android // android building files
 │
 ├── ios // iOS building files
 │
 └── app
     ├── components // React-native components
     │   ├── Home   // Home Component Repo
     │   │   └── home.js // home component
     │   ├── About  // About Component Repo
     │   │   └── about.js // about component
     │   ├── Donate // Donate Component Repo
     │   │   └── donate.js // donate component
     │   └── Landing.js // Sample Testing Landing Component
     ├── config // Configurations (router for now)
     │   └── router.js // Router Definitions
     └── images // Visual media for app
         ├── about.jpg // about screen image
         ├── cowlogo.jpg // logo image
         └── donate.jpg // donate screen image
 
```
This project structure is based on screen-based organization. 

