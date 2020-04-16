import React from 'react'
import classes from './Header.module.css'
import Layout from '../../hoc/Layout/Layout'
import Favourite from '../Favourite/Favourite'
import {Route,NavLink} from 'react-router-dom'

class Header extends React.Component {
    render(){
        return(
            <>
            <div className={classes.Header}>
                <Layout>
                    <div className={classes.Holder}>
                        <div className={classes.Left}>
                             <span><NavLink to="/">Punk Beer Web App</NavLink></span>
                         </div>
                        <div className={classes.Right}>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/favourite">Favourite</NavLink></li>
                            </ul>        
                        </div>
                    </div>
                </Layout>
            </div>
            </>
        )
    }
}

export default Header