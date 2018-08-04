import React from 'react';
import { Route } from 'react-router-dom';
import Demo1 from './Demo1'
import Demo2 from './Demo2'
import Demo3 from './Demo3'
import Demo4 from './Demo4'
import Demo5 from './Demo5'
import Demo1Complete from './Demo1.complete'
import Demo2Complete from './Demo2.complete'
import Demo3Complete from './Demo3.complete'
import Demo4Complete from './Demo4.complete'
import Demo5Complete from './Demo5.complete'
import Demo6 from './Demo6.complete'

const App = () => (
  <div>
    <Route path="/demo1" component={Demo1}/>
    <Route path="/demo2" component={Demo2}/>
    <Route path="/demo3" component={Demo3}/>
    <Route path="/demo4" component={Demo4}/>
    <Route path="/demo5" component={Demo5}/>
    <Route path="/demo6" component={Demo6}/>
    <Route path="/demo1-complete" component={Demo1Complete}/>
    <Route path="/demo2-complete" component={Demo2Complete}/>
    <Route path="/demo3-complete" component={Demo3Complete}/>
    <Route path="/demo4-complete" component={Demo4Complete}/>
    <Route path="/demo5-complete" component={Demo5Complete}/>
    <Route path="/demo6-complete" component={Demo6}/>
  </div>
)

export default App;
