import React  from 'react'
import { toJS } from 'mobx'
//工具函数将observer对象转化为js
import { Button, } from 'antd-mobile';

import { observer,inject } from 'mobx-react'

@inject('store')  //注入Provider提供的rootStore到该组件的props中
@observer //设置当前组件为观察者,一旦检测到store中被监测者发生变化
class Home extends React.Component {
  
  render() {
    const { store } =this.props
    console.log(toJS(store))
    return (
      <div>
          <button onClick={()=>store.changename()}>{store.name}</button>
          <div onClick={()=>store.Genflows()}>请求数据</div>
          <Button type="primary" onClick={()=>store.Genflows()}>primary</Button>
          请看network的请求接口情况
      </div>
    )
  }
}



export default Home


