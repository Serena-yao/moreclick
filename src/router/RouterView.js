import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

export default props=>{
return <Switch>
    {
        props.routes.map((item,index)=>{
            if(item.redirect)
            {
                return <Redirect key={index} from={item.path} to={item.redirect} exact />
            }else{
                return <Route key={index} path={item.path} render={props=>{
                    if(item.children)
                    {
                        return <item.component routes={item.children} {...props} />
                    }else{
                        return <item.component {...props} />
                    }
                }} />
            }
        })
    }
</Switch>
}
