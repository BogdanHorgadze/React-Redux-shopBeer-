import React from 'react'
import classes from './ButtonDelete.module.css'
import {connect} from 'react-redux'
import {clear} from '../../store/actions/action'
import axios from 'axios'

class ButtonDelete extends React.Component {

    async clearHandler(){
        try{
            const API = 'https://api.punkapi.com/v2/beers';
            const response = await axios.get(API);
            this.props.clear(response.data)
        }   
        catch(e){
            console.log(e)
        } 
    }

    render(){
        return(
            <>
            <button onClick={this.clearHandler.bind(this)} className={classes.Button}>Clear</button>
            </>
        )
    }
}

function mapStateToProps(state) {
    return{
      dataBeer : state.beer.dataBeer     
    }
}

function mapDispatchToProps(dispatch) {
    return{
      clear : (beers) => dispatch(clear(beers))   
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ButtonDelete)