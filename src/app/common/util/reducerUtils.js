export const createReducer = (initialState, fnMap) => {
  return (state = initialState, {type, payload}) => {
    const handler = fnMap[type];//obj bracket notation

    return handler ? handler(state, payload) : state
  }
}