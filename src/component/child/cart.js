import React,{Component} from 'react';
import {connect} from 'react-redux'
class Cart extends Component{
    
    render(){
        return <div>
            <header>
            <p>刘于 13683599888</p>
                <p>送至：北京八维教育软工学院 网站</p>
            </header>
            <section>
                <p>
                    <input type="checkbox"></input>
                    多点超市（上地店）
                </p>
                <ul>
                    {
                        this.props.state.cart.map((item,index)=>{
                            return <li key={index}>
                                <dl>
                        <dd><img src={item.image}/></dd>
                                    <dt>
                                    <p>{item.name}</p>
                        <p>{item.money}</p>
                                    </dt>
                                </dl>
                        
                            </li>
                        })
                    }
                </ul>
            </section>
        </div>
    }
}
let mapStateToProps=(state)=>{
    return {
        state
    }
}
// let mapDispatchToProps=(dispatch)=>{
//     return {

//     }
// }
export default connect(mapStateToProps)(Cart)