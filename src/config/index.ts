import firebase from 'firebase-admin'
const jsonKey = require('./care-now-db-firebase-adminsdk-i791z-e3b061a4be.json')

const config = {
  apiKey: "AIzaSyBux5y3j4oyEULvBqekOJKUVicsZd7rO6I",
  authDomain: "care-now-db.firebaseapp.com",
  projectId: "care-now-db",
  storageBucket: "care-now-db.appspot.com",
  messagingSenderId: "159539381344",
  appId: "1:159539381344:web:1fd3fa09aa4a524705af05",
  measurementId: "G-BT40GGLHNX",
  credential: firebase.credential.cert(jsonKey)
}

const firecloud = firebase.initializeApp(config)
module.exports = firecloud