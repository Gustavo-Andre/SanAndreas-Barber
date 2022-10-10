import * as React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { Video, AVPlaybackStatus, ResizeMode } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5, MaterialIcons, Entypo, Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import  {useEffect, useRef, useState} from 'react';
import DropDownItem from "react-native-drop-down-item";
import SwipeContainer from 'react-native-scroll-up-container';
import { BorderlessButton } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import * as ScreenOrientation from 'expo-screen-orientation'
import VideoPlayer from 'expo-video-player';

function Aulas(){
  return(
<View>

</View>
  );
};

export function ReprodutorScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [abrir, setAbrir] = useState(false);
  const [abrir2, setAbrir2] = useState(false);

  return (
    <SafeAreaView style={{}}>
    <SwipeContainer 
    useLine={false}
    containerStyle={{flex:1,}}
    translateY={300}
    overValue={50}
    
    topComponent={
      <View style={styles.cont1}>
        <ImageBackground source={require('./anima/essa.jpg')} resizeMode="cover" style={{width:500, height:'100%', justifyContent:'center', }} >
        <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      
        </ImageBackground>
        
      </View>
    }
    limitTopValue={50}
    limitBottomValue={250}
  >
    <View style={styles.cont2}>
    
    <View><FontAwesome5 name="grip-lines" size={24} color="gray" /></View>

            <View style={{flex:1, alignItems:'center', resizeMode:'contain'}}>
              <View style={{flexDirection:'row', alignItems:'center', marginBottom:20}}>
              <TouchableOpacity onPress={() => setAbrir(!abrir)}
              style={styles.modulo}>
              {
              abrir?
              <Text style={{margin:5}}>  <Entypo name="folder-video" size={24} color="white" /> <Text style={{color:'gray', fontSize:24, marginTop:30, marginBottom:5}} >  Modulo-01 </Text></Text>
              :
              <Text style={{margin:5}}>  <Entypo name="folder-video" size={24} color="gray" /> <Text style={{color:'gray', fontSize:24, marginTop:30, marginBottom:5}} >  Modulo-01 </Text></Text>
              }
              </TouchableOpacity>

              {
              abrir?
              <TouchableOpacity style={styles.seta} onPress={() => setAbrir(!abrir)} ><AntDesign name="downcircleo" size={17} color="gray" /></TouchableOpacity>
              :
              <TouchableOpacity style={styles.seta} onPress={() => setAbrir(!abrir)} ><AntDesign name="upcircleo" size={17} color="gray" /></TouchableOpacity>
              }
              </View>
              
              {
              abrir?
              <View>

              <View style={styles.aula}>
              <TouchableOpacity>
                     <Text style={styles.aulaText}><Entypo name="video" size={20} color="gray" />   Aula-01</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoAula}>
                      <Text><Feather name="download" size={20} color="gray" /></Text>
              </TouchableOpacity>
              </View>


              <View style={styles.aula}>
              <TouchableOpacity>
                     <Text style={styles.aulaText}><Entypo name="video" size={20} color="gray" />   Aula-01</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoAula}>
                      <Text><Feather name="download" size={20} color="gray" /></Text>
              </TouchableOpacity>
              </View>

              </View>
              : <View style={{borderBottomWidth:1, width:400, right:35, marginTop:40 }}></View>
              }
              <View style={{borderBottomWidth:1, borderColor:'gray', width:425, right:35, marginBottom:10 }}></View>








            </View>






            

            

            

    </View>
  </SwipeContainer>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    color:'red'
  },

  aula: {
    left:-113,
    marginTop:10, 
    flexDirection:'row'

  },

  botaoAula:{
    marginHorizontal:20,
    alignItems:'center',
    right:-184,
    marginTop:5,

  },

  check:{
    alignSelf:'flex-start',
    left:20,
    top:10,
  },

  seta: {
    left:14,
    top:23
  },

  aulaText: {
    margin:5,
    color:'gray',
    fontSize:20,
    paddingLeft:50
  },

  cont1: {
    width:'100%',
    backgroundColor:'withe',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },

  cont2: {
    flex:1,
    width:'100%',
    backgroundColor:'#222',
    alignItems:'center',
    borderWidth:6,
    borderColor:'black'
    
  },

  modulo: {
    marginTop:50,
    justifyContent:'center',
    alignItems:'center',
    width:390,
    borderBottomWidth:1,
    borderColor:'gray',
    width:'60%',
    marginBottom:8

    
  },


  video: {
    alignSelf: 'center',
    width: '80%',
    height: '64%',
    marginBottom:50
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#071540',
    width:'95%',
    height:45,
    marginBottom:30,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    top:0

  },
});