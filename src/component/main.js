import React,{Component} from 'react';
import RouterView from '../router/RouterView'
import Footer from '../views/footer'
class Main extends Component{
    render(){
        return <div>
            <RouterView routes={this.props.routes}></RouterView>
            <Footer />
        </div>
    }
}
export default Main