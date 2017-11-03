import React from 'react'
import { StyleSheet, Text, 
        View, Picker,
        Dimensions } from 'react-native'
import { connect } from 'react-redux'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE = 0
const LONGITUDE = 0
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class Maps extends React.Component {
  constructor(props){
    super(props)
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
        })
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )
  }

  render() {
    console.log('region',this.props.regional);
    return (
      <View style ={styles.container}>
        <MapView
          provider={ PROVIDER_GOOGLE }
          style={ styles.map }
          showsUserLocation={ true }
          showsCompass={true}
          followsUserLocation={true}
          region={ this.state.region }
          onRegionChange={ region => this.setState({
            region:{
              latitude: this.props.regional.latitude,
              longitude: this.props.regional.longitude,
              latitudeDelta: this.props.regional.latitudeDelta,
              longitudeDelta: this.props.regional.longitudeDelta
            }
          })}
          >
          <MapView.Marker
            title={'You are here'}
            coordinate={ this.state.region }
          />
        </MapView>
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
    )
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
})

const mapStateToProps = state => {
  console.log('all state di maps', state)
  console.log('bawahnya all state', state.HeaderReducer.regional)
  return {
    regional: state.HeaderReducer.regional
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     searchRegion: (data) =>  dispatch(search_region(data))
//   }
// }

export default connect(mapStateToProps, null)(Maps)