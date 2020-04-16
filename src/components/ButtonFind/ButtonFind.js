import React from 'react'
import classes from './ButtonFind.module.css'
import {connect} from 'react-redux'
import {thunkCreator} from '../../store/actions/action'

class ButtonFind extends React.Component {
    render(){
        return(
            <>
            <button onClick={() => this.props.request(this.props.nameBeer)} className={classes.Button}>Search</button>
            </>
        )
    }
}

function mapStateToProps(state) {
    return{
        nameBeer : state.beer.nameBeer
    }
}

function mapDispatchToProps(dispatch) {
    return{
       request : (nameBeer) => dispatch(thunkCreator(nameBeer))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ButtonFind)