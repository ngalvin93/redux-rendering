const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const txt = document.getElementById('text')
document.addEventListener('keydown', e => {
    if (e.code === 'Enter') {
        e.preventDefault()
        dispatch({ type: 'ADD_NAME', name: txt.value})
        console.log(txt.value)
        txt.value = ''
    }
})