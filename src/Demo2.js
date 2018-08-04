import React from 'react';
import Lottie from 'lottie-react-web'
import twitterHeart from './TwitterHeart.json'

const Demo2 = () => (
  <div>
    <Lottie
      options={{
        animationData: twitterHeart
      }}
    />
  </div>
)

export default Demo2
