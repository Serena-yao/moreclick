import {createStore} from 'redux'
let reducer=(state,action)=>{
    if(action.type==='INITSTATE')
    {
        state.list=action.payload
    }
    if(action.type==='CART')
    {
        //1.判断购物车里有没有当前商品
        let index=state.cart.findIndex(item=>item.id==action.payload.id);
        //2.往购物车里面添加
        if(index==-1)
        {
            // 2.1没有就添加，num设为1
            action.payload.num=1;
            state.cart.push(action.payload);
        }else{
            //已经存在，num++
            state.cart[index].num++
        }
        // state.list=action.payload
    }
    return {...state}
}
let initState={
    list:[],
    cart:[]
}
export default createStore(reducer,initState)