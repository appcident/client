const defaultState = {
  regional: {}
}

const HeaderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SEARCH_REGION' :
      return { ...state, regional: action.payload.detailRegion}
    default:
      return state
  }
}

export default HeaderReducer