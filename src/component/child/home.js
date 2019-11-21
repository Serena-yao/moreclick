import React,{Component} from 'react';
import {connect} from 'react-redux'
import request from '../../until/until'
class Home extends Component{
    componentDidMount(){
        request('/api/list').then(res=>{
            console.log(res)
            this.props.initState(res)
        })
    }
    detail(item){
        this.props.history.push(`/detail/${item.id}`,item);
    }
    cart(e,item){
        e.stopPropagation();
        this.props.cart(item)
    }
    render(){
        const {list}=this.props
        console.log(list)
        return <div>
            <h5>多点超市</h5>
            <div className="main">
            <div className="goods">{
        list.map((item,index)=>{
            return  <dl key={index} onClick={()=>{this.detail(item)}}>
                        <dd><img src={item.image} /></dd>
                        <dt>
                            <p>{item.name}</p>
                            <span className="orange">{item.money}<b onClick={(e)=>{this.cart(e,item)}}>+</b></span>
                        </dt>
                        </dl>
        })
    }</div>
            </div>
    
        </div>
    }
}
let mapStateToProps=(state)=>{
    console.log(state)
    return {
        list:state.list
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        initState:payload=>{
            dispatch({
                type:'INITSTATE',
                payload
            })
        },
        cart:payload=>{
            dispatch({
                type:'CART',
                payload
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)