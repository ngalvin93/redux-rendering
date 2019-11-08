const initialState = [
  'Kamilah',
  'Stuart'
]

const deepCopy = (x) => JSON.parse(JSON.stringify(x))

const reducer = (state = initialState, action) => {
  // Handle actions here - make sure you don't mutate the state!
  const stateCopy = deepCopy(state)
  const { type } = action

  // Add a Name Tag
  switch (type) {
    case 'ADD_NAME':
      stateCopy.push(txt.value)
  }
  return stateCopy
}
