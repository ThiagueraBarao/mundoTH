import React from 'react';
import {Text, View } from 'react-native';

class PrimeiroComponente extends React.Component {
  render() {
      return(
        <View>
          <Text>
            {this.props.text}
          </Text>
        </View>
      );
  }
};

export default PrimeiroComponente;