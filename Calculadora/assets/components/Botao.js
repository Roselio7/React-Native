import React from 'react'
import{Text, TouchableHighlight, StyleSheet, Dimensions} from 'react-native'

export default props => {
    const styletype = [estilo.botton]
    if (props.doble) styletype.push(estilo.buttonDoble)
    if (props.triple) styletype.push(estilo.buttonTriple)
    if (props.operation) styletype.push(estilo.operationButton)
    return(

        <TouchableHighlight onPress={() =>props.onClick(props.label)}>
            <Text style={styletype}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const estilo = StyleSheet.create({
    botton:{
        fontSize:40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor:'#f0f0f0',
        textAlign:'center',
        borderWidth: 1,
        borderColor:'#888'
    },
    operationButton:{
        color:'#fff',
        backgroundColor:'#fa8231'
    },
    buttonDoble:{
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple:{
        width:(Dimensions.get('window').width / 4) * 3
    }

})