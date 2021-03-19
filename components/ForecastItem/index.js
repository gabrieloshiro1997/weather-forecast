import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Card from '../Card';

const ForecastItem = (props) => {
  return (
    <Card styles={styles.card}>
      <View style={styles.screen}>
        <Image
          style={styles.image}
          source={{
            uri: `https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}.png`,
          }}
        />
        <View>
          <View style={styles.firstLine}>
            <Text>{`${new Date(
              props.forecast.dt * 1000
            ).toLocaleTimeString()} - ${
              props.forecast.weather[0].description
            }`}</Text>
          </View>
          <View style={styles.secondLine}>
            <Text style={styles.text}>{`${props.forecast.main.temp_min}`}</Text>
            <Text style={styles.text}>{`${props.forecast.main.temp_max}`}</Text>
            <Text style={styles.text}>{`${props.forecast.main.humidity}`}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default ForecastItem;

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
  },
  screen: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
  },
  firstLine: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  secondLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 4,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  text: {
    marginHorizontal: 2,
  },
});
