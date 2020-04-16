import React from 'react'
import classes from './Search.module.css'
import Layout from '../../hoc/Layout/Layout'
import ButtonFind from '../../components/ButtonFind/ButtonFind'
import ButtonDelete from '../../components/ButtonDelete/ButtonDelete'
import {connect} from 'react-redux'
import {addValue} from '../../store/actions/action'


class Search extends React.Component {
    render(){
        return(
            <Layout>
            <div className={classes.Form}>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" onChange={event => this.props.addValue(event.target.value)} placeholder='Search for beer name....'/>
                    <ButtonFind/>
                    <ButtonDelete/>
                </form>
            </div>
            </Layout>
        )
    }
}

function mapStateToProps(state) {
   return {
       nameBeer : state.beer.nameBeer
   }
}

function mapDispatchToProps(dispatch) {
    return {
        addValue: value => dispatch(addValue(value))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)