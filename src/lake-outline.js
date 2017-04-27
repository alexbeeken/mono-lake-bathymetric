import React, { Component } from 'react';
import levels from './levels';
import ReactSVG from 'react-svg'

class LakeOutline extends Component {
  svgForLevel(level) {
    console.log(levels[level])
    return levels[level]
  }

  render() {
    return (
      <div>
        <ReactSVG
          path={this.svgForLevel(this.props.level)}
        />
      </div>
    );
  }
}

export default LakeOutline;
