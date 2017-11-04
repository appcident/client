// import { 
//   Dimensions 
// } from 'react-native'
// let { width, height } = Dimensions.get('window')
// const ASPECT_RATIO = width / height
// const LATITUDE = -6.17511 //  anggep aja Jakarta 
// const LONGITUDE = 106.8650395 // //  anggep aja Jakarta
// const LATITUDE_DELTA = 0.0922
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


const defaultState = {
  regional: {
    latitude: -6.17511,
    longitude: 106.8650395,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.05606756756756757,
  }
}

const HeaderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SEARCH_REGION' :
      return { ...state, regional: action.payload.detailRegion}
    case 'SET_REGION' :
      return { ...state, regional: action.payload.region}
    default:
      return state
  }
}

export default HeaderReducer