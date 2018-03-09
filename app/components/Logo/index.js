/**
*
* VerticalLogo
*
*/
import React from 'react';
import Icon from 'components/Icon';
import { StyleSheet, View } from 'react-native';

const height = 60;
const width = height * (241.47 / 61);

function LogoComponent() {
  return (
    <View style={styles.logo}>
      <Icon name="grandLogo" height={height} width={width} viewBox="0 0 201.47 61" />
    </View>
  );
}

export default LogoComponent;

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
