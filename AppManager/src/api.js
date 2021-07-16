
import axios from 'axios'

const base = axios.create({

    baseURL:'https://rose-api.herokuapp.com/'
})

export default async function obterDados(val=''){
  try{
    const response = await base.get(val)
    //console.log(response.data)
    return response.data
  }catch(error){
    alert(error.toString())
  }
  
}

