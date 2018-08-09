import React from 'react';
import Lottie from 'lottie-react-web'
import face from './face.json'

const Face1 = () => (
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

export default Face1
