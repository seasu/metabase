/* eslint "react/prop-types": "warn" */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "metabase/components/Icon";

export default class StepTitle extends Component {
  static propTypes = {
    circleText: PropTypes.string,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { circleText, title } = this.props;
    return (
      <div className="flex align-center pb1">
        <span className="SetupStep-indicator flex layout-centered absolute bordered">
          <span className="SetupStep-number">{circleText}</span>
          <Icon name={"check"} className="SetupStep-check" size={16} />
        </span>
        <h2 className="SetupStep-title">{title}</h2>
      </div>
    );
  }
}
