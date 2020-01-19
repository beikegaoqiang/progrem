import {observable, action,runInAction,configure,flow } from 'mobx'
import datas from '../api/mock.js'
import http from 'axios'
configure({enforceActions:'observed'}) //开启严格模式修改数据必须通过action
class Store {
  @observable name = "21321321"
  @observable serverdata = "21321321"

  @action
  changename=()=>{
    this.name='高强是傻逼'
  }
  //runInAction
  //runInAction 是个简单的工具函数，它接收代码块并在(异步的)动作中执行。这对于即时创建和执行动作非常有用，例如在异步过程中。
  //如果你使用async function来处理业务，需要使用runInAction。
  @action  //使用async
  plase=async name=>{
      const data=await http(datas.eglist)
      runInAction(()=>{
        this.serverdata=data
      })
  }
//mobx内置流flow异步请求
  Genflows=flow(function *(){
    try {
        const data=yield http(datas.eglist)
        this.serverdata=data
    } catch (error) {
        this.dataAll=error
    }
})




}
const data=new Store()
export default data