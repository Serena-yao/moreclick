import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../component/style/style.css'
class Footer extends Component{
    render(){
        console.log(this.props.num,'num')
        return <footer className="foot">
            <Link className="active" to="/main/home">配送到家</Link>
                <Link className="active" to="/main/classify">分类</Link>
                <Link className="active" to="/main/vip">会员</Link>
                <Link className="active" to="/main/cart">购物车
                    <span>{this.props.num}</span>
                </Link>
                <Link className="active" to="/main/my">我的</Link>
        </footer>
    }
}
let mapStateToProps=(state)=>{
    return {
        num:state.cart.reduce((total,item)=>total+=item.num,0)
    }
}
export default connect(mapStateToProps)(Footer)