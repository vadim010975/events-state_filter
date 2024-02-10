import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {

  render() {

    const filter = this.props.filter;

    const callback = () => this.props.callback(filter);

    let btnClassName;

    if (this.props.selected === filter) {
      btnClassName = "btn btn-primary";
    } else {
      btnClassName = "btn";
    }

    return (
      <>
        <button className={btnClassName} onClick={callback}>
          {filter}
        </button>
      </>
    )
  }
}

Button.propTypes = {
  filter: PropTypes.string,
  selected:PropTypes.string,
  callback: PropTypes.func,
}
