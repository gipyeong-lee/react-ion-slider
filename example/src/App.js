import React, {Component, Fragment} from 'react'

import IonRangeSlider from 'react-ion-slider'

export default class App extends Component {
  state = {
    skin: 'flat',
    min: 10,
    max: 100
  }
  onClickRerender = () => {
    console.log('onClick!!')
    this.setState(Object.assign({}, this.state, {skin: 'modern', min: 50, max: 200}), () => {
      this.ionSlider &&
      this.ionSlider.update({skin: 'flat', min: 100, max: 500, from: 120, to: 240, type: 'double'})
    })
  }

  render() {
    return (
      <Fragment>
        <div onClick={this.onClickRerender}>Re Render</div>
        <div style={{paddingLeft: '20px', width: '100px'}}>
          {/* <IonRangeSlider type={'double'} skin={'flat'} style={{ color: 'white' }} className={'helo'} min={10} max={1000}
            onFinish={(data)=>{console.log(data)}} /> */}
          <IonRangeSlider ref={r => this.ionSlider = r} skin={this.state.skin} min={this.state.min}
                          max={this.state.max} />
        </div>
      </Fragment>
    )
  }
}
