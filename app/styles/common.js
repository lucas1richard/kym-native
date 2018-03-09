import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';
import container from './Container';
import card from './Card';
import { h1, h2, h3 } from './Headings';
import text from './Text';

export const commonStyles = {
  container: container(),
  h1: h1(),
  h2: h2(),
  h3: h3(),
  text: text(),
  card: card(),
  scrollView: {
    paddingTop: 30,
    paddingBottom: 100
  },
  background: {
    flex: 1
  }
};

export default StyleSheet.create(commonStyles);
