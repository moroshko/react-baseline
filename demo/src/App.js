import styles from './App.less';

import React, { Component } from 'react';
import basekick from 'basekick';
import Baseline from 'Baseline';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: true,
      type: 'line',
      lineHeight: 12
    };

    this.toggleIsVisible = this.toggleIsVisible.bind(this);
    this.updateType = this.updateType.bind(this);
    this.updateLineHeight = this.updateLineHeight.bind(this);
  }

  toggleIsVisible() {
    const { isVisible } = this.state;

    this.setState({
      isVisible: !isVisible
    });
  }

  updateType(event) {
    this.setState({
      type: event.target.value
    });
  }

  updateLineHeight(event) {
    this.setState({
      lineHeight: parseInt(event.target.value, 10)
    });
  }

  render() {
    const { isVisible, type, lineHeight } = this.state;

    const headingStyle = {
      ...basekick({
        baseFontSize: 10,
        descenderHeightScale: 0.12,
        gridRowHeight: lineHeight,
        typeSizeModifier: 2.1,
        typeRowSpan: 3
      }),
      fontWeight: 600
    };

    const textStyle = basekick({
      baseFontSize: 10,
      descenderHeightScale: 0.12,
      gridRowHeight: lineHeight,
      typeSizeModifier: 1.6,
      typeRowSpan: 2
    });

    return (
      <div className={styles.root}>
        <Baseline isVisible={isVisible}
                  type={type}
                  lineHeight={lineHeight}
                  style={{ padding: `${lineHeight}px 40px` }}>
          <div>
            <h1 style={headingStyle}>
              React Baseline
            </h1>
            <p style={textStyle}>
              Lorem ipsum dolor sit amet, ex duo ponderum mandamus scriptorem.
              Sed nonumy principes iracundia et.
            </p>
          </div>
        </Baseline>
        <div className={styles.controls}>
          <button onClick={this.toggleIsVisible}>
            {isVisible ? 'Hide baseline' : 'Show baseline'}
          </button>
          {
            isVisible &&
              <div>
                <p>
                  Type:
                  <label>
                    <input type="radio"
                           name="type"
                           value="line"
                           checked={type === 'line'}
                           onChange={this.updateType} />
                    Line
                  </label>
                  <label>
                    <input type="radio"
                           name="type"
                           value="bar"
                           checked={type === 'bar'}
                           onChange={this.updateType} />
                    Bar
                  </label>
                </p>
                <p>
                  Line height:
                  <input type="number"
                         min="7"
                         value={lineHeight}
                         max="40"
                         onChange={this.updateLineHeight} />
                </p>
              </div>
          }
        </div>
      </div>
    );
  }
}
