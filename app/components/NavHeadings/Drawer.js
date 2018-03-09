/* eslint-disable global-require */

import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import Touchable from 'components/Touchable';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectPushNotifications } from 'containers/Notifications/selectors';
import { nav } from 'containers/Navigation/actions';
import theme from 'theme/iftheme';
import logger from 'utilities/logger';

export class Drawer extends React.PureComponent {
  // shouldComponentUpdate(props) {
  //   return props.pushNotifications.length !== this.props.pushNotifications.length;
  // }

  render() {
    // const currentRoute = getKey(this.props.routes);
    const { navTo, pushNotifications, toggleDrawer } = this.props;
    logger.log('NavHeadings/Drawer is rendering');
    // if (currentRoute !== '/dashboard/overview' && currentRoute !== '/dashboard') {
    //   return <View />;
    // }
    return (
      <View style={{ backgroundColor: '#fff', paddingVertical: 15, borderColor: '#ccc', marginTop: -10, borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Image source={require('images/grand-logo.png')} style={{ height: 34 }} resizeMode="contain" />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Touchable onPress={() => navTo('/dashboard/notifications')} style={{ width: 60, flexDirection: 'row', position: 'relative', alignContent: 'center', justifyContent: 'center' }}>
            <View style={{ position: 'relative' }}>
              <FontAwesome name="bell-o" size={30} style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }} />
              {pushNotifications && pushNotifications.length > 0 && (
                <Entypo name="dot-single" color={theme.green} style={{ position: 'absolute', left: 0, top: -16, fontSize: 50, backgroundColor: 'rgba(0, 0, 0, 0)' }} />
              )}
            </View>
          </Touchable>
          <Touchable onPress={toggleDrawer} style={{ width: 60, flexDirection: 'row', position: 'relative', alignContent: 'center', justifyContent: 'center' }}>
            <View>
              <Image source={require('images/person-icon.png')} style={{ height: 34, width: 34 }} resizeMode="contain" />
            </View>
          </Touchable>
        </View>
      </View>
    );
  }
}

Drawer.propTypes = {
  navTo: PropTypes.func,
  toggleDrawer: PropTypes.func,
  pushNotifications: PropTypes.array
};

Drawer.defaultProps = {
  pushNotifications: []
};

const mapStateToProps = createStructuredSelector({
  pushNotifications: makeSelectPushNotifications()
});

const mapDispatchToProps = (dispatch) => ({
  navTo: (routeName) => dispatch(nav(routeName)),
  toggleDrawer: () => dispatch({ type: 'Navigation/NAVIGATE', routeName: 'DrawerToggle' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
