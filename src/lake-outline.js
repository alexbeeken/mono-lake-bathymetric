import React, { Component } from 'react';
import levels from './levels';
import ReactSVG from 'react-svg'

class LakeOutline extends Component {
  svgForLevel(level) {
    return levels[level]
  }

  style() {
    return {
      width: this.props.width,
      height: 500
    }
  }

  render() {
    return (
      <div>
        <ReactSVG
          path={this.svgForLevel(this.props.level)}
          style={this.style()}
        />
      </div>
    );
  }
}

export default LakeOutline;
