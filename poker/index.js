const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const btn1 = document.getElementById('card1Button')
const btn2 = document.getElementById('card2Button')

btn1.addEventListener('click', e => dispatch({ type: 'RANDOM_1' }))
btn2.addEventListener('click', e => dispatch({ type: 'RANDOM_2' }))
