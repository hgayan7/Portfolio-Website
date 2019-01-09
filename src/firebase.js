import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    //firebase credentials
  };
  firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;