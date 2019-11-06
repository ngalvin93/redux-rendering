const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const deepCopy = (x) => JSON.parse(JSON.stringify(x))

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    console.log('IN THE REDUCER')
    const stateCopy = deepCopy(state)
    console.log('MADE A COPY OF STATE: ', stateCopy)
    const { type } = action;
    
    // ACTION: Add a random circle
    switch (type) {
        case 'ADD_CIRCLE':
            console.log('IN THE CASE')

    }
    return state;
}