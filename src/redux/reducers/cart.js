const initialState = {};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                [action.payload.id]: {
                    items: action.payload,
                    count: 1
                }

            }
        default:
            return { ...state }
        case "REMOVE_FROM_CART":
            const newState = Object.fromEntries(
                Object.entries(state)
                    .filter(item => item[0] != action.payload)
            )
            return {
                ...newState
            }

    }
}

export default cart;