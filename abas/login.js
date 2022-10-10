import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Linking  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Firebase from './config/firebase';
import 'firebase/compat/auth';



export function LoginScreen({navigation}) {

  const [email, setEmail] =  useState('');
  const [password, setPassword] = useState('');
  const [esconder, setEsconder] = useState(true);
  
  async function loginIn(){
    await Firebase.auth().signInWithEmailAndPassword( email, password)
    .then((userCredential) => {
        // Signed in
       var user = userCredential.user;
      {navigation.navigate('TabNav')}
      setEmail('');
      setPassword('');
        // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(email, password === ''){
        alert('Digite seu Email e senha')
      }else{
        alert('Login ou senha incorretos!');
      }
    });

  }

  const facebook = () =>{
    Linking.openURL('https://www.facebook.com/campaign/landing.php?&campaign_id=1661784632&extra_1=s%7Cc%7C320269324047%7Ce%7Cfacebook%7C&placement=&creative=320269324047&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1661784632%26adgroupid%3D63686352403%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1031439%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw3eeXBhD7ARIsAHjssr-X-rxlluOiFgWWiwPHv6viYfvoWfY-t4ikYYbiZ6BM7BPnRUB8cu8aAgatEALw_wcB')
  }

  const instagram = () =>{
    Linking.openURL('https://www.instagram.com/gabriel._.andre/')
  }

  const youtube = () =>{
    Linking.openURL('https://www.youtube.com/')
  }

  const whatsapp = () =>{
    Linking.openURL('https://api.whatsapp.com/send?phone=5582996576997')
  }
  

    return (

      <View style={styles.Container}>
          
          <Animatable.View animation='fadeInLeft' delay={500} style={styles.cont1}>
            <Text style={styles.bemvindo}>Bem-Vindo(a)</Text>
          </Animatable.View>

          <Animatable.View animation='fadeInUp' delay={500} style={styles.cont2}>
            <Text style={styles.title}>Email</Text>
            <TextInput
            placeholder='Digite Seu Email...'
            style={styles.input}
            value={email}
            onChangeText={(text) => String(setEmail(text))}
            />
            <Text style={styles.title2}>Senha</Text>
            
            <View style={styles.cont3}>
              <TextInput
              placeholder='Digite Sua Senha...'
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={esconder}
              />
              <TouchableOpacity style={styles.icon} onPress={() => setEsconder(!esconder)}>
                 {esconder?
                 <Entypo name="eye-with-line" size={24} color="#a1a1a1" />
                 :
                 <Entypo name="eye" size={24} color="#a1a1a1" />
                 }
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => loginIn()} style={styles.button}>
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('TabNav') }} style={styles.button}>
              <Text style={styles.buttonText}>       Acessar Com    <FontAwesome name="google-plus-square" size={20} color="white" /></Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
              <Text style={styles.registroText}>Não Possui Nosso Curso!?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{bottom:10}}>
              <Text style={styles.registroText}>Esqueceu a Senha? </Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding:30}}>
            <TouchableOpacity onPress={()=> facebook()}>
              <FontAwesome5 style={styles.icon2} name="facebook-square" size={40} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> instagram()}>
              <FontAwesome5 style={styles.icon2} name="instagram" size={40} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> whatsapp()}>
              <FontAwesome5 style={styles.icon2} name="whatsapp" size={40} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> youtube()}>
              <FontAwesome style={styles.icon2} name="youtube" size={40} color="gray" />
            </TouchableOpacity>
            </View>


          </Animatable.View>

      </View>
    );
  }


  const styles = StyleSheet.create({
    Container: {
      backgroundColor: '#222',
      flex: 1,
    },

    cont1: {
      marginTop:'14%',
      marginBottom:'8%',
      paddingStart:'5%',
      flex:0.3,
      justifyContent:'center'
    },

    cont2: {
      backgroundColor:'#FFF',
      flex:1,
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
      borderTopWidth:5,
      borderRightWidth:5,
      borderLeftWidth:5,
      borderColor:'gray',
      paddingStart:'5%',
      paddingEnd:'5%'
    },

    cont3: {
      flexDirection:'row',
    },

    icon: {
      position:'absolute',
      width:'9%',
      right:1
    },
    icon2: {
      marginHorizontal:30
    },

    bemvindo: {
      fontSize:28,
      fontWeight:'bold',
      color:'#FFF',
      textAlign:'center',
    },

    title: {
      fontSize:20,
      marginTop:50
    },
    title2: {
      fontSize:20,
      marginTop:25
    },

    input: {
     borderBottomWidth:1,
     height:40,
     marginBottom:12,
     fontSize:16,
     width:'100%',
     padding:8
    },

    button: {
      backgroundColor:'gray',
      borderColor:'black',
      borderWidth:1,
      width:'100%',
      borderRadius:10,
      paddingVertical:8,
      marginTop:20,
      shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    },

    button2: {
      color:'#a1a1a1'
    },

    buttonText: {
      color:'#FFF',
      fontSize:18,
      fontWeight:'bold',
      textAlign:'center'
    },

    registroText: {
      marginTop:14,
      alignSelf:'center',
      color:'#a1a1a1'
    },



  });