import React, { Component } from 'react';
import Lottie from 'lottie-react-web'
import face from './face.json'
import { Motion, spring } from 'react-motion';
import { ObjectValue, StringValue } from 'react-values'

const inputStyle = {
  fontSize: '30px',
  margin: 'auto 20px',
  padding: '15px',
  width: '400px',
}

class Demo6Complete extends Component {
  render() {
    return (
      <div style={{width: '400px'}}>
        <ObjectValue defaultValue={{position: 0, isActive: false}}>
          {({value: reading, assign: assignReading}) => (
            <div>
              <Motion
                defaultStyle={{x: 0, y: 0}}
                style={{
                  x: spring(reading.isActive ? reading.position - 200 : 0),
                  y: spring(reading.isActive ? 200 : 0),
                }}>
                {({ x, y }) => (
                  <Lottie
                    options={{
                      animationData: face,
                      animationControl: {
                        'JoyStkCtrl01,Transform,Position': [x, y],
                      }
                    }}
                  />
                )}
              </Motion>

              <StringValue onChange={(value) => assignReading({ position: value.length * 15 })}>
                {({value: text, set: setText}) => (
                  <input
                    style={inputStyle}
                    value={text}
                    onBlur={() => assignReading({ isActive: false })}
                    onFocus={(e) => assignReading({ isActive: true })}
                    onChange={e => setText(e.target.value)}
                  />
                )}
              </StringValue>
            </div>
          )}
        </ObjectValue>
      </div>
    );
  }
}

export default Demo6Complete
