import { Component } from 'react';
import data from '../data';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

export default class Portfolio extends Component {
  state = {
    selected: 'All',
  };

  filters = ["All", "Websites", "Flayers", "Business Cards"];

  render() {
    return (
      <>
        <Toolbar
          filters={this.filters}
          selected={this.state.selected}
          onSelectFilter={(filter) => this.setState(() => ({ selected: filter }))} />
        <ProjectList projects={this.state.selected === "All" ? data : data.filter(project => project.category === this.state.selected)} />
      </>
    )
  }
}
