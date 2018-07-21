import React, { Component } from 'react';
import Lottie from './utils/LottieWithAnimationControl'
import Mouse from './utils/Mouse'
import face from './face.json'

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
            <div style={{width: '400px'}}>
              <Lottie
                width={400}
                height={400}
                isPaused={this.state.isPaused}
                options={{
                  animationData: face,
                  animationControl: {
                    'Cursor,Transform,Opacity': 0,
                    'JoyStkCtrl01,Transform,Position': [x - 200, y - 200],
                  }
                }}
              />
            </div>
          )}
        </Mouse>
      </div>
    );
  }
}

export default App;
