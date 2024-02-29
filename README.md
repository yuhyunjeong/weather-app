# weather-app

## 💻 Process

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

### linear gradient with opacity

```
background: linear-gradient(
    135deg, /* degree */
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.3)
  );
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
