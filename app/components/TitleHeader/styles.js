import { StyleSheet } from 'react-native';
import text from 'styles/Text';
import { h3 } from 'styles/Headings';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 30
  },
  title: h3({
    fontWeight: 'bold'
  }),
  text: text({
    textAlign: 'center'
  }, 'halfOpacityBlue')
});

export default styles;
