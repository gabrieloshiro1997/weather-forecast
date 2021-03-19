import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  FlatList,
  Keyboard,
} from 'react-native';
import ForecastItem from './components/ForecastItem';
import keys from './keys';

export default function App() {
  const [city, setCity] = useState('');
  const [forecasts, setForecasts] = useState([]);

  const url =
    'https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&cnt=10&q=';

  const key = keys.key;

  const handleChangeCity = (city) => {
    setCity(city);
  };

  const getForecasts = () => {
    setForecasts([]);
    const target = `${url}${city}&appid=${key}`;
    fetch(target)
      .then((response) => response.json())
      .then((data) => {
        setForecasts(data['list']);
        Keyboard.dismiss();
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.cityName}
          placeholder='Digite o nome de uma cidade'
          value={city}
          onChangeText={handleChangeCity}
        />
        <Button title='Ok' onPress={getForecasts}></Button>
      </View>
      <FlatList
        data={forecasts}
        renderItem={(forecast) => <ForecastItem forecast={forecast.item} />}
      ></FlatList>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 8,
  },
  cityName: {
    padding: 12,
    borderBottomColor: '#bb96f3',
    borderBottomWidth: 2,
    textAlign: 'center',
    marginBottom: 6,
    flexGrow: 0.9,
  },
});
