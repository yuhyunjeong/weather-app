# 🌦️ weather app

you can try it here! : https://yuhyunjeong.github.io/weather-app/

![Alt text](weatherapp_1.gif)

Figma : <br>
https://www.figma.com/file/1CsHZrA3LhltFqIjDFZghQ/weather-app?type=design&node-id=0%3A1&mode=design&t=8t8ek0dOK6QGqVHS-1

### Next Challenge

- current location
- check local time
- customize alert
- change color by weather

## 💻 Process

### App.js

entry point of the React app

- useState hook

  - manage weather data, search query, and units

- useEffect hook

  - fetch weather data whenever the component renders

- renders the Background component and passes weather data as props

### weatherAPI.js

call the OpenWeatherMap API and format the response data

https://openweathermap.org/

## ✅ What I Learned

### Luxon

a library for working with dates and times in JavaScript

```
npm i luxon
```

### Change the Default Port Number in React

```
// in package.json
  "scripts": {
    "start": "export PORT=3001 && react-scripts start",
  }
```

### Tailwind CSS with React App

https://tailwindcss.com/docs/guides/create-react-app

```
npm install -D tailwindcss
npx tailwindcss init
```

<hr>

### gradient border with border-radius

```
border-radius: 20px;

border: 2px solid rgba(255, 255, 255, 0.3);

background-image: linear-gradient(
      135deg, /* degree */
      rgba(183, 107, 245, 0.8),
      rgba(255, 255, 255, 0.3)
  ), /* background */
  linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(254, 191, 222, 0.6)); /* border */

background-origin: border-box;
background-clip: content-box, border-box;
```

### center the inner elements horizontally and vertically

```
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* set to the full height of the screen */
  margin: 0; /* remove default margin for body */
}
```

### indentation and color of cursor in input box

```
.input {

  outline: none;
  background-color: rgba(255, 255, 255, 0.9);

  text-indent: 15px; /* indentation */
  color: #ce6899;
  caret-color: #ce6899; /* color of cursor */
}
```

<hr>

### deploy a React app to GitHub Pages

- Add a homepage field to package.json file

```
// package.json
{
  "name": "weather-app",
  "version": "0.1.0",
  "homepage": "https://yuhyunjeong.github.io/weather-app/",
  // other configurations
}
```

- Install the gh-pages package

```
npm install gh-pages --save-dev
```

- Add a deployment script to package.json file

```
// package.json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d build"
  }
}
```

- Run the deployment

```
npm run deploy
```

## 🛠️ Trouble Shooting

### Each child in a list should have a unique "key" prop.

### weatherAPI.js:72 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'slice')

Solution:

```
  if (daily) { // Check if the object and property are valid before calling 'slice'
    daily = daily.slice(1, 6).map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
  }
```

### Uncaught runtime errors: Cannot read properties of undefined (reading 'lat')

Solution: try-catch block for error handling

```
  const handleSearchClick = async () => {
    try {
      if (city !== "") {
        await getFormattedWeatherData({ q: city, units });
        setQuery({ q: city });
      }
    } catch (error) {
      alert("Please check spelling or space.");
    }
  };
```
