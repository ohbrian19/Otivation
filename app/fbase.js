import firebase from "firebase/app";
import "firebase/auth";
import {
  APP_API_KEY,
  APP_AUTH_DOMAIN,
  APP_DATABASE_URL,
  APP_PROJECT_ID,
  APP_STORAGE_BUCKET,
  APP_MESSAGING_SENDER_ID,
  APP_APP_ID,
  APP_MEASUREMENT_ID,
} from "@env";

import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: APP_API_KEY,
  authDomain: APP_AUTH_DOMAIN,
  databaseURL: APP_DATABASE_URL,
  projectId: APP_PROJECT_ID,
  storageBucket: APP_STORAGE_BUCKET,
  messagingSenderId: APP_MESSAGING_SENDER_ID,
  appId: APP_APP_ID,
  measurementId: APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
