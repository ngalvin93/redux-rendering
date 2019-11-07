const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const firstValues = ['2','3','4','5','6','7','8','9','10','A','J','K','Q']
const secondValues = ['C','S','D','H']

const findRandomCard1 = () => {
    return firstValues[Math.floor(Math.random()*firstValues.length)];
}

const findRandomCard2 = () => {
    return secondValues[Math.floor(Math.random()*secondValues.length)];
}

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    switch (type) {
        case 'RANDOM_1':
            return [{
                value: findRandomCard1(),
                suit: findRandomCard2()
            },
                state[1]
            ]
            break
        case 'RANDOM_2':
            return [
                state[0],
            {
                value: findRandomCard1(),
                suit: findRandomCard2()
            }
            ]
        default:
            return state
    }
}