import React, { Component } from 'react'

import IonRangeSlider from 'react-ion-slider'

export default class App extends Component {
  render() {
    return (
      <div>
        <IonRangeSlider type={'double'} skin={'flat'} style={{ color: 'white' }} className={'helo'} min={10} max={1000}
            onFinish={(data)=>{console.log(data)}} />
      </div>
    )
  }
}
