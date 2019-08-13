import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'ion-rangeslider/css/ion.rangeSlider.min.css'
import 'ion-rangeslider'

class IonRangeSlider extends Component {
  static defaultProps = {
    type: 'single',
    skin: 'flat'
  }
  static propTypes = {
    /* Basic setup */
    type: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    from: PropTypes.number,
    to: PropTypes.number,

    /* Advanced setup */
    step: PropTypes.number,
    values: PropTypes.array,
    keyboard: PropTypes.bool,

    /* Grid setup */
    grid: PropTypes.bool,
    grid_margin: PropTypes.bool,
    grid_num: PropTypes.number,
    grid_snap: PropTypes.bool,

    /* Interval control */
    drag_interval: PropTypes.bool,
    min_interval: PropTypes.number,
    max_interval: PropTypes.number,

    /* Handles control */
    from_fixed: PropTypes.bool,
    from_min: PropTypes.number,
    from_max: PropTypes.number,
    from_shadow: PropTypes.bool,
    to_fixed: PropTypes.bool,
    to_min: PropTypes.number,
    to_max: PropTypes.number,
    to_shadow: PropTypes.bool,

    /* UI control */
    skin: PropTypes.string,
    hide_min_max: PropTypes.bool,
    hide_from_to: PropTypes.bool,
    force_edges: PropTypes.bool,
    extra_classes: PropTypes.string,
    block: PropTypes.bool,

    /* Prettify numbers */
    prettify_enabled: PropTypes.bool,
    prettify_separator: PropTypes.string,
    prettify: PropTypes.func,
    prefix: PropTypes.string,
    postfix: PropTypes.string,
    max_postfix: PropTypes.string,
    decorate_both: PropTypes.bool,
    value_separator: PropTypes.string,

    /* Data control */
    input_values_separator: PropTypes.string,
    disable: PropTypes.bool,

    /* Callbacks */
    scope: PropTypes.object,
    onStart: PropTypes.func,
    onChange: PropTypes.func,
    onFinish: PropTypes.func,
    onUpdate: PropTypes.func
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
      <input ref={(node) => { this.ref = node }} />
    )
  }
}

IonRangeSlider.propTypes = {
  /* Basic setup */
  type: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  from: PropTypes.number,
  to: PropTypes.number,

  /* Advanced setup */
  step: PropTypes.number,
  values: PropTypes.array,
  keyboard: PropTypes.bool,

  /* Grid setup */
  grid: PropTypes.bool,
  grid_margin: PropTypes.bool,
  grid_num: PropTypes.number,
  grid_snap: PropTypes.bool,

  /* Interval control */
  drag_interval: PropTypes.bool,
  min_interval: PropTypes.number,
  max_interval: PropTypes.number,

  /* Handles control */
  from_fixed: PropTypes.bool,
  from_min: PropTypes.number,
  from_max: PropTypes.number,
  from_shadow: PropTypes.bool,
  to_fixed: PropTypes.bool,
  to_min: PropTypes.number,
  to_max: PropTypes.number,
  to_shadow: PropTypes.bool,

  /* UI control */
  skin: PropTypes.string,
  hide_min_max: PropTypes.bool,
  hide_from_to: PropTypes.bool,
  force_edges: PropTypes.bool,
  extra_classes: PropTypes.string,
  block: PropTypes.bool,

  /* Prettify numbers */
  prettify_enabled: PropTypes.bool,
  prettify_separator: PropTypes.string,
  prettify: PropTypes.func,
  prefix: PropTypes.string,
  postfix: PropTypes.string,
  max_postfix: PropTypes.string,
  decorate_both: PropTypes.bool,
  value_separator: PropTypes.string,

  /* Data control */
  input_values_separator: PropTypes.string,
  disable: PropTypes.bool,

  /* Callbacks */
  scope: PropTypes.object,
  onStart: PropTypes.func,
  onChange: PropTypes.func,
  onFinish: PropTypes.func,
  onUpdate: PropTypes.func
}

export default IonRangeSlider