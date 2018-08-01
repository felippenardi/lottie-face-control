import React, { Component } from 'react';
import Lottie from 'lottie-react-web'
import face from './face.json'
import { ObjectValue } from 'react-values'

const Demo3Complete = () => (
  <ObjectValue defaultValue={{ x: 0, y: 0 }}>
    {({ value: { x, y }, assign }) => (
      <div style={{ width: 400 }}>
        <Lottie
          options={{
            animationData: face,
            animationControl: {
              'JoyStkCtrl01,Transform,Position': [x, y],
            }
          }}
        />
        <input
          type="number"
          step="10"
          value={x}
          onChange={(e) => assign({ x: e.target.value })}
        />
        <input
          type="number"
          step="10"
          value={y}
          onChange={(e) => assign({ y: e.target.value })}
        />
      </div>
    )}
  </ObjectValue>
)

export default Demo3Complete
