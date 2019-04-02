import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'ion-rangeslider/css/ion.rangeSlider.min.css'
import 'ion-rangeslider'

class IonRangeSlider extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  componentDidMount() {
    const props = this.props
    const options = (({ style, className, key, id, ...others }) => ({ ...others }))(props);
    $(this.ref).ionRangeSlider(options);
  }

  render() {
    return (
      <div ref={(node) => { this.ref = node }} ></div>
    )
  }
}
IonRangeSlider.defaultProps = {
  type: 'single',
  skin: 'flat'
}
IonRangeSlider.PropTypes = {
  /* Basic setup */
  type: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  from: PropTypes.number,
  to: PropTypes.number,

  /* Advanced setup */
  step: PropTypes.number,
  values: PropTypes.array,
  keyboard: PropTypes.boolean,

  /* Grid setup */
  grid: PropTypes.boolean,
  grid_margin: PropTypes.boolean,
  grid_num: PropTypes.number,
  grid_snap: PropTypes.boolean,

  /* Interval control */
  drag_interval: PropTypes.boolean,
  min_interval: PropTypes.number,
  max_interval: PropTypes.number,

  /* Handles control */
  from_fixed: PropTypes.boolean,
  from_min: PropTypes.number,
  from_max: PropTypes.number,
  from_shadow: PropTypes.boolean,
  to_fixed: PropTypes.boolean,
  to_min: PropTypes.number,
  to_max: PropTypes.number,
  to_shadow: PropTypes.boolean,

  /* UI control */
  skin: PropTypes.string,
  hide_min_max: PropTypes.boolean,
  hide_from_to: PropTypes.boolean,
  force_edges: PropTypes.boolean,
  extra_classes: PropTypes.string,
  block: PropTypes.boolean,

  /* Prettify numbers */
  prettify_enabled: PropTypes.boolean,
  prettify_separator: PropTypes.string,
  prettify: PropTypes.func,
  prefix: PropTypes.string,
  postfix: PropTypes.string,
  max_postfix: PropTypes.string,
  decorate_both: PropTypes.boolean,
  value_separator: PropTypes.string,

  /* Data control */
  input_values_separator: PropTypes.string,
  disable: PropTypes.boolean,

  /* Callbacks */
  scope: PropTypes.object,
  onStart: PropTypes.func,
  onChange: PropTypes.func,
  onFinish: PropTypes.func,
  onUpdate: PropTypes.func
}

export default IonRangeSlider