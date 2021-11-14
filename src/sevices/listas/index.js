
import axios from 'axios';

export function GetListas(){
    const apiURL = "https://salessystemv1.herokuapp.com/api/v1/compras"
console.log("getAll")
    return axios.get(apiURL + "/all").then(res =>{
      return  res.data
    })
}

export function EditListas(){
    const apiURL = "https://salessystemv1.herokuapp.com/api/v1/compras"

    return axios.get(apiURL + "/all").then(res =>res.data)

}