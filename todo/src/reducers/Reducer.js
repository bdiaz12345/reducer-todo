export const initialState = [
        {
        item: 'Learn about Reducers',
        completed: false,
        id: Date.now()
    }
]

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return ([...state, action.payload])
        case 'TOGGLE':
            if (action.payload.completed === false) {
                action.payload.completed = true
            } else if (action.payload.completed === true) {
                action.payload.completed = false
            }

            return ([...state])
        case 'CLEAR':
            state = state.filter((item) => {
                return item.completed !== true
            })
            return state
        default:
            return state
    }
}