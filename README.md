# Robot Operation Analytics Dashboard 

![Screenshot 2023-11-25 195340](https://github.com/shaikh1994/Robot-Operation-Dashboard/assets/43321233/27037f3b-2a98-4e7f-b671-36395b1c12b5)

This is a responsive dashboard  built on top of TailwindCSS and fully coded in React. It comes with several pre-coded charts (built with Chart.js 3) and widgets.

## Live demo

Check the live demo here 👉️ [https://mosaic.cruip.com/](https://robot-operation-dashboard.netlify.app/)

## Table of contents

* [Usage](#usage)
  * [Project setup](#project-setup)
  * [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
  * [Compiles and minifies for production](#compiles-and-minifies-for-production)
  * [Customize configuration](#customize-configuration)
* [Features](#Features)            
* [Special Notes (Future Features)](#Special-Notes)


## Usage

This project was done with [React](https://react.dev/).

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run dev
```

#### Compiles and minifies for production
```
npm run build
```


## Features

- Widget featuring Bar chart
- Widget featuring real time line chart. It has a 2 second interval which refreshes and obtain data from dummy mockData.json
- A Pie Chart widget
- A table widget
- Multi-line chart widget
- Notification featuring widget
- A map widget ( Since I dont have any paid map api so cannot add any other map features now)
- Dark mode option

## Special Notes (Future Features)

- Conatains a serch button on header. ( Serch function not implemented)
- Notifications tab added on the header but not clickable now.
- User tab dorpdown which contains 2 buttons settings and users which are currently mapped to hompage.
- Side-bar with auto hide option
- Filter button to add to hide widget. ( No implemented now)
- A date selection tab ( Only UI. Will add feature in the future)
- Add view button to add more widgets/blocks. ( Only UI. Will add feature in the future)

