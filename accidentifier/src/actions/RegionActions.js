export const search_region = (detailRegion) => {
  return {
    type: 'SEARCH_REGION',
    payload: {
      detailRegion
    }
  }
}