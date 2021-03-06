import React, { Component } from 'react'
import Slider from 'rc-slider'
import LakeOutline from './lake-outline';
import 'rc-slider/assets/index.css';
import Dimensions from 'react-dimensions'

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
            <h3>Mono Lake Bathymetric Shape</h3>
          </div>
          <div className='years-range'>
            <h5>{this.showValue()}</h5>
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
          <LakeOutline
            level={this.currentValue()}
            width={this.props.containerWidth}/>
        </div>
        <div className='footer'>
          <a href='https://pubs.usgs.gov/mf/2002/2393/'>*source</a>
        </div>
      </div>
    );
  }
};

export default Dimensions()(Control);
