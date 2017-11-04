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