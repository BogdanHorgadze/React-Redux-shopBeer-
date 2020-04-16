import axios from 'axios'
import {ADDVALUE,GETDATA,CLEAR,AUTOGENERATE,ADDBEERS,INCR,ADDDATATOARRAY,FAVOURITE} from "./actionTypes";

export function thunkCreator(value) {
  return async dispatch => {
    try{
        const API = `https://api.punkapi.com/v2/beers?beer_name=`;
        const response = await axios.get(API + value);
        for (let i = 0; i < response.data.length; i++){
            response.data[i].favourite = false;
        }
        dispatch(getData(response.data))
    }
    catch(e){
        console.log(e)
    }
  };
}


export function scrollThunk(page) {
    return async dispatch => {
        try{
            const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=25`);
             for (let i = 0; i < response.data.length; i++){
                response.data[i].favourite = false;
             }
            dispatch(incr())
            dispatch(addDataToArray(response.data))
        }
        catch(e){
            console.log(e)
        }
    }
}

export function addDataToArray(data) {
    return{
        type : ADDDATATOARRAY,
        data
    }
}


export function incr(value) {
    return{
        type : INCR,
    }
}



export function addValue(value) {
    return{
        type : ADDVALUE,
        value
    }
}

export function getData(beer) {
    return{
        type : GETDATA,
        beer
    }
}

export function clear(beers) {
  return{
      type : CLEAR,
      beers
  }
}

export function autoGenerate(data) {
    return{
        type: AUTOGENERATE,
        data
    }
}

export function addBeers() {
    return{
        type: ADDBEERS,
    }
}

export function favourite(item,index) {
    return{
        type: FAVOURITE,
        item,
        index
    }
}