import React from 'react';
import Lottie from 'lottie-react-web'
import menu from './menu.json'

const Demo1Complete = () => (
  <div style={{width: 100}}>
    <Lottie
      options={{
        animationData: menu
      }}
    />
  </div>
)

export default Demo1Complete
