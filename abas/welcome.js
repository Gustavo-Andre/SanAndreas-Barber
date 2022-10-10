import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import  {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import{ MotiView } from 'moti';
import { StatusBar } from 'expo-status-bar';




export function welcomeScreen({navigation}) {

  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

    return (
      <View style={styles.Container}>
        <StatusBar style="black" backgroundColor="#a1a1a1" />
         
         <MotiView delay={0}
         from={{
          scale:0,
          opacity:0,
          rotate:'360deg'
         }}
         animate={{
          scale:1,
          opacity:1,
          rotate:'0deg'
         }}
         transition={{
          type:'timing',
          duration: 3000
         }}
         style={styles.logo}
         >
        <LottieView
          autoPlay={true}
          loop={true}
          ref={animation}
          style={{
            width: 350,
            height: 350,
            backgroundColor: '#222',
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require('./anima/tesoura.json')}
         />
         </MotiView>



      <Animatable.View delay={3000} animation='fadeInUp' style={styles.ContainerText}>
        <Text style={styles.title}>Assista Seus Cursos</Text>
        <Text style={styles.texto}>Faça o Login Para Começar!</Text>
        
        <TouchableOpacity style={styles.button}
          onPress={() => {
            navigation.navigate('Login')
          }}
          >
            <Text style={styles.buttonText}>
              Acessar
            </Text>
        </TouchableOpacity>

      </Animatable.View>

      </View>
    );
  }


  const styles = StyleSheet.create({
    Container: {

      backgroundColor: '#222',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },


    logo: {

     flex:2,
     justifyContent:'center',
     alignItems:"center",

    },

    ContainerText: {

      flex:1,
      width:'90%',
      backgroundColor:'#FFF',
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
      borderTopWidth:5,
      borderRightWidth:5,
      borderLeftWidth:5,
      borderColor:'gray',
      paddingStart:'5%',
      paddingEnd:'5%',
      alignItems:'center'

    },

    button: {
      position: 'absolute',
      backgroundColor:'gray',
      borderColor:'black',
      borderWidth:1,
      borderRadius:10,
      paddingVertical:8,
      width:'60%',
      alignSelf:'center',
      bottom:'15%',
      alignItems:'center',
      justifyContent:'center',
      shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    },

    buttonText: {
     fontSize:18,
     color:'#FFF',
     fontWeight:'bold'
    },

    title: {
     fontSize:24,
     fontWeight:'bold',
     marginTop:28,
     marginBottom:12,

    },

    texto: {
     color:'#a1a1a1'
    },

  });