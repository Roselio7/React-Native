import React, {useState,useEffect}from 'react';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';
import obterDados from '../src/api'

export default function Card(){

const [data,setData] = useState('')
const [loading,setLoading] = useState(false)

useEffect(()=>{
const getUser = async () => {
    const resposta= await  obterDados('Cartao')
    setData(resposta.valor)
    setLoading(true)
}
getUser()
},[loading])

function carregando (){


    if(loading ==false){
            
        return <ActivityIndicator size="large" color='#9932CC' />
      
    }else{
        return <Text style={estilo.valor}>{data} Reais</Text>
    }
    }
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center',flex: 1,flexDirection:'row',backgroundColor:'#9932CC',width:'100%', height:20}}>
                <Text style={{ fontSize:19,color:'white',fontWeight:'bold'}}>Cartão</Text>
            </View>
            <View style={{ flex: 9,justifyContent: 'center', alignItems: 'center'}}>
                <Text style={estilo.text}>Total No Cartão</Text>
                {carregando()}
            </View>
        </View>
    )

}
const estilo = StyleSheet.create({
    text:{
        fontSize:28,
    },
    valor:{
        marginTop:20,
        fontSize:25,
        color:'#DC143C'
    }
})