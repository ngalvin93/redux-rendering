const { createStore } = Redux
const { subscribe, dispatch, getState } = createStore(reducer)

subscribe(() => render(getState()))

dispatch({ type: null }) // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store
const likeBtn = document.getElementById('sortLikes')
const retweetBtn = document.getElementById('sortRetweets')
const replyBtn = document.getElementById('sortReplies')

likeBtn.addEventListener('click', e => dispatch({ type: 'LIKE' }))
retweetBtn.addEventListener('click', e => dispatch({ type: 'RETWEET' }))
replyBtn.addEventListener('click', e => dispatch({ type: 'REPLY' }))
