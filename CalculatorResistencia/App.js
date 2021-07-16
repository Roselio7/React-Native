import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, Text, View ,TouchableHighlight, TextInput, Alert,ImageBackground } from 'react-native';

export default function App() {
const [valor1,setValor1] = useState('')
const [valor2,setValor2] = useState('')
const [valor3,setValor3] = useState('')
const [valor4,setValor4] = useState('')
const [valor5,setValor5] = useState('')
const [resultado,setResultado] = useState('')

const calc=()=>{
  
  
  if(valor1 ==0 || !valor1){
    alert('Preencha pelo menos os 2 Primeiros campos')
    return
  }
  if(valor2 ==0 || !valor2){
    alert('Preencha pelo menos os 2 Primeiros campos')
    return
  }
  
  if (valor2 !=''  && valor1 !='' && valor3 =='' && valor4 =='' && valor5 ==''){
    const r = 1/((1/valor1)+(1/valor2))
    setResultado (r.toFixed(1))
    setValor1('')
    setValor2('')
  }else if(valor2 !=''  && valor1 !='' && valor3 !='' && valor4 =='' && valor5 ==''){
    const r = 1/((1/valor1)+(1/valor2)+(1/valor3))
    setResultado (r.toFixed(1))
    setValor1('')
    setValor2('')
    setValor3('')
  }else if(valor2 !=''  && valor1 !='' && valor3 !='' && valor4 !='' && valor5 ==''){
    const r = 1/((1/valor1)+(1/valor2)+(1/valor3)+(1/valor4))
    setResultado (r.toFixed(1))
    setValor1('')
    setValor2('')
    setValor3('')
    setValor4('')
  }else if(valor2 !=''  && valor1 !='' && valor3 !='' && valor4 !='' && valor5 !=''){
  const r = 1/((1/valor1)+(1/valor2)+(1/valor3)+(1/valor4)+(1/valor5))
  setResultado (r.toFixed(2))
  setValor1('')
  setValor2('')
  setValor3('')
  setValor4('')
  setValor5('')
  }
}

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Calcular Resistência</Text>
      <Text style={estilos.subtitulo}>em paralelo</Text>
      <StatusBar style="auto" backgroundColor={'#37c732'}/>
      <View style={estilos.cont}>
          <TextInput style={estilos.inputs} keyboardType={'numeric'} value={valor1} placeholder={'Primeiro valor'} onChangeText={(valor1)=>setValor1(valor1)}></TextInput>
          <TextInput style={estilos.inputs} keyboardType={'numeric'} value={valor2} placeholder={'Segundo valor'} onChangeText={(valor2)=>setValor2(valor2)}></TextInput>
          <TextInput style={estilos.inputs} keyboardType={'numeric'} value={valor3} placeholder={'Terceiro valor'} onChangeText={(valor3)=>setValor3(valor3)}></TextInput>
          <TextInput style={estilos.inputs} keyboardType={'numeric'} value={valor4} placeholder={'Quarto valor'} onChangeText={(valor4)=>setValor4(valor4)}></TextInput>
          <TextInput style={estilos.inputs} keyboardType={'numeric'} value={valor5} placeholder={'Quinto valor'} onChangeText={(valor5)=>setValor5(valor5)}></TextInput>
          <View  style={estilos.contbtn} marginTop={30}>
              <TouchableHighlight style={estilos.btn} onPress={()=>calc()}>
                <Text style={estilos.btntxt}>Calcular</Text>
                </TouchableHighlight>
          </View>
          <View marginTop={30}>
              <Text style= {estilos.resultado}>Equivalente  {resultado}</Text>
          </View>
      </View>
    </View>
    
  );
}

const estilos = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:5
  },
  titulo:{
    fontSize:32,
    color:'#067515',
    marginTop:35,
    fontWeight: "bold",
  },
  subtitulo:{
    fontSize:30,
    color:'#067515',
    fontWeight: "bold",
  },

  inputs:{
   // width:'95%',
    borderWidth:1,
    borderColor:'#08c221',
    padding:10,
    borderRadius:10,
    marginTop:10,
    marginBottom:10,
    marginLeft:15,
    marginRight:15,
    fontSize:18,
    backgroundColor:'#e9f5e9',
  },
  cont:{
    width:'100%',
    marginTop:30,
    //marginLeft:10,
    //marginRight:10,

  },
  resultado:{
    fontSize:25,
    color:'#bf212b',
    textAlign:'center'
  },
  contbtn:{
    alignItems:'center',
  },
  btn:{
    width:'70%',
    backgroundColor:'#37c732',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:18,
  },
  btntxt:{
    fontSize:22,
    color:'white',

  },
  
 
});
