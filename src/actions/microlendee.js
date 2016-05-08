import C from '../constants'

export const makePayment = (amount) => {
    return {
        type: C.MAKE_PAYMENT,
        data: {
            amount: amount
        }
    }
}