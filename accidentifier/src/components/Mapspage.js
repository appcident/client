import React from 'react'
import { StyleSheet, Text, 
        View, Picker,
        Dimensions, Button, Slider, FlatList } from 'react-native'
import { connect } from 'react-redux'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import List from './List'

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
        }
      },{
        title: 'Jl. Desa Cilember, Bogor',
        coordinates: {
          latitude: -6.6538811,
          longitude: 106.9179212,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        } 
      },{
        title: 'Jl. Kebon Baru Utara',
        coordinates: {
          latitude: -6.233003,
          longitude: 106.862131,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
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
    console.log('regional state',this.props.regional);
    console.log('region state ====>', this.state.region)
    return (
      <View style ={styles.container}>
        <MapView
          provider={ PROVIDER_GOOGLE }
          style={ styles.map }
          showsUserLocation={ true }
          showsCompass={true}
          followsUserLocation={true}
          fetchDetails={true}
          region={ this.state.region }
          showsTraffic={true}
          zoomEnabled={true}
          moveOnMarkerPress={true}
          >
          <MapView.Marker draggable
            title={'Drag n Push Me'}
            coordinate={ this.state.region }
            onDragEnd={(e) => this.setState({ region: e.nativeEvent.coordinate })}
          />
          {this.state.markers.map((data, idx) => {
            return (
              <MapView.Marker key = {idx}
                title = {data.title}
                coordinate = {data.coordinates}
                image={require('../assets/images/markerpoint5.png')}
              />
            )
          })}
          <MapView.Circle
            center={{latitude: this.state.region.latitude, longitude: this.state.region.longitude}}
            radius={this.state.selectedRadius}
            fillColor="rgba(0, 0, 0, 0.2)"
            strokeColor="rgba(0, 0, 0, 0.2)"/>
        </MapView>
        <List />
        <View style={styles.footerWrap}>
          <Slider
            style={styles.slider}
            value={1000}
            minimumValue={0}
            maximumValue={10000}
            step={1000}
            onValueChange={(radius) => this.setState({selectedRadius: radius})} />
          <Button 
            onPress={() => this.getNews()}
            title="Find"/>
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
    paddingTop: '120%'
  },
  compassStyle:{
    bottom: 50,
    left: 10,
  },
  footerWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute', 
    bottom: 15, 
    backgroundColor: 'rgba(255,255,255, 0.9)',
    width: '100%',
    paddingBottom: 8, 
    alignItems: 'center'
  },
  slider: {
    width: 300,
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
//compassStyle={{
//   bottom: 50,
//   left: 10,
// }}

export default connect(mapStateToProps, null)(Maps)