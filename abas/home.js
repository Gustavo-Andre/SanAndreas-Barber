import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet,  TouchableOpacity, Image, ImageBackground  } from 'react-native';
import  {useEffect, useRef, useState} from 'react';
import { NavigationContainer, Navigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';
import{ MotiView } from 'moti';




export function HomeScreen({navigation}) {

  const animation = useRef(null);
  const animatio = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  const slideInDown = {
    from: {
      top:20,
      opacity: 0.5,
    },
    to: {
      top:0,
      opacity: 1,
    },
  };

  const flipInY = {
    from: {
      opacity: 0.3,
    },
    to: {
      opacity: 1,
    },
  };

    return (
      <View style={styles.animationContainer}>
        <StatusBar hidden />

        <MotiView delay={0}
         from={{
          scale:0.7,
          opacity:0,
         }}
         animate={{
          scale:1,
          opacity:1,
         }}
         transition={{
          type:'timing',
          duration: 1500
         }}
         style={styles.logo}
         >
        <Animatable.Image animation={slideInDown} iterationCount={Infinity} delay={2000} direction="alternate" style={{width:300, height:300,marginBottom:30, top:30, resizeMode:'contain'}}  source={require('./anima/barber.jpg')} />
        <Animatable.View animation={flipInY} iterationCount={Infinity} direction="alternate"  style={styles.caixaFlutuante}>
          <Text style={{marginBottom:10, color:'black', fontSize:20}}>Progresso</Text>
        <Progress.Bar progress={0.3} width={230} height={15} color={'black'} />
        <TouchableOpacity style={styles.progressoButton}
        onPress={() => {
        }}>
          <Text style={{color:'white', textAlign:'center', justifyContent:'center'}}>
          <Entypo name="back-in-time" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        </Animatable.View>
        </MotiView>


        

        <Animatable.View animation='fadeInLeft' delay={1000} style={styles.cont2}>
        <ImageBackground source={require('./anima/essa.jpg')} resizeMode="cover" style={{width:500, height:300, right:48, justifyContent:'center'}} >
        
        <View style={{alignItems:'center',  justifyContent:'center', flexDirection:'row'}}>
        <View style={{}}>
        <TouchableOpacity style={styles.rotaHome}
        onPress={() => {
        navigation.navigate('Trabalho')
        }}
        >
          <Text style={{textAlign:'center', justifyContent:'center'}}>
          <Ionicons name="md-cut-sharp" size={40} color="#222" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rotaHome}
        onPress={() => {
        navigation.navigate('Downloads')
        }}
        >
          <Text style={{textAlign:'center'}}>
          <MaterialCommunityIcons name="cloud-download" size={35} color="#222" />
          </Text>
        </TouchableOpacity>
        </View>

        <View style={{}}>
        <TouchableOpacity style={styles.rotaHome}
        onPress={() => {
        navigation.navigate('Aulas')
        }}
        >
          <Text style={{textAlign:'center'}}>
          <MaterialCommunityIcons name="animation-play" size={35} color="#222" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rotaHome}
        onPress={() => {
        navigation.navigate('Duvidas')
        }}
        >
          <Text style={{textAlign:'center'}}>
          <MaterialCommunityIcons name="chat-question" size={35} color="#222" />
          </Text>
        </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
        </Animatable.View>
         
        

    </View>
    );
  }

  const styles = StyleSheet.create({
    animationContainer: {
      backgroundColor: '#222',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      resizeMode:'contain'
    },

    cont2: {
      backgroundColor:'#bdbdb9',
      width:'100%',
      top:20,
      flex:1,
      paddingStart:'5%',
      paddingEnd:'5%',
      borderColor:'black',
      borderTopWidth:5,
      borderLeftWidth:5,
      borderRightWidth:5,
    },

    buttonContainer: {
      paddingTop: 20,
    },

    progressoButton: {
      width:'25%',
      height:30,
      top:10,
      marginHorizontal:'10%',
      marginBottom:'9%',
      
    },

    rotaHome: {
      justifyContent:'center',
      alignItems:'center',
      height:50,
      width: 180,
      marginVertical:20,
      marginHorizontal:20,
      right:23,
      borderWidth:4,
      borderColor:'#222',
      backgroundColor:'gray',
      borderRadius: 30,
      shadowColor: 'black',
      shadowOffset: {
        width: 3,
        height: 7,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10,
    },
    

    caixaFlutuante: {
      justifyContent:'center',
      alignItems:'center',
      height:'20%',
      width: '80%',
      marginBottom:10,
      top:50,
      borderRadius: 10,
      alignSelf: 'center',
      paddingHorizontal: 14,
      paddingBottom: 30,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },

  });