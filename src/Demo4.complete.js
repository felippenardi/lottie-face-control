import React from 'react';
import Lottie from 'lottie-react-web'
import face from './face.json'
import Mouse from './utils/Mouse'

const Demo4Complete = () => (
  <Mouse>
    {({ x, y }) => (
      <div style={{ width: 400 }}>
        <Lottie
          options={{
            animationData: face,
            animationControl: {
              'JoyStkCtrl01,Transform,Position': [x - 200, y - 200],
            }
          }}
        />
      </div>
    )}
  </Mouse>
)

export default Demo4Complete
