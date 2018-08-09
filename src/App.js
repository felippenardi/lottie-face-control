import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './Menu'
import Menu1 from './Menu1'
import Menu2 from './Menu2'
import Face from './Face'
import Face1 from './Face1'
import Face2 from './Face2'
import Face3 from './Face3'
import FaceInput from './FaceInput'

const App = () => (
  <div>
    <Route path="/menu" component={Menu}/>
    <Route path="/menu1" component={Menu1}/>
    <Route path="/menu2" component={Menu2}/>
    <Route path="/face" component={Face}/>
    <Route path="/face1" component={Face1}/>
    <Route path="/face2" component={Face2}/>
    <Route path="/face3" component={Face3}/>
    <Route path="/face-input" component={FaceInput}/>
  </div>
)

export default App;
