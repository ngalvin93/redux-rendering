const initialState = [
  {
    user: {
      handle: '@officialjaden',
      username: 'Jaden Smith',
      isVerified: true,
      profilePic: 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'
    },
    text: 'The Moment That Truth Is Organized It Becomes A Lie',
    likes: 231,
    retweets: 12,
    replies: 21
  },
  {
    user: {
      handle: '@officialjaden',
      username: 'Jaden Smith',
      isVerified: true,
      profilePic: 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'
    },
    text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
    likes: 112,
    retweets: 2,
    replies: 24
  },
  {
    user: {
      handle: '@DigitalCrafts',
      username: 'DigitalCrafts Bootcamp',
      isVerified: false,
      profilePic: 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'
    },
    text: 'Sign up for our next course plz!',
    likes: 11,
    retweets: 3,
    replies: 144
  }
]

// const sortLikes = (tweets) => tweets.sort((a,b) => a.likes - b.likes)
// const sortRetweets = (tweets) => tweets.sort((a,b) => a.retweets - b.retweets)
// const sortReplys = (tweets) => tweets.sort((a,b) => a.replies - b.replies)

const reducer = (state = initialState, action) => {
  // Handle actions here - make sure you don't mutate the state!
  const { type } = action

  switch (type) {
    // ACTION 1 - Sort by # likes
    case 'LIKE':
      return [...state.sort((a, b) => a.likes - b.likes)]
    // ACTION 2 - Sort by # retweets
    case 'RETWEET':
      return [...state.sort((a, b) => a.retweets - b.retweets)]
    // ACTION 3 - Sort by # replies
    case 'REPLY':
      return [...state.sort((a, b) => a.replies - b.replies)]
  }
  return state
}
