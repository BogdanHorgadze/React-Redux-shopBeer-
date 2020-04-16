import React from 'react'
import {connect} from 'react-redux'
import {favourite} from '../../store/actions/action'
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import classes from './Favourite.module.css'
import Layout from '../../hoc/Layout/Layout'

class First extends React.Component {

    changeFavourite(item,index){
        this.props.changeFlag(item,index)
    }

    renderFavourite(){
       return this.props.data.map((item,index) => {
           if(item.favourite){
               return (
                   <li key={index}>
                <div className={classes.product}>
                    <div className={classes.left}>
                        <div className={classes.visual}>
                        <img src={item.image_url} alt="pho"/>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.top}>
                            <div className={classes.name}>{item.name}</div>
                            <div onClick={()=> this.changeFavourite(item,index)}className={classes.star}>
                                 {item.favourite ? <IoIosStar/> : <IoIosStarOutline/>}
                            </div>
                        </div>
                        <div className={classes.botom}>
                            <div className={classes.descr}>
                                {item.description.length > 200 ? item.description.split('').slice(1,200).join('') + ' . . .' : item.description}
                            </div>
                        </div>
                    </div>
                </div>
                </li>
               )
           }
           else {
               return null
           }
       })
    }

    render(){
        return(
            <>
            <Layout>
            <ul className={classes.Content}>
                {this.renderFavourite()}
            </ul>
            </Layout>
            </>
        )
    }
}

function mapStateToProps(state) {
    return{
        data : state.beer.dataBeer
    }
}

function mapDispatchToProps(dispatch) {
    return{
        changeFlag : (item,index) => dispatch(favourite(item,index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(First)