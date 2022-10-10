import { Text,  View,  TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView, ImageBackground } from 'react-native';
import  {useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import {itens, itens2, itens3} from './dados';
import { TextInput } from 'react-native-gesture-handler';
import Firebase from './config/firebase';
import 'firebase/compat/firestore';


const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.82

function renderItem({item}){


  return(
    <View style={{width:400,}}>
        
       <Image style={{height:250, width:350, borderTopLeftRadius:15, borderTopRightRadius:15,}}
       source={{uri:`${item.img}`}}
       />
       <View style={styles.caixa}>
       <Text style={{textAlign:'center', color:'white',  fontSize:15}}>{item.nome}</Text>
         <Text style={styles.titulo}>{item.titulo}</Text>
         <Text style={styles.descri}>{item.descri}</Text>
       </View>

    </View>
  )
};

export function TrabalhoScreen ({navigation}) {

  useEffect(() =>{
    Firebase.firestore().collection('slade').orderBy('titulo', 'desc').onSnapshot(snapshot=>{
      setSlade(snapshot.docs.map(function(doc){
        return {info:doc.data()}
      }));
    })
  },[])

  const [cortes, setCortes] = useState(false);
  const [material, setMaterial] = useState(false);
  const [professor, setProfessor] = useState(true);
  const [slade, setSlade] = useState([]);

  function ativarMaterial(){
    setMaterial(true);
    setCortes(false);
    setProfessor(false);
  }

  function ativarCortes(){
    setMaterial(false);
    setCortes(true);
    setProfessor(false);
  }

  function ativarProfessor(){
    setMaterial(false);
    setCortes(false);
    setProfessor(true);
  }


    return (
      
         
        <View style={{ flex:1, backgroundColor:'#222'}}>
        
        
        <ScrollView contentContainerStyle={{ justifyContent:'center', alignItems:'center'}} style={{ flex:1,backgroundColor:'#222'}}>

        {cortes?
        <View>
          <Image style={styles.Header} source={require('./anima/essa.jpg')}/>
          <View style={styles.Header2}><Text style={styles.texto}>Cortes</Text></View>

        {
          slade.map((val, index)=>{

            return(
              <View>
                <Text style={{color:'white', textAlign:'center', fontSize:30}}>{val.info.titulo}</Text>
              </View>
              
            )
          })
        }
         
        <Carousel
          data={itens}
          layout={'stack'}
          firstItem={2}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
        />

        <Carousel
        data={itens2}
        firstItem={2}
        layout={'stack'}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        />
        <Carousel
        data={itens}
        firstItem={2}
        layout={'stack'}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        />
        </View>
        :null
        }


        {material?
        <View>
        <Image style={styles.Header} source={require('./anima/essa.jpg')}/>
        <View style={styles.Header2}><Text style={styles.texto}>Materiais</Text></View>
        
        <Carousel
        data={itens3}
        firstItem={2}
        layout={'stack'}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        />
        <Carousel
        data={itens3}
        firstItem={2}
        layout={'stack'}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        />
        <Carousel
        data={itens3}
        firstItem={2}
        layout={'stack'}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        />
        </View>
        :null
        }

        {professor?
        <View style={{flex:1}}>
           <Image style={styles.Header} source={require('./anima/essa.jpg')}/>
        <View style={styles.Header2}><Text style={styles.texto}>Profissão</Text></View>
         
         
        <View style={styles.caixaFlutuante}>
          <Image style={styles.logoBox} source={require('./anima/te.jpg')}/>
          <Text style={{ marginVertical:30, textAlign:'center', color:'white'}}>Gabriel André</Text>
          <Text style={styles.textoPro}> pksokdosdsmdkdmskmdskdmskdmskmdskmdskndkndjnzjxnkxnzkxnkzjnknznzjnxjznxzknxknxknkznknk</Text>
        </View>
        <Text style={{marginBottom:500}}></Text>
        
        </View>
        :null
        }
         
        </ScrollView>
         
         
        
        <ImageBackground source={require('./anima/essa.jpg')} resizeMode="cover" style={styles.cont} >
        <TouchableOpacity
        onPress={() => ativarMaterial()}
         style={styles.buttom}>
        <FontAwesome5 name="toolbox" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => ativarProfessor()}
         style={styles.buttom2}>
        <FontAwesome name="user" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => ativarCortes()}
        style={styles.buttom}>
        <FontAwesome name="cut" size={35} color="black" />
        </TouchableOpacity>
        </ImageBackground>
       
        
        </View>


    );
  }





  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor:'#222'
    },

    logoBox: {
      width: 200,
      height: 200,
      backgroundColor: 'gray',
      borderWidth:2,
      borderRadius:1000,
      borderColor:'gray',
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top:30,
      marginBottom:50,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },

    caixaFlutuante: {
      marginBottom:50,
      width: 370,
      height:500,
      backgroundColor: 'black',
      borderRadius: 15,
      borderColor:'white',
      alignSelf: 'center',
      paddingHorizontal: 14,
      marginTop:0,
      shadowColor: 'white',
      shadowOffset: {
        width: 10,
        height: 20,
      },
      shadowOpacity: 1,
      shadowRadius: 3.84,
      elevation: 15,
    },

    bigCircle: {
      width: Dimensions.get('window').height * 0.4,
      height: Dimensions.get('window').height * 0.4,
      backgroundColor: 'black',
      borderRadius: 1000,
      borderWidth:5,
      borderColor:'black',
      position: 'absolute',
      right: Dimensions.get('window').width * 0.80,
      top: 450,
    },
    smallCircle: {
      width: 50,
      height: 50,
      backgroundColor: 'black',
      borderRadius: 1000,
      borderWidth:5,
      borderColor:'black',
      position: 'absolute',
      bottom: Dimensions.get('window').width * 0.40,
      right: Dimensions.get('window').width * 0.1,
    },

    Circle3: {
      width: Dimensions.get('window').height * 0.14,
      height: Dimensions.get('window').height * 0.14,
      backgroundColor: 'black',
      borderRadius: 1000,
      borderWidth:5,
      borderColor:'black',
      position: 'absolute',
      right: Dimensions.get('window').width * -0,
      top: 20,
    },

    Circle4: {
      width: 60,
      height:60,
      backgroundColor: 'black',
      borderRadius: 1000,
      borderWidth:5,
      borderColor:'black',
      position: 'absolute',
      right: Dimensions.get('window').width * 0.68,
      top: 90,
    },

     gloss:{
      position:'absolute',
      color:'black',
      alignSelf:'center',
      top:70,
      fontSize:30,
      paddingRight:40
     },

    buttom:{
      width:180,
      height:50,
      marginHorizontal:-30,
      marginTop:80,
      borderRadius:50,
      borderWidth:3,
      borderColor:'black',
      alignItems:'center',
      justifyContent:'center',
      bottom:7,
      backgroundColor:'gray'

    },

    buttom2:{
      height:50,
      width:180,
      marginHorizontal:-40,
      marginTop:-30,
      marginVertical:10,
      borderRadius:50,
      borderWidth:3,
      borderColor:'black',
      alignItems:'center',
      justifyContent:'center',
      bottom:10,
      backgroundColor:'gray'

    },



    cont:{
      position:'absolute',
      left:-20,
      bottom:0,
      backgroundColor:'white',
      flexDirection:'row',
      borderColor:'black',
      borderWidth:5,
      right:-20,
      height:140,
      alignItems:'center',
      justifyContent:'center',


    },

    titulo:{
      left:10,
      color:'#fafafa',
      fontSize:13,
      
    },

    descri:{
      color:'gray',
      fontSize:12,
      width:300,
      left:10,
      height:60,

      
    },

    caixa:{
      backgroundColor:'black',
      width:350,
      borderBottomEndRadius:15,
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15,
      marginBottom:200,
      marginTop:-1,
      shadowColor: 'white',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10,
    },

    Header:{
      borderWidth:5,
      borderColor:'black',

      height:70,
      width:400, 
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      alignSelf:'center',
    },
    Header2:{
      height:70,
      width:400, 
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15,
      borderBottomWidth:1,
      borderRightWidth:1,
      borderLeftWidth:1,
      borderBottomRightRadius:15,
      borderColor:'gray',
      backgroundColor:'black',
      alignSelf:'center',
      marginBottom:120,
      alignItems:'center',
      justifyContent:'center',
      shadowColor: 'white',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 1,
      shadowRadius: 3.84,
      elevation: 15,
    },
    
    texto:{
       textAlign:'center',
       color:'white',
       fontSize:30,
       shadowColor: 'white',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 1,
      shadowRadius: 3.84,
      elevation: 15,


    },
    textoPro:{
     color:'gray',
    },


  });  