import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  StyleSheet,
  PanResponder,
  TouchableOpacity
} from 'react-native';

const reactNativePackage = require('react-native/package.json');
const splitVersion = reactNativePackage.version.split('.');
const majorVersion = +splitVersion[0];
const minorVersion = +splitVersion[1];

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%'
    // backgroundColor: '#222'
  },
  layoutIndicator: {
    height: 15,
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  indicator: {
    margin: 3,
    opacity: 0.9
  },
  indicatorSelected: {
    opacity: 1
  },
  containerImage: {
    flex: 1
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: 'black'
  },
  layoutText: {
    position: 'absolute',
    paddingHorizontal: 15,
    bottom: 30,
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white'
  },
  textCaption: {
    fontWeight: '400',
    fontSize: 12,
    color: 'white'
  }
});

export default class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      // height: 140 * (4 / 9),
      // width: 140,
      scrolling: false
    };
  }

  componentWillMount() {
    const release = (e, gestureState) => {
      const width = this.state.width;
      const relativeDistance = gestureState.dx / width;
      const vx = gestureState.vx;
      const children = React.Children.toArray(this.props.children);
      let change = 0;

      if (relativeDistance < -0.5 || (relativeDistance < 0 && vx <= 0.5)) {
        change = 1;
      } else if (relativeDistance > 0.5 || (relativeDistance > 0 && vx >= 0.5)) {
        change = -1;
      }
      const position = this.getPosition();
      if (position === 0 && change === -1) {
        change = 0;
      } else if (position + change >= children.length) {
        change = (children.length) - (position + change);
      }
      this.move(position + change);
      return true;
    };

    this.panResponder = PanResponder.create({
      onPanResponderRelease: release
    });

    this.interval = setInterval(() => {
    }, 16);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.position !== this.props.position) {
      this.move(this.props.position);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onRef(ref) {
    this.elem = ref;
    if (ref && this.state.position !== this.getPosition()) {
      this.move(this.getPosition());
    }
  }

  getPosition() {
    if (typeof this.props.position === 'number') {
      return this.props.position;
    }
    return this.state.position;
  }

  move(index) {
    const isUpdating = index !== this.getPosition();
    const x = this.state.width * index;
    if (majorVersion === 0 && minorVersion <= 19) {
      this.elem.scrollTo(0, x, true); // use old syntax
    } else {
      this.elem.scrollTo({ x: this.state.width * index, y: 0, animated: true });
    }
    this.setState({ position: index });
    if (isUpdating && this.props.onPositionChanged) {
      this.props.onPositionChanged(index);
    }
  }


  next() {
    const children = React.Children.toArray(this.props.children);
    const pos = this.state.position === children.length - 1 ? 0 : this.state.position + 1;
    this.move(pos);
    this.setState({ position: pos });
  }

  prev() {
    const children = React.Children.toArray(this.props.children);
    const pos = this.state.position === 0 ? children.length - 1 : this.state.position - 1;
    this.move(pos);
    this.setState({ position: pos });
  }

  render() {
    const height = this.props.height || this.state.height;
    const position = this.getPosition();
    const children = React.Children.toArray(this.props.children);
    return (
      <View
        style={[
          this.props.containerStyle,
          { height }
        ]}
      >
        {/* SECTION IMAGE */}
        <ScrollView
          ref={(ref) => this.onRef(ref)}
          decelerationRate={0.99}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={this.props.scrollEnabled}
          {...this.panResponder.panHandlers}
          style={[
            styles.container,
            { height }
          ]}
        >
          {children.map((child, index) => {
            const childComponent = (
              <View key={index} style={{ backgroundColor: 'red', width: '100%' }}>
                {child}
              </View>
            );
            const childComponentWithOverlay = (
              <View key={index}>
                <View style={styles.overlay}>
                  {child}
                </View>
              </View>
            );
            if (this.props.onPress) {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => this.props.onPress({ child, index })}
                  delayPressIn={200}
                >
                  {this.props.overlay ? childComponentWithOverlay : childComponent}
                </TouchableOpacity>
              );
            }
            return this.props.overlay ? childComponentWithOverlay : childComponent;
          })}
        </ScrollView>
        {/* END SECTION IMAGE */}
        {/* SECTION INDICATOR */}
        <View
          style={[
            styles.layoutIndicator
          ]}
        >
          {children.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => this.move(index)}
              style={[
                [
                  styles.indicator,
                  setIndicatorSize(this.props.indicatorSize),
                  setIndicatorColor(this.props.indicatorColor)
                ],
                position === index &&
                  [
                    styles.indicatorSelected,
                    setIndicatorColor(this.props.indicatorSelectedColor)
                  ]
              ]}
            >
              <View></View>
            </TouchableOpacity>))}
        </View>
        {/* END SECTION INDICATOR */}
      </View>
    );
  }
}

Slideshow.defaultProps = {
  height: 200,
  indicatorSize: 8,
  indicatorColor: '#CCCCCC',
  indicatorSelectedColor: '#FFFFFF',
  scrollEnabled: true,
  arrowSize: 16
};

Slideshow.propTypes = {
  children: PropTypes.node.isRequired,
  indicatorSize: PropTypes.number,
  indicatorColor: PropTypes.string,
  indicatorSelectedColor: PropTypes.string,
  height: PropTypes.number,
  position: PropTypes.number,
  scrollEnabled: PropTypes.bool,
  containerStyle: PropTypes.object,
  overlay: PropTypes.bool,
  arrowSize: PropTypes.number,
  arrowLeft: PropTypes.object,
  arrowRight: PropTypes.object,
  onPress: PropTypes.func,
  onPositionChanged: PropTypes.func
};

const setIndicatorSize = (size) => ({
  width: size,
  height: size,
  borderRadius: size / 2
});

const setIndicatorColor = (color) => ({
  backgroundColor: color
});

// const layoutArrow = (imageHeight, iconHeight) => ({
//   position: 'absolute',
//   backgroundColor: 'transparent',
//   justifyContent: 'flex-start',
//   alignItems: 'flex-start',
//   top: (imageHeight - iconHeight) / 2,
//   bottom: (imageHeight - iconHeight) / 2
// });
