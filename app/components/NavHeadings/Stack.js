import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import theme from 'theme/iftheme';
import Touchable from 'components/Touchable';
import Text from 'components/Text';
import { MaterialIcons, Feather } from '@expo/vector-icons';

import { nav } from 'containers/Navigation/actions';


class Stack extends React.Component {
  shouldComponentUpate() {
    return false;
  }

  render() {
    const { title, navTo, goBack, closeRoute, noCloseOption, onClose } = this.props;
    return (
      <View style={styles.wrapper}>
        <Touchable onPress={goBack}>
          <Feather size={30} name="chevron-left" />
        </Touchable>
        <Text bold style={{ fontSize: 20 }}>{title || 'Stack Heading'}</Text>
        {!noCloseOption ? (
          <Touchable onPress={onClose || (() => navTo(closeRoute || '/dashboard/overview'))}>
            <MaterialIcons size={30} name="close" style={{ textAlign: 'center' }} />
          </Touchable>
        ) : (
          <View style={{ width: 30 }} />
        )}
      </View>
    );
  }
}

Stack.propTypes = {
  title: PropTypes.string,
  closeRoute: PropTypes.string,
  navTo: PropTypes.func,
  onClose: PropTypes.func,
  noCloseOption: PropTypes.bool,
  goBack: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch({ type: 'Navigation/BACK' }),
  navTo: (routeName) => dispatch(nav(routeName))
});

export default connect(null, mapDispatchToProps)(Stack);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    marginTop: -10,
    paddingHorizontal: 12,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: theme.copyGray
  }
});
