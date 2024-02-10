import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Project extends Component {

  render() {

    const project = this.props.project;

    return (
      <>
        <img src={project.img} className='project_img' />
      </>
    )
  }
}

Project.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.string,
    category: PropTypes.string,
  }),
}
