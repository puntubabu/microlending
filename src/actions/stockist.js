import C from '../constants'

export const approveBuyerForMicrolending = (buyer) => {
    return {
        type: C.APPROVE_BUYER_FOR_MICROLENDING,
        data: {
            buyer: buyer
        }
    }
}