import React from 'react';
import { View, PanResponder, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Svg, ScreenOrientation } from 'expo';
const { G, Surface, Path } = Svg; // eslint-disable-line
import Pen from './tools/pen'; // eslint-disable-line
import Point from './tools/point'; // eslint-disable-line
const { OS } = Platform; // eslint-disable-line


// import Bezier from '../tools/bezier'
export default class Whiteboard extends React.Component {
  constructor(props, context) {
    super(props, context);
    ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE);
    this.state = {
      tracker: 0,
      currentPoints: [],
      previousStrokes: [],
      newStroke: [],
      pen: new Pen()
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gs) => this.onResponderGrant(evt, gs),
      onPanResponderMove: (evt, gs) => this.onResponderMove(evt, gs),
      onPanResponderRelease: (evt, gs) => this.onResponderRelease(evt, gs)
    });
  }

  onTouch(evt) {
    const [x, y, timestamp] = [evt.nativeEvent.locationX, evt.nativeEvent.locationY, evt.nativeEvent.timestamp];
    const newPoint = new Point(x, y, timestamp);
    const newCurrentPoints = this.state.currentPoints;
    newCurrentPoints.push(newPoint);

    this.setState((state) => ({
      previousStrokes: state.previousStrokes,
      currentPoints: newCurrentPoints,
      tracker: state.tracker
    }));
  }

  onResponderGrant(evt) {
    this.onTouch(evt);
  }

  onResponderMove(evt) {
    this.onTouch(evt);
  }

  onResponderRelease() {
    if (this.state.currentPoints.length < 1) {
      return;
    }
    const newElement = (
      <Path
        key={this.state.tracker}
        d={this.state.pen.pointsToSvg(this.state.currentPoints)}
        stroke={this.props.color || '#000000'}
        strokeWidth={this.props.strokeWidth || 4}
        fill="none"
      />
    );

    this.state.pen.addStroke(this.state.currentPoints);

    this.setState((state) => ({
      previousStrokes: [...state.previousStrokes, newElement],
      currentPoints: [],
      tracker: state.tracker + 1
    }));
  }

  onLayoutContainer = (e) => {
    this.state.pen.setOffset(e.nativeEvent.layout);
  }

  rewind = () => {
    if (this.state.currentPoints.length > 0 || this.state.previousStrokes.length < 1) {
      return;
    }
    const strokes = this.state.previousStrokes;

    strokes.pop();

    this.state.pen.rewindStroke();

    this.setState((state) => ({
      previousStrokes: [...strokes],
      currentPoints: [],
      tracker: state.tracker - 1
    }));
  }

  clear = () => {
    this.setState(() => ({
      previousStrokes: [],
      currentPoints: [],
      newStroke: [],
      tracker: 0
    }));
    this.state.pen.clear();
  }

  render() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
    return (
      <View
        onLayout={this.onLayoutContainer}
        style={this.props.containerStyle || {}}
      >
        <View style={styles.svgContainer} {...this.panResponder.panHandlers}>
          <Svg style={styles.drawSurface}>
            <G>
              {this.state.previousStrokes}
              <Path
                key={this.state.tracker}
                d={this.state.pen.pointsToSvg(this.state.currentPoints)}
                stroke={this.props.color || '#000000'}
                strokeWidth={this.props.strokeWidth || 4}
                fill="none"
              />
            </G>
          </Svg>
          {this.props.children}
        </View>
      </View>
    );
  }
}

Whiteboard.propTypes = {
  children: PropTypes.node,
  rewind: PropTypes.func,
  clear: PropTypes.func,
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
  containerStyle: PropTypes.object
};

let styles = StyleSheet.create({
  drawContainer: {
    flex: 1,
    display: 'flex'
  },
  svgContainer: {
    flex: 1
  },
  drawSurface: {
    flex: 1
  }
});
