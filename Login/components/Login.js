import { StatusBar } from 'expo-status-bar';
import * as Animatable from 'react-native-animatable'
import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity} from 'react-native';
import React,{ useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'


const credenciaisInit ={
  'usuario':'Roselio',
  'senha':'1234'
}
export default function Login({navigation,route}) {
    const [credencias,setCredencias] = useState(credenciaisInit)
    const [usuario,setUsuario] =useState(null)
    const [senha,setSenha] =useState(null)


     async function  func(){
       //await AsyncStorage.clear()
       
       const datauser = await AsyncStorage.getItem('usuario')
       const datasenha = await AsyncStorage.getItem('senha')
      if(senha ===datasenha && usuario===datauser){
        navigation.navigate('Home')
        //await AsyncStorage.setItem('usuario','Roselio')
        //await AsyncStorage.setItem('senha','1234')
      
       console.warn(usuario,senha)
      }else{
        alert('usuario e senha errado')
      }
    }

    
    return (
      
      <View style={styles.container}>
        <View style={styles.header}>
          <Animatable.Image 
          animation='bounceIn'
          duraton='1500'
          style={styles.logo} 
          source={require('../img/logo.png')} resizeMode='stretch'>
  
          </Animatable.Image >
          <Text style={styles.titulomain}>IDEAL-SOFT</Text>
          
        </View>
        <Animatable.View style={styles.footer} animation='fadeInUpBig'>
          <Text style={styles.titulo} >Login</Text>
          
          
          <TextInput 
          style={styles.usuario}
           placeholder='Usuario'
           onChangeText={(val =>setUsuario(val))}
           >

           </TextInput>          
          <TextInput 
          style={styles.usuario}
           placeholder='Senha'
           onChangeText={(val =>setSenha(val))}
           ></TextInput>
          <View style={styles.button}>
            <TouchableOpacity style={styles.bt} onPress={func}>
              <Text style={styles.txtbt}>Logar</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View >
        
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#009387',
      
    },
    header:{
      flex:2,
      justifyContent:"center",
      alignItems:'center',
      //backgroundColor:'#ggg'
      },
      footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,  
        paddingVertical:30,
        paddingHorizontal:30 
    },
    titulo:{
      color:'black',
      fontSize:25,
    },
    subtitulo:{
      color:'black',
      fontSize:20
    },
    logo:{
      height:150,
      width:150
    },
    titulomain:{
      color:'#fff',
      fontSize:35,
      paddingTop:15,
      fontWeight:"bold",
    },
    usuario:{
      borderRadius:7,
      color:'#000',
      fontSize:17,
      backgroundColor:'#DCDCDC',
      height:50,
      marginTop:20,
      paddingLeft:10
    },
    button:{
      flexDirection:'row',
      justifyContent:'flex-end',
     
    },
    bt:{
      backgroundColor:'#009387',
      width: 200,
      alignItems:'center',
      justifyContent:'center',
      height:50,
      marginTop:20,
      borderRadius:15,
      
  
    },
    txtbt:{
      fontSize:20,
      color:'#fff'
    }
  });
  