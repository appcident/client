import React from 'react'
import { StyleSheet, Text, 
        View, Picker,
        Dimensions } from 'react-native'
import { connect } from 'react-redux'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE = 6.17511
const LONGITUDE = 106.8650395
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class Maps extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedRadius: null,
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [{
        title: 'Koi Residence',
        coordinates: {
          latitude: -6.258185,
          longitude: 106.783374,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
      },{
        title: 'Jl. Desa Cilember, Bogor',
        coordinates: {
          latitude: -6.6538811,
          longitude: 106.9179212,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },  
      }]
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
    console.log('====>', this.state.region)
    return (
      <View style ={styles.container}>
        <MapView
          provider={ PROVIDER_GOOGLE }
          style={ styles.map }
          showsUserLocation={ true }
          showsCompass={true}
          followsUserLocation={true}
          region={ this.state.region }
          onRegionChangeComplete={ region => this.setState({
            region:{
              latitude: this.props.regional.latitude,
              longitude: this.props.regional.longitude,
              latitudeDelta: this.props.regional.latitudeDelta,
              longitudeDelta: this.props.regional.longitudeDelta
            }
          })}
          onRegionChange={ region => this.setState({ region })}
          showsTraffic={true}
          zoomEnabled={true}
          moveOnMarkerPress={true}
          >
          <MapView.Marker
            title={'You are here'}
            coordinate={ this.state.region }
          />
          {this.state.markers.map((data, idx) => {
            return (
              <MapView.Marker key = {idx}
                title = {data.title}
                coordinate = {data.coordinates}
              />
            )
          })}
        </MapView>
        <View style={styles.footerWrap}>
          <Picker
            style={{width: '40%'}}
            selectedValue={this.state.selectedRadius}
            onValueChange={(radius) => this.setState({selectedRadius: radius})}>
            <Picker.Item label="1 KM" value="1000" />
            <Picker.Item label="3 KM" value="2000" />
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
    top: 0
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: '120%'
  },
  compassStyle:{
    bottom: 50,
    left: 10,
  },
  footerWrap: {
    position: 'absolute', 
    bottom: 15, 
    backgroundColor: 'rgba(255,255,255, 0.9)',
    width: '100%',
    paddingBottom: 8, 
    alignItems: 'center'
  },
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
//compassStyle={{
//   bottom: 50,
//   left: 10,
// }}

export default connect(mapStateToProps, null)(Maps)