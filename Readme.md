# Before Start

This project using Node version 18.17.1

## Run it in your local

to run this project in your local device, you need to use node version 18.17.1
and run the script below

### `npm install`

Install the required dependency for the project

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:9000](http://localhost:9000) to run the API.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Available API

### Get patient list

to fetching the patient list you need to run http://localhost:9000/patient with GET methods

### Add patient data

for adding patient data you can hit http://localhost:9000/patient with POST methods
#### Request body
| Key           | Type                               |
| ------------- | ---------------------------------- |
| patientId     | string                             |
| name          | string                             |
| treatmentDate | string                             |
| cost          | string                             |
| medications   | { label: string; value: string }[] |
| treatments    | { label: string; value: string }[] |
