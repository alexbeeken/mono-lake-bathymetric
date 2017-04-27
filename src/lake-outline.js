import React, { Component } from 'react';
import levels from './levels';
import ReactSVG from 'react-svg'

class LakeOutline extends Component {
  svgForLevel(level) {
    return levels[level]
  }

  render() {
    return (
      <div>
        <ReactSVG
          path={this.svgForLevel(this.props.level)}
          style={{width: 500, height: 500}}
        />
      </div>
    );
  }
}

export default LakeOutline;
