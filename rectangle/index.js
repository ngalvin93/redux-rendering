const { createStore } = Redux
const { subscribe, dispatch, getState } = createStore(reducer)

subscribe(() => render(getState()))

dispatch({ type: null }) // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store
const widthBtn = document.getElementById('width')
const heightBtn = document.getElementById('height')
const redBtn = document.getElementById('red')
const blueBtn = document.getElementById('blue')

widthBtn.addEventListener('click', e => dispatch({ type: 'WIDTH' }))
heightBtn.addEventListener('click', e => dispatch({ type: 'HEIGHT' }))
redBtn.addEventListener('click', e => dispatch({ type: 'RED' }))
blueBtn.addEventListener('click', e => dispatch({ type: 'BLUE' }))
