import React, { Component } from "react";

export default class Panel extends Component {
  render() {
    const { label, value, onSelect, id } = this.props;

    return (
      <section className="dashboard__panel" onClick={() => onSelect(id)}>
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
      </section>
    );
  }
}
