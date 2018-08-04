import React, { Component } from 'react';
import Lottie from 'lottie-react-web'
import face from './face.json'

const Demo4 = () => (
  <div style={{ width: 400 }}>
    <Lottie
      options={{
        animationData: face,
        animationControl: {
          'JoyStkCtrl01,Transform,Position': [-200,300]
        }
      }}
    />
  </div>
)

export default Demo4
