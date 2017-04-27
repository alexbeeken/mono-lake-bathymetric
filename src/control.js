import React, { Component } from 'react'
import Slider from 'rc-slider'
import LakeOutline from './lake-outline';
import 'rc-slider/assets/index.css';

class Control extends Component {
  constructor() {
    super()
    this.state = {
      defaultValue: 63850,
      min: 63590,
      max: 63850
    };
  }

  onSliderChange = (value) => {
    this.setState({
      value
    })
  }

  currentValue() {
    return this.state.value || this.state.defaultValue
  }

  showValue() {
    let number = this.currentValue() / 10.0
    return number.toFixed(1) + ' feet'
  }

  render() {
    return (
      <div>
        <div className='header'>
          <div className='main-title'>
            <h1>Mono Lake Bathymetric</h1>
          </div>
          <div className='years-range'>
            <h3>{this.showValue()}</h3>
          </div>
          <div className='slider'>
            <Slider
              value={this.state.value}
              onChange={this.onSliderChange}
              max={this.state.max}
              min={this.state.min}
              defaultValue={this.state.defaultValue}
              step={5}
            />
          </div>
        </div>
        <div className="lake">
          <LakeOutline level={this.currentValue()}/>
        </div>
      </div>
    );
  }
};

export default Control;
