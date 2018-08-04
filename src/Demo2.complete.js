import React from 'react';
import Lottie from 'lottie-react-web'
import twitterHeart from './TwitterHeart.json'
import { BooleanValue } from 'react-values'

const Demo2Complete = () => (
  <BooleanValue>
    {({ value, toggle }) => (
      <div onClick={toggle}>
        <Lottie
          direction={value ? 1 : -1}
          speed={1.5}
          options={{
            animationData: twitterHeart,
            loop: false,
          }}
        />
      </div>
    )}
  </BooleanValue>
)

export default Demo2Complete
