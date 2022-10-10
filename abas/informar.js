
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Icon } from 'react-native-elements';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import Firebase from "./config/firebase.js";
import 'firebase/compat/firestore';
import * as Animatable from 'react-native-animatable';






export  function InformarScreen() {

  const [current, setCurrent] = useState("");
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarMensagem = () =>{
    Firebase.firestore().collection('feedback').add({
      email : email,
      reclamação: mensagem,
      direcionamento: current,
    })
    alert('sua mensagem foi enviada');
    setEmail('');
    setMensagem('');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Animatable.Image animation='fadeInDown' style={styles.bigCircle}  source={require('./anima/essa.jpg')} />
        <Animatable.Image animation='fadeInUp' style={styles.smallCircle}  source={require('./anima/essa.jpg')} />
        <View style={styles.centerizedView}>
          <View style={styles.caixaFlutuante}>
            <View style={styles.logoBox}>
              <Icon
                color='#fff'
                name='comments'
                type='font-awesome'
                size={50}
              />
            </View>
            <Text style={styles.atendimentoTitleText}>Atendimento</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={(texto) => setEmail(texto)}
                autoCapitalize={false}
                keyboardType='email-address'
                textContentType='emailAddress'
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Duvida Ou FeedBack</Text>
              <TextInput
                style={styles.feedInput}
                value={mensagem}
                multiline={true}
                onChangeText={(texto) => setMensagem(texto)}
              />
            </View>
             <View style={{marginTop:8}}></View>
            <Text style={styles.inputLabel}>Direcionamento</Text>
            <View style={{ left:25}}>
                  
                  <RadioButtonGroup
                    containerStyle={{ marginBottom: 10, }}
                    selected={current}
                    onSelected={(value) => setCurrent(value)}
                    radioBackground="gray"
                  >
                    <RadioButtonItem style={{marginTop:5 }} value="app" label="  Desempenho do App" />
                    <View style={{ height:17 }}></View>
                    <RadioButtonItem
                      value="curso"
                      label={
                        <Text style={{  }}>  Assistência Com Curso</Text>
                      }
                    />
                  </RadioButtonGroup>
              </View>
  
            <TouchableOpacity onPress={() => enviarMensagem()} style={styles.enviarButton}>
              <Text style={styles.loginButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor:'#222'
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.5,
    height: Dimensions.get('window').height * 0.5,
    backgroundColor: 'black',
    borderRadius: 1000,
    borderWidth:5,
    borderColor:'black',
    position: 'absolute',
    right: Dimensions.get('window').width * 0.35,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: 'black',
    borderRadius: 1000,
    borderWidth:5,
    borderColor:'black',
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '15%',
  },
  caixaFlutuante: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    borderWidth:3,
    borderColor:'black',
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    borderRadius: 1000,
    borderWidth:2,
    borderColor:'black',
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  atendimentoTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf:'center'
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  feedInput: {
    width: '100%',
    height:100,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  enviarButton: {
    backgroundColor: 'gray',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth:1,
    borderColor:'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.41,
    elevation: 10,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});