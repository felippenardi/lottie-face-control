import React from 'react';
import Lottie from 'lottie-react-web'
import menu from './menu.json'
import { BooleanValue } from 'react-values'

const Demo2Complete = () => (
  <BooleanValue>
    {({ value, toggle }) => (
      <div onClick={toggle} style={{ width: 100 }}>
        <Lottie
          direction={value ? 1 : -1}
          options={{
            animationData: menu,
            loop: false,
          }}
        />
      </div>
    )}
  </BooleanValue>
)

export default Demo2Complete
