
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup with icy.tools
Go to [https://developers.icy.tools](https://developers.icy.tools) and sign up with a free account. Once signed up, go to settings to see your API token and paste it in line 12 of `Apollo.tsx`:

```ts
const link = createHttpLink({
  uri: 'https://graphql.icy.tools/graphql',
  headers: {
    'x-api-key': 'YOUR_API_KEY_HERE', // PASTE HERE
  },
});
```

Once this is done you can the app via the following.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

