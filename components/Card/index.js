import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
  return (
    <View
      style={{
        ...styles.container,
        ...props.styles,
      }}
    >
      {props.children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.32,
    elevation: 4,
    padding: 12,
    backgroundColor: 'white',
  },
});
