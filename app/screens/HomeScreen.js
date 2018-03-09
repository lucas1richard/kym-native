import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from 'components/Button';
import Wrapper from 'components/Wrapper';
import Text from 'components/Text';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Wrapper>
        <View style={styles.getStartedContainer}>
          <Text style={styles.appTitle}>KnowYourMacros</Text>
        </View>

        <View style={styles.helpContainer}>
          <Button
            title="Log In"
            color="darkBlue"
            onPress={() => console.log('button press')}
          />
        </View>
        <View style={styles.helpContainer}>
          <Button
            title="Sign Up"
            onPress={() => console.log('button press')}
          >
            <Text>Hello</Text>
          </Button>
        </View>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 30
  },
  container: {
    paddingHorizontal: 16
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    // alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  helpContainer: {
    marginTop: 15,
    // alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
