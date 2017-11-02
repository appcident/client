import React from 'react'
import { StyleSheet, Text,
        View, Image, TextInput,
        Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE = 0
const LONGITUDE = 0
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class Header extends React.Component {

  constructor(){
    super()
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    }
  }

  // onSearchChange(data){
  //   console.log(data)
  //   this.setState({
  //     region: {
  //       latitude: data.latitude,
  //       longitude: data.longitude,
  //       latitudeDelta: LATITUDE_DELTA,
  //       longitudeDelta: LONGITUDE_DELTA,
  //     }
  //   })
  // }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.imgWrapper}
          source={require('../assets/images/logo.png')} />
        <GooglePlacesAutocomplete
          placeholder='Enter Location'
          minLength={2}
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            const region = {
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }
            this.onSearchChange(region, region.latitude, region.longitude)
            console.log('ini state press', this.state)
          }}
          styles={{
            textInputContainer: {
              backgroundColor: 'rgba(0,0,0,0)',
              width: '85%',
              paddingTop: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              marginTop: 10,
              height: 40,
              alignItems: 'center',
            },
            textInput: {
              backgroundColor: 'rgba(0,0,0,0.1)',
              height: 30,
              color: '#5d5d5d',
              fontSize: 16,
              marginLeft: 0,
              marginRight: 0,
            },
            predefinedPlacesDescription: {
              color: '#1faadb'
            },
          }}
          currentLocation={false}
          query={{
            key: 'AIzaSyCcMjuDmtXJLhqQHOu--Ff5ZoP10GTg1E4',
            language: 'en', // language of the results
            types: 'geocode', // default: 'geocode'
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255, 0.8)',
    position: 'absolute',
    top:0,
    width: '100%',
    zIndex: 999,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  imgWrapper: {
    width: '45%', 
    height: 40,
  }
});