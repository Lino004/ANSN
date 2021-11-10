import * as firebase from 'firebase/app';
import 'firebase/database';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDugHKLiu_TmJxFE4L8q3gOn5O03PQVcmU',
  authDomain: 'asns-b5381.firebaseapp.com',
  databaseURL: 'https://asns-b5381.firebaseio.com',
  projectId: 'asns-b5381',
  storageBucket: 'asns-b5381.appspot.com',
  messagingSenderId: '115400608033',
  appId: '1:115400608033:web:36b1c3e67cd9b5c4155660',
  measurementId: 'G-KMN8ZZ20YX',
});

export default app.database();