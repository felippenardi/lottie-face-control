import React, { Component } from 'react';
import Lottie from 'lottie-react-web'
import twitterHeart from './TwitterHeart.json'
import { BooleanValue } from 'react-values'

const Demo2Complete = () => (
  <BooleanValue>
    {({ value, toggle }) => (
      <div onClick={toggle}>
        <Lottie
          direction={value ? -1 : 1}
          speed={1.5}
          options={{
            loop: false,
            autoplay: false,
            animationData: twitterHeart
          }}
        />
      </div>
    )}
  </BooleanValue>
)

export default Demo2Complete
