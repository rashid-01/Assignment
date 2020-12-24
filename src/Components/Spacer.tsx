import React from 'react';
import { Text } from 'react-native';

/* Spacer component to give space between views or texts*/
interface SpacerProps {
  size?: number;
}

const Spacer = (props:SpacerProps) => {
  const { size } = props;
  return <Text style={{ fontSize: size }}> </Text>;
};

Spacer.defaultProps = {
  size: 8
};

export default Spacer;