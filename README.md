# weather-app

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

### weather API

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
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
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
