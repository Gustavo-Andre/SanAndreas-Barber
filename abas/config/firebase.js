
import firebase from "firebase/compat/app";


const firebaseConfig = {
    apiKey: "AIzaSyAWknWIbnTHbRDuggI_cWiXHEHo-Sbm2I0",
    authDomain: "barbershop-28f2e.firebaseapp.com",
    projectId: "barbershop-28f2e",
    storageBucket: "barbershop-28f2e.appspot.com",
    messagingSenderId: "277345504044",
    appId: "1:277345504044:web:9e06e8be7e92831e67ba89",
    measurementId: "G-9685J5083P"
  };

if(firebase.apps.length === 0){
  var Firebase = firebase.initializeApp(firebaseConfig);
}



const  googleLogin = async () =>{
  const provider = new firebase.auth.GoogleAuthProvider();
  let result = await firebase.auth().signInWithPopup(provider);
  return result;
}


const google = async () =>{
  let result = googleLogin();

  if(result !== null){
    {navigation.navigate('TabNav')}
  }else{
    alert('erro');
  }
}

export {googleLogin, google} ;
export default Firebase;