import React from 'react';
import { Switch, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import text from 'styles/Text';
import theme from 'theme/iftheme';

function SwitchComponent({ input, label, trueLabel, falseLabel, ...rest }) {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <View style={{ flexDirection: 'row', alignContent: 'center' }}>
        {falseLabel && <Text style={text()}>{falseLabel}</Text>}
        <View style={{ width: 52, height: 55, marginHorizontal: 4 }}>
          <Switch
            value={typeof input.value === 'boolean' ? input.value : false}
            onTintColor={theme.green}
            onValueChange={input.onChange}
            {...rest}
          />
        </View>
        {trueLabel && <Text style={text()}>{trueLabel}</Text>}
      </View>
    </View>
  );
}

SwitchComponent.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  trueLabel: PropTypes.string,
  falseLabel: PropTypes.string
};

export default SwitchComponent;
