## Internship Assignment For ORU Phones
I developed the comprehensive Internship Assignment from Taiyo AI by utilizing the capabilities of React and Tailwind as a sophisticated front-end client, seamlessly integrated with a dynamic Chart.js and leaflet using Typescript. The assignment's data persistence is fortified by the React-redux.



# Getting Started with App

1. Clone the repository:

```bash
git clone https://github.com/lokendramorda/taiyo
cd covid-dashboard
npm install
```

## Redux Store Setup
The Redux store is used to manage the state of the application. It stores contact information using the Redux Toolkit.

Installation
Install Redux Toolkit:

```bash
npm install @reduxjs/toolkit react-redux
```
contactsSlice.js file to define the Redux slice containing actions and reducers for contacts.

Import and use the createSlice function from @reduxjs/toolkit to create a slice for managing contacts.


## Linear Graph with React Chart.js
The linear graph displays COVID-19 cases over time using React Chart.js.

Installation
Install React Chart.js:

```bash
npm install react-chartjs-2 chart.js chartjs-adapter-moment
```
Create a LineGraph.js component to render the linear graph.

Import necessary components from react-chartjs-2 and chart.js and configure the data and options for the graph.

Usage
Use the LineGraph component to render the linear graph. Pass the COVID-19 case data as a prop to the component.

```bash
<LineGraph data={covidCaseData} />
```

## COVID-19 Map with React Leaflet
The map displays COVID-19 data using Leaflet and React Leaflet.

Installation
Install React Leaflet:

```bash
npm install leaflet react-leaflet
```
Create a CovidMap.js component to render the COVID-19 map.

Import necessary components from react-leaflet and leaflet and set up the map with markers.

Use the CovidMap component to render the COVID-19 map. Pass COVID-19 data as a prop to the component.

```bash
 <CovidMap data={covidMapData} />
```


Feel free to customize the instructions and information based on your structure 


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
