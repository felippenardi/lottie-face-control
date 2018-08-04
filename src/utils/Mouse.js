import React from 'react';

class Mouse extends React.Component {
  state = { x: 0, y: 0 }

  handleMouseMove = (event) => {
    const x = event.clientX
    const y = event.clientY
    this.setState({
      x,
      y,
    })
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    )
  }
}

export default Mouse
