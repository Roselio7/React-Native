import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,FlatList, StatusBar,ActivityIndicator } from 'react-native';
import obterDados from '../src/api'


export default function Home(){

const [data,setData] = useState({})
const [loading,setLoading] = useState(false)

// hook que funciona pra executar uma ou mais vezes um trexo de codigo
useEffect(()=>{
const getUser = async () => {
    const resposta = await obterDados('Produtos')
    setData(resposta)
    setLoading(true)
    //console.log(resposta)
    //console.log(data.['0001'].produto)  
}
getUser()
},[loading])
const lista =[]
const getValor = () =>{
    
  for (var property in data){
    lista.push(property);    
  }
  
}
getValor()
function getItem (item){
    
    return (
        <View style={{ flex:1,flexDirection:'row', paddingTop:5}}>
            <StatusBar  backgroundColor= '#9932CC'/>
            
            <View style={{ width:'20%',alignItems: 'center'}}>
                <Text style={{ margin:8,fontSize:17,color:'gray'}}>{item}</Text>
            </View>
            <View style={{ width:'45%',alignItems: 'flex-start'}}>
                <Text style={{ margin:8,fontSize:17,color:'gray'}}>{data[item].produto}</Text>
            </View>
            <View style={{ width:'18%',alignItems: 'center'}}>
                <Text style={{ margin:8,fontSize:17,color:'gray'}}>{data[item].qnt}</Text>
            </View>
            <View style={{ width:'20%',alignItems: 'center'}}>
                <Text style={{ margin:8, fontSize:17,color:'#B22222'}}>{data[item].valor}</Text>
            </View>
        </View>
    )
}
    if(loading ==false){
        
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <ActivityIndicator size="large" color='#9932CC' />
            </View>
        )
    }
 
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', }}>
            <View style={{ justifyContent: 'center', alignItems: 'center',flex: 1,flexDirection:'row',backgroundColor:'#9932CC',width:'100%'}}>
                <Text style={{ fontSize:19,color:'white',fontWeight:'bold'}}>Lista de Produtos</Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center',flexDirection:'row',backgroundColor:'#9932CC',width:'100%',}}>
            <View style={{ width:'20%',alignItems: 'center'}}>
                <Text style={{ margin:8,fontSize:17,color:'white'}}>Código</Text>
            </View>
            <View style={{ width:'45%',alignItems: 'center'}}>
                <Text style={{ margin:8,fontSize:17,color:'white'}}>Produto</Text>
            </View>
            <View style={{ width:'18%',alignItems: 'center'}}>
                <Text style={{ margin:8,fontSize:17,color:'white'}}>Qnt</Text>
            </View>
            <View style={{ width:'20%',alignItems: 'center'}}>
                <Text style={{ margin:8,fontSize:17,color:'white'}}>Valor</Text>
            </View>
            </View>
            <View style={{ flex: 9, justifyContent: 'center', alignItems: 'flex-start', }}>
            <FlatList
            style={{ flex: 1,width:'100%', height:'100%'}}
            data={lista}
            renderItem={({item})=>getItem(item)}
            
            style={{ width:'96%'}}
            />
            </View>
            
        </View>
    )

}