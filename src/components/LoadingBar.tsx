import { Component } from 'react';
import React from 'react';

type LoadingBarProps = {
  isLoading: boolean;
};

class LoadingBar extends Component<LoadingBarProps> {
  render() {
    return (
      <div>
        {this.props.isLoading &&
          <progress className="progress is-small is-primary" max="100">15%</progress>
        }
      </div>
    );
  }
}

export default LoadingBar;