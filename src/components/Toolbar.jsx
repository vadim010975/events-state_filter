import { Component } from 'react';
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import Button from './Button';


export default class Toolbar extends Component {

  render() {

    return (
      <ul className='toolbar'>
        {this.props.filters.map((el) => (
          <li key={uuidv4()}>
            <Button
              filter={el}
              callback={this.props.onSelectFilter}
              selected={this.props.selected} />
          </li>
        ))}
      </ul>
    )
  }
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  selected:PropTypes.string,
  onSelectFilter: PropTypes.func,
}
