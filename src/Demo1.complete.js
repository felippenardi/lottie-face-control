import React, { Component } from 'react';
import Lottie from 'lottie-react-web'
import twitterHeart from './TwitterHeart.json'

const Demo1Complete = () => (
  <div>
    <Lottie
      options={{
        animationData: twitterHeart
      }}
    />
  </div>
)

export default Demo1Complete
