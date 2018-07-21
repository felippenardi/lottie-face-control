import React, { Component } from 'react';
import Lottie from './utils/LottieWithAnimationControl'
import Mouse from './utils/Mouse'
import face from './face.json'
import { Motion, spring } from 'react-motion';
import { NumberValue, StringValue } from 'react-values'

const inputStyle = {
  fontSize: '30px',
  margin: 'auto 20px',
  padding: '15px',
  width: '400px',
}

class App extends Component {
  state = {
  }

  componentDidMount() {
    this.setState({ isPaused: false })
  }

  render() {
    return (
      <div>
        <Mouse>
          {({x, y }) => (
            <NumberValue>
              {({value: inputPosition, set: setInputPosition}) => (
                <div>
                  <Motion
                    defaultStyle={{eyesX: 0, eyesX: 0}}
                    style={{
                      eyesX: spring(inputPosition - 200),
                      eyesY: spring(y - 200),
                    }}>
                    {({ eyesX, eyesY }) => (
                      <div style={{width: '400px'}}>
                        <Lottie
                          width={400}
                          height={400}
                          isPaused={this.state.isPaused}
                          options={{
                            animationData: face,
                            animationControl: {
                              'JoyStkCtrl01,Transform,Position': [eyesX, 150],
                            }
                          }}
                        />
                      </div>
                    )}
                  </Motion>
                  <StringValue onChange={(value) => setInputPosition(value.length * 15)}>
                    {({value, set}) => (
                      <input
                      style={inputStyle}
                      value={value}
                      onBlur={() => setInputPosition(200)}
                      onFocus={(e) => set(value)}
                      onChange={e => set(e.target.value)}
                    />
                    )}
                  </StringValue>
                </div>
              )}
            </NumberValue>
          )}
        </Mouse>
      </div>
    );
  }
}

export default App;
