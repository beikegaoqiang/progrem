import React  from 'react'
import { toJS } from 'mobx'
//工具函数将observer对象转化为js
import { Button,Carousel } from 'antd-mobile';

import { observer,inject } from 'mobx-react'
import PullToRefresh from 'pulltorefreshjs';

@inject('store')  //注入Provider提供的rootStore到该组件的props中
@observer //设置当前组件为观察者,一旦检测到store中被监测者发生变化
class Home extends React.Component {
  state={
    data: ['1', '2', '3'],
  }
  componentDidMount(){
    const ptr = PullToRefresh.init({
      mainElement: 'body', //这是要绑定的元素
      onRefresh() {
        console.log(12321)  //这里是刷新之后的回调
      }
    });
  }
  render() {
    const { store } =this.props
    console.log(toJS(store))
    return (
      <div>
        <div>
          再多一点努力，就多一点成功
        </div>
        <Carousel
          autoplay={false}
          infinite
        >
            {
            this.state.data.map(val => (
              <img
                key={val}
                src={`http://i0.hdslb.com/bfs/article/72f612a567728a3f81032cfced0d23ed27def0ea.jpg`}
                style={{ width: '100%', verticalAlign: 'top' }} 
                />
              ))
            }
        </Carousel>
      </div>
    )
  }
}



export default Home


