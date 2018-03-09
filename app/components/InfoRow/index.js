import React from 'react';
import { View, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';
import text from 'styles/Text';
import theme from 'theme/iftheme';

function InfoRow({ label, value, valueColor, indented, valueClick, noBorder, last, labelValue, valueStyle }) {
  const style = {
    paddingLeft: indented ? 16 : 0,
    paddingVertical: 8,
    borderBottomWidth: ((indented && !last) || noBorder) ? 0 : 1, // eslint-disable-line
    borderStyle: Platform.OS === 'ios' ? 'dashed' : 'solid',
    borderColor: theme.mediumGray,
    flexDirection: 'row',
    justifyContent: 'space-between'
  };
  return (
    <View style={style} center={!label}>
      <Text style={text(null, 'halfOpacityBlue')}>{label}{labelValue && ':'} <Text>{labelValue}</Text></Text>
      {value &&
        <Text
          onPress={valueClick && valueClick}
          style={text(valueStyle, valueColor)}
        >
          {value}
        </Text>
      }
    </View>
  );
}

InfoRow.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  indented: PropTypes.bool,
  valueClick: PropTypes.func,
  noBorder: PropTypes.bool,
  last: PropTypes.bool,
  valueColor: PropTypes.string,
  valueStyle: PropTypes.object,
  labelValue: PropTypes.string
};

InfoRow.defaultProps = {
  valueColor: 'blue'
};

export default InfoRow;
