import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import Botao from './assets/components/Botao'
import Display from './assets/components/Display'
import * as SplashScreen from 'expo-splash-screen';


 const inicialestado ={
  displayValue:'0',
  clearDisplay:false,
  operation: null,
  values:[0,0],
  current: 0

 }
export default function App() {

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.hideAsync()
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  const [displayvalue,setDisplayvalue] = useState('0')
  const [clearDisplay,setClearDisplay] = useState(false)
  const [operacao,setOperation] = useState(null)
  const [values,setValues] = useState([0,0])
  const [current,setCurrent] = useState(0)

  
  const addDigit = n =>{

    const cleardisplay = displayvalue ==='0' || clearDisplay

    if(n ==='.' && !clearDisplay && displayvalue.includes('.')){
      return
    }
    const currentvalue = cleardisplay ? '' : displayvalue
    const display = currentvalue + n
    setDisplayvalue(display)
    setClearDisplay(false)
    

    if(n !=='.'){
      const newValue = parseFloat(display)
      const valores = values 
      valores[current] = newValue
      setValues(valores)
      //console.warn(display)
    }

  }


  const clearMemory = () =>{
    setDisplayvalue('0')
    setClearDisplay(false)
    setOperation(null)
    setValues([0,0])
    setCurrent(0)
  }
  const setarOperacao = operation =>{
    
    if(current ===0){
      setOperation(operation)
      setCurrent(1)
      setClearDisplay(true)
    }else{
      const equals = operation === '='
      const valor = values
      
      try{
        valor[0] = eval(`${valor[0]} ${operacao} ${valor[1]}`)
      }catch (e){
        valor[0] = values[0]
      }
      valor[1] = 0
      setDisplayvalue(`${valor[0]}`)
      setOperation(equals ? null : operacao)
      setCurrent(equals ? 0 : 1)
      setClearDisplay(!equals)
      setValues(valor)

    }

  }
  return (
    <View style={styles.container}>
      <Display value={displayvalue}/>
      <View style={styles.botton}>
        <Botao label="AC" triple onClick={clearMemory}/>
        <Botao label="/" operation onClick={setarOperacao}/>
        <Botao label="7" onClick={addDigit}/>
        <Botao label="8" onClick={addDigit}/>
        <Botao label="9" onClick={addDigit}/>
        <Botao label="*" operation onClick={setarOperacao}/>
        <Botao label="4" onClick={ addDigit}/>
        <Botao label="5" onClick={addDigit}/>
        <Botao label="6" onClick={addDigit}/>
        <Botao label="-" operation onClick={setarOperacao}/>
        <Botao label="1" onClick={ addDigit}/>
        <Botao label="2" onClick={addDigit}/>
        <Botao label="3" onClick={addDigit}/>
        <Botao label="+" operation onClick={setarOperacao}/>
        <Botao label="0" doble onClick={addDigit}/>
        <Botao label="." onClick={addDigit}/>
        <Botao label="=" operation onClick={setarOperacao}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botton:{
    flexDirection:'row',
    flexWrap:'wrap',

  }
});
