import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCdg8VcSzkjPAtJy6sJmalH_67U3PHu4Ck",
  authDomain: "hardcoders-react-chat.firebaseapp.com",
  databaseURL: "https://hardcoders-react-chat.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base
