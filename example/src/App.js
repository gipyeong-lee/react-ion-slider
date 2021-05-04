import React, {Component, Fragment} from 'react'
import './assets/example.css'
import IonRangeSlider from 'react-ion-slider'

export default class App extends Component {
  state = {
    skin: 'flat',
    min: 10,
    max: 100,
    disable: false
  }
  onClickRerender = () => {
    console.log('onClick!!')
    this.setState(Object.assign({}, this.state, {skin: 'modern', min: 50, max: 200}), () => {
      this.ionSlider &&
      this.ionSlider.update({skin: 'flat', min: 100, max: 500, from: 120, to: 240, type: 'double'})
    })
  }
  onClickDisable = () => {
    this.setState(Object.assign({}, this.state, {disable: !this.state.disable}))
  }

  render() {
    return (
      <Fragment>
        <div className={'optionSection'}>
          <div className={'optionButton'} onClick={this.onClickRerender}>Re Render</div>
          <div className={'optionButton'} onClick={this.onClickDisable}>Disable</div>
        </div>
        <div style={{paddingLeft: '20px', width: '100px'}}>
          <IonRangeSlider ref={r => this.ionSlider = r} skin={this.state.skin} min={this.state.min}
            max={this.state.max} disable={this.state.disable} />
        </div>
      </Fragment>
    )
  }
}
