import React from 'react';
import { StyleSheet, Text, 
        View, Picker } from 'react-native';

import MapView from 'react-native-maps'
// import Mapsi from './src/components/Maps'

export default class Maps extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      state: '1 KM'
    }
  }

  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <MapView.Marker 
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }} 
            title={"title"}
            description={"description"}
          />
        </MapView>
        <View style={styles.footerWrap}>
          <Picker
            style={{width: '40%'}}
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
            <Picker.Item label="1 KM" value="1" />
            <Picker.Item label="3 KM" value="2" />
            <Picker.Item label="5 KM" value="3" />
            <Picker.Item label="10 KM" value="4" />
          </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: '22%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  footerWrap: {
    position: 'absolute', 
    bottom: 25, 
    backgroundColor: 'white', 
    width: '100%',
    padding: 10, 
    alignItems: 'center' ,
  }
});