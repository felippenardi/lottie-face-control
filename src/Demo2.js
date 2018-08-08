import React from 'react';
import Lottie from 'lottie-react-web'
import menu from './menu.json'

const Demo2 = () => (
  <div style={{width: 100}}>
    <Lottie
      options={{
        animationData: menu
      }}
    />
  </div>
)

export default Demo2
