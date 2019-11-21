import React from 'react'
import Main from '../component/main'
import Detail from '../component/detail'
import Home from '../component/child/home'
import Classify from '../component/child/classify'
import Vip from '../component/child/vip'
import Cart from '../component/child/cart'
import My from '../component/child/my'

export default {
    routes: [{
        path:'/',
        redirect:'/main/home'
    },{
        path:'/main',
        component:Main,
        children: [{
            path:'/main/home',
            component:Home
        },{
            path:'/main/classify',
            component:Classify
        },{
            path:'/main/vip',
            component:Vip
        },{
            path:'/main/cart',
            component:Cart
        },{
            path:'/main/my',
            component:My
        }]
        
    },{
        path:'/detail',
        component:Detail,
        
    }]
}