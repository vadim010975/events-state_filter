import { Component } from 'react';
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import Project from './Project';

export default class ProjectList extends Component {

  render() {

    const projects = this.props.projects;

    return (
        <ul className="list">
          {projects.map((el) => (
              <li key={uuidv4()}>
                <Project project={el} />
              </li>
          ))}
        </ul>
    )
  }
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
}
