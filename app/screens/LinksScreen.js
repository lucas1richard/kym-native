import React from 'react';
import { ScrollView, StyleSheet, TextInput } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TextInput style={{ borderColor: 'gray', borderWidth: 1, padding: 5 }} value="Weee" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
