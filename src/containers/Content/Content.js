import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import classes from './Content.module.css'
import {autoGenerate,addBeers,scrollThunk,favourite} from '../../store/actions/action'
import Layout from '../../hoc/Layout/Layout'
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

class Content extends React.Component {

    async componentDidMount(){
        if(this.props.dataBeer.length <= 0){
              try{
            const API = 'https://api.punkapi.com/v2/beers';
            const response = await axios.get(API);
            for (let i = 0; i < response.data.length; i++){
                response.data[i].favourite = false;
             }
            this.props.autoGenerate(response.data)
        }   
        catch(e){
            console.log(e)
        } 
        }
        
    }       


    handlePosScroll(){ 
        window.addEventListener('scroll', event => {
            let posY = window.pageYOffset;
            let visible = window.document.documentElement.clientHeight;
            let pageHeight = document.documentElement.scrollHeight;
            if(posY + visible === pageHeight){
                this.props.scrollAdd(this.props.page)
            }
        })
    }
    
    changeFavourite(item,index){
        this.props.changeFlag(item,index)
    }

    renderBeer(){
        return this.props.dataBeer.map((item,index) => {
            return(
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
        })
    }

    render(){
        this.handlePosScroll()
        return(
            <Layout>
                <ul className={classes.Content}>
                    {this.renderBeer()}
                </ul>
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return{
      dataBeer : state.beer.dataBeer, 
      scrollState : state.beer.scrollPos,
      page : state.beer.page   
    }
}

function mapDispatchToProps(dispatch) {
    return{
      autoGenerate : response => dispatch(autoGenerate(response)),
      scrollPos : () => dispatch(addBeers()),
      scrollAdd : page => dispatch(scrollThunk(page)),
      changeFlag : (item,index) => dispatch(favourite(item,index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content)