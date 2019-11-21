import React,{Component} from 'react';
import {connect} from 'react-redux'
class Detail extends Component{
    state={
        list:this.props.location.state
    }
    render(){
        console.log(this.props)
        return <div>
            DETAIL
            <dl>
                <dd><img src={this.state.list.image} /></dd>
                <dt>
                    <p>{this.state.list.name}</p>
                    <span className="orange">{this.state.list.money}<b onClick={()=>{this.cart(this.state.list.id)}}>+</b></span>
                </dt>
            </dl>
        </div>
    }
}
// let mapStateToProps=(state)=>{
//     return {
//         num:state.cart.reduce((total,item)=>total+=item.num,0)
//         // num:state.cart.reduce((total,item)=>total+=item.num,0)
//     }
// }
export default Detail