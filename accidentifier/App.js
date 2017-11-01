import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps'

import Mapspage from './src/components/Mapspage'
import Header from './src/components/Header'

export default class App extends React.Component {
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style={styles.bodyWrap}>
        <Header />
        <Mapspage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyWrap: {
    flex: 1,
    backgroundColor: '#fff',
    top: 25,
    flexDirection: 'column',
    // marginTop: 25,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});