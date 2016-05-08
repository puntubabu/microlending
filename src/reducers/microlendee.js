const microlendee = (state = {}, action) => {
    switch (action.type) {
        case "REQUEST_DATA_SUCCESS":
            return {
                asdf: []
            }
        case "MAKE_PAYMENT":
            //return updated payment amount
            break;
        default:
            return state
    }
}

export default microlendee