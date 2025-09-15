# 📹 Videos App

A React Native app built with **Expo** and **TypeScript**, featuring
video playback and navigation.\
The project also uses **json-server** for simulating a backend with a
local `db.json` file.

------------------------------------------------------------------------

## 🚀 Features

-   Video playback using
    [`expo-video`](https://docs.expo.dev/versions/latest/sdk/video/).\
-   Navigation with [`react-navigation`](https://reactnavigation.org/).\
-   Mock REST API powered by
    [`json-server`](https://github.com/typicode/json-server).\
-   Runs on **Android**, **iOS**, and **Web** via Expo.

------------------------------------------------------------------------

## 📦 Requirements

-   [Node.js](https://nodejs.org/) (\>=18 recommended)\
-   [Expo CLI](https://docs.expo.dev/get-started/installation/)\
-   Android Studio / Xcode (if testing on devices/emulators)

------------------------------------------------------------------------

## 🔧 Installation

``` bash
# Clone the repository
git clone <your-repo-url>
cd videos-app

# Install dependencies
npm install
```

------------------------------------------------------------------------


## 🌐 Mock API (json-server)

This project includes a **local REST API** using `json-server` with data
from `db.json`.

Start the server:

``` bash
npm run server
```

By default, it runs at:

    http://localhost:3000

Example endpoints: - `http://localhost:3000/videos`\
- `http://localhost:3000/users`

*(Adjust based on your `db.json` structure.)*


------------------------------------------------------------------------

## ▶️ Running the App

### Start Metro bundler

``` bash
npm start
```

### Run on Android

``` bash
npm run android
```

### Run on iOS

``` bash
npm run ios
```

### Run on Web

``` bash
npm run web
```

------------------------------------------------------------------------

## 📁 Project Structure

    videos-app/
    ├── db.json          # Mock API data
    ├── App.tsx          # Entry point
    ├── package.json
    ├── tsconfig.json
    └── src/             # Components, navigation, screens, utils

------------------------------------------------------------------------

## 🛠 Scripts

  -----------------------------------------------------------------------
  Command                 Description
  ----------------------- -----------------------------------------------
  `npm start`             Start Expo Metro bundler with dev client

  `npm run android`       Run on Android device/emulator

  `npm run ios`           Run on iOS simulator/device

  `npm run web`           Run in web browser

  `npm run server`        Start json-server using `db.json`
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 📚 Tech Stack

-   **Expo SDK 53**
-   **React Native 0.79**
-   **TypeScript 5.8**
-   **React Navigation**
-   **expo-video**
-   **json-server**

------------------------------------------------------------------------

## 🔮 Future Improvements

-   Add authentication flow\
-   Sync videos with a real backend\
-   Offline video support
