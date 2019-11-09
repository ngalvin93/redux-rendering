const initialState = [
  {
    radius: 50,
    color: '#FF00FF'
  },
  {
    radius: 30,
    color: '#FF99AA'
  },
  {
    radius: 60,
    color: '#0000FF'
  },
  {
    radius: 10,
    color: '#000000'
  }
]

const deepCopy = (x) => JSON.parse(JSON.stringify(x))

const reducer = (state = initialState, action) => {
  // Handle actions here - make sure you don't mutate the state!
  const stateCopy = deepCopy(state)
  const { type } = action

  // ACTION: Add a random circle
  switch (type) {
    case 'ADD_CIRCLE':
      stateCopy.push({
        radius: Math.floor(Math.random() * 100) + 1,
        color: `${'#' + Math.random().toString(16).slice(2, 8)}`
      })
      return stateCopy
  }
  return state
}
