import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

class PickerKeyboard extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    visible: false
  }

  componentWillReceiveProps(newProps) {
    if (this.props.display !== newProps.display) {
      if (newProps.display) {
        this.display();
      } else {
        this.hide();
      }
    }
  }

  style = () => ({
    position: 'absolute',
    bottom: 0,
    opacity: this.state.opacity,
    zIndex: this.state.visible ? 5 : -1,
    backgroundColor: '#fff',
    width: '100%',
    borderTopWidth: 16,
    borderTopColor: 'gray'
  })

  display = () => {
    this.setState((state) => ({ visible: !state.visible }), () => {
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: this.props.duration || 250
      }).start(this.props.displayCallback || null);
    });
  }

  hide = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: this.props.duration || 250
    }).start(() => {
      this.setState((state) => ({ visible: !state.visible }));
    });
  }

  render() {
    return (
      <Animated.View style={this.style()}>
        {this.props.children}
      </Animated.View>
    );
  }
}

PickerKeyboard.propTypes = {
  duration: PropTypes.number,
  displayCallback: PropTypes.func,
  children: PropTypes.node,
  display: PropTypes.bool.isRequired
};

export default PickerKeyboard;
