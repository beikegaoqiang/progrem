import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './page/Home.jsx'
import List from './page/List.jsx'
import Wenti from './page/Wenti.jsx'
import { Flex } from 'antd-mobile';
import './App.less'
function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={List} />
      <Route path="/topics" component={Wenti} />
      <div style={{textAlign:'center'}} className="fixed">
      <Flex style={{textAlign:'center'}}>
      <Flex.Item> <Link to='/'>主页</Link></Flex.Item>
      <Flex.Item><Link to='/about'>资料室</Link></Flex.Item>
      <Flex.Item><Link to='/topics'>学习圈</Link></Flex.Item>
      <Flex.Item><Link to='/topics'>模型库</Link></Flex.Item>
      <Flex.Item><Link to='/topics'>我的</Link></Flex.Item>
      </Flex>
      </div>
      </div>
      </Router>
  );
}

export default App;
