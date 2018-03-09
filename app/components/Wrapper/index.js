import React from 'react';
import { View, ScrollView } from 'react-native';
import cs from 'styles/common';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => (
  <View style={cs.background}>
    <ScrollView contentContainerStyle={cs.scrollView}>
      <View style={cs.container}>
        {children}
      </View>
    </ScrollView>
  </View>
);

Wrapper.propTypes = {
  children: PropTypes.node
};

export default Wrapper;
