import {ADDVALUE,GETDATA,CLEAR,AUTOGENERATE,ADDBEERS,INCR,ADDDATATOARRAY,FAVOURITE} from "../actions/actionTypes";

const initialState = {
    dataBeer : [],
    nameBeer : '',
    scrollPos : false,
    page : 2,
}

export default function beer(state = initialState, action) {
    switch (action.type) {
        case ADDVALUE:
            return{
              ...state, nameBeer : action.value  
            }
            break;
        case GETDATA:
            return{
               ...state, dataBeer : [...action.beer,...state.dataBeer] 
            }
        case CLEAR:
            return{
               ...state, dataBeer : [...action.beers] 
            }
        case AUTOGENERATE:
            return{
                ...state, dataBeer: action.data
            }
        case ADDBEERS:
            return{
                ...state, addBeers : true
            }
        case INCR:
            return{
                ...state,   page : state.page + 1
            }
        case ADDDATATOARRAY:
            return{
                ...state, dataBeer : state.dataBeer.concat(action.data)
            }
        case FAVOURITE:
            return{
                ...state, dataBeer : state.dataBeer.map(item => {
                    if(JSON.stringify(item) === JSON.stringify(action.item)){
                        item.favourite = !item.favourite;
                        return item
                    }
                    else{
                        return item
                    }
                })
            }
        default:
        return state
            break;
    }
}