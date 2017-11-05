import axios from 'axios'

export const getDataAPI = (dataFromMaps) => {
  return (dispatch, getState) => {
    const url = 'http://35.197.133.157/api/accident'
    var dataFrontEnd = {
      lat: dataFromMaps.lat,
      lng: dataFromMaps.lng,
      radius: dataFromMaps.radius
    }
    axios.post(url, dataFrontEnd).then(({ data }) => {
      dispatch(setDataAccidents(data))
    })
  }
}

export const setDataAccidents = (data) => {
  return {
    type: 'SET_DATA_ACCIDENTS',
    payload: { data }
  }
}



export const search_region = (detailRegion) => {
  console.log('ini di action-----> ',detailRegion)
  return {
    type: 'SEARCH_REGION',
    payload: {
      detailRegion
    }
  }
}

export const setRegion = (region) => {
  console.log('ini di action setRegion -----> ',region)
  return {
    type: 'SET_REGION',
    payload: {
      region
    }
  }
}