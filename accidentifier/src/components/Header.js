import React from 'react';
import { StyleSheet, Text,
        View, Image, TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Header extends React.Component {
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