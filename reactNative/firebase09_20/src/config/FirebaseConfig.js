import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyARU9hQN-XT-2tl293SjakzEsS0EGx1pKU",
    authDomain: "aulasentra21.firebaseapp.com",
    projectId: "aulasentra21",
    storageBucket: "aulasentra21.appspot.com",
    messagingSenderId: "576124175805",
    appId: "1:576124175805:web:145b312f44bbfc47d3fed4"
}
firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()
export default database