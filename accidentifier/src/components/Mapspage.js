import React from 'react'
import { StyleSheet, Text, 
        View, Picker,
        Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
// import Mapsi from './src/components/Maps'
import List from './List'

let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE = 0
const LONGITUDE = 0
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class Maps extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedRadius: '1 KM',
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    console.log('regi on',this.state.region);
    return (
      <View style ={styles.container}>
        <MapView
          provider={ PROVIDER_GOOGLE }
          style={ styles.map }
          showsUserLocation={ true }
          showsCompass={true}
          followsUserLocation={true} 
          region={ this.state.region }
          onRegionChange={ region => this.setState({ region })}
          onRegionChangeComplete={ region => this.setState({ region })}>
          <MapView.Marker
            title={'You are here'}
            coordinate={ this.state.region }
          />
        </MapView>
        <List />
        <View style={styles.footerWrap}>
          <Picker
            style={{width: '40%'}}
            selectedValue={this.state.selectedRadius}
            onValueChange={(radius) => this.setState({selectedRadius: radius})}>
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
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  footerWrap: {
    position: 'absolute', 
    bottom: 15, 
    backgroundColor: 'rgba(255,255,255, 0.9)',
    width: '100%',
    paddingBottom: 8, 
    alignItems: 'center'
  }
});