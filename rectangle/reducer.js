const initialState = {
  width: 100,
  height: 200,
  color: '#FF00FF'
}

const reducer = (state = initialState, action) => {
  // Handle actions here - make sure you don't mutate the state!
  const { type } = action

  switch (type) {
    // ACTION 1 - Increment width by 10
    case 'WIDTH':
      return { ...state, width: state.width + 10 }
    // ACTION 2 - Increment height by 10
    case 'HEIGHT':
      return { ...state, height: state.height + 10 }
    // ACTION 3 - Change color to red
    case 'RED':
      return { ...state, color: '#FF0000' }
    // ACTION 4 - Change color to blue
    case 'BLUE':
      return { ...state, color: '#0000FF' }
  }
  return state
}
