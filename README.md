# React Restaurant Finder

An application which fetches & summarises all the restaurants in "Location near you" or the Location entered. Utilizing Four Sqaure API, Leaflet JS API, leaflet-geosearch.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Requirement

- Nodejs ^v16.x.x

### Setup Env config

```bash
REACT_APP_CLIENT_ID = '<YOUR FOURSQURE CLIENT ID>'
REACT_APP_CLIENT_SECREATE =  '<YOUR FOURSQURE CLIENT SECREATE>'
REACT_APP_NODE_ENV = `<YOUR DEVELOPMENT ENVVIRMENT>` for REACT_APP_NODE_ENV (dev) = "development"
```

# Setup Prod Codebase

```bash
> Go to project directory
> npm install
> npm run build // Production mode
> Go to http://localhost:3000
```

# Setup Dev Codebase (Considering Env config completed)

```bash
> Go to project directory
> npm install
> npm start     // Development mode
> Go to http://localhost:3000
```

## Tech Stack

### Application Blueprint

* Always up-to-date [React](https://reactjs.org/) 
* [Redux Toolkit](https://redux-toolkit.js.org/) for safe and reasonable state management
* [React Router](https://reactrouter.com/en/main) for awesome navigation
* [Typescript](https://www.typescriptlang.org/) for static type checking
* [Material UI](https://mui.com/) for creating UI components
* [React Leaflet](https://react-leaflet.js.org/) for creating Map components
* [leaflet-geosearch](https://www.npmjs.com/package/leaflet-geosearch) to adds support for geocoding (address lookup, a.k.a. geoseaching) to (web).
* [Prttier](https://prettier.io/) for code formatting to make it pretty.
* [Eslint](https://eslint.org/) statically analyzes your code to quickly find problems.
* [Husky](https://www.npmjs.com/package/husky) won't let you commit you changes until you fix possible errors also can run testing at each commit.

### Core ideology
WRITE SMALL, REUSABLE AND COMPOSABLE FUNCTIONS

### Code structure

```base
└── src/
    ├── components/
    │   │ 
    │   ├── Mapview/
    │   │   # we could also ungroup this folder to make the components folder flat
    │   └── HOC/
    │   └── UI/
    │ 
    ├── utils/
    │ 
    ├── redux/
    │  
    └── pages/
        ├── Restaurants/
        ├── RestaurantDetails/ 
```

* No duplicate file name in the whole application. Every file need to have a suffix to explain its type
> Why? It's easier to search for a file and reduce the confusion of same file names

```bash
./src/pages/Restaurants
              └── Restaurants.tsx
              └── Restaurants.scss
              └── RestaurantsTypes.ts
              └── Restaurants.test.tsx
```

* Organize your files around product features, not roles. Also, place your test files next to their implementation. [Details](#why-feature-oriented-architecture)
> Why? Instead of a long list of files, you will create small modules that encapsulate one responsibility including its test and so on. It gets much easier to navigate through and things can be found at a glance.

* A separate directory for each component, module, higher order component,...
> Why? It's easier to extend and organize files. Make a change on a component won't affect the structure of its parent directory

```bash
./src/components
         └──  MapView/
         └── Rating/
         └── HOC/
         └── UI/
```

* Only use index files (`index.tsx`) for indexing (logic code are not allowed)
> Why? Using index files eases importing files in a deep structure. However, adding logic code to these files would make it more difficult to reason about the application (hidden logic in unexpected places).

* Put all export statements at the end of file
> Why? Export randomly variables, functions, interfaces,...make it hard to keep track of what have been exported, especially in a large file

* Redux Toolkit and structure: For state Managment
> Why Redux Toolkit, Redux Toolkit makes it easier to write good Redux applications and speeds up development, by baking in our recommended best practices, providing good default behaviors, catching mistakes, and allowing to write simpler code.
> Redux toolkit Architecture is simple and very scalable.

```bash
./src/redux
        └── store
              └── index.ts
        └──  slice
              └── restaurants.ts
              └── types.ts
        └──  fetchUtility.ts
```

### Testing Setup

* [Jest](https://jestjs.io/docs/tutorial-react) for unit testing application code and providing coverage information
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for DOM Testing Library by adding APIs for working with React components.

### Trade off's and thinks that can be improve upon

1. Map and geo search can be done via google map as google map provide more details about public spots and have better geo location functionality.
   Google Map API have region lock for certain region so, we can not use google map api and enable map option even with billing account in certain region.
2. As restaurant Finder is an client facing app It could be build or migrate to NextJs as NextJs provide server side rendering and good for SEO.
3. User Event driven testing can be done more extensively and can be improve upon.
4. With redux toolkit, redux saga can be use that provide additional functionality for API handling.
5. Proper UI for Response and Error handling this includes: Loader, PopUps etc.
6. More consideration TypeScript and Eslint outputs.
7. Sonar Lint can be setup for even more better linting.
8. Mobile responsivness and UI design imporvement.

### Recently done project:
   [ShopUp](https://github.com/Sahil811/Shopup)
   [Employee-Registry-FrontEnd](https://github.com/Sahil811/Employee-Registry-_FrontEnd)
   [Employee-Registry-BackEnd](https://github.com/Sahil811/Employee-Registry)
  
### About Me
[Sahil_Resume](https://drive.google.com/file/d/1o6V1oLOT9RHnDAsb9dxn-w8XGeXAKdtO/view)  
[Website](https://sahil811.github.io/portfolio-v2/)  

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
