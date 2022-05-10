import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { StyleSheet ,View,Image,Text,TouchableOpacity} from 'react-native'
import Intro from './introslider'


export default function StartScreen({ navigation }) {
  
  return (
  <View style={{flex:1}}>
  
    <Intro/>
    <View style={styles.container}>
      
    
  <Button style={styles.button1} onPress={() => navigation.navigate("Login")} ><Text style={styles.text1}> Login</Text></Button>
  <Button style={styles.button2} onPress={() => navigation.navigate("Signup")} ><Text style={styles.text2}> Sign up</Text></Button>
  </View>    
  </View>
  );
}




const styles = StyleSheet.create({
  container: {
     marginLeft:'20%',
    flexDirection: 'row',
    marginBottom:'10%',
 
  },
  button1: {
    backgroundColor: '#000000',
    width: '40%',
    height: 40
  },
  text1:{
    color:'#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  button2: {
    backgroundColor: '#B0B0B0	',
    width: '40%',
    height: 40
  },
  text2:{
    color:'#000000',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  }
});