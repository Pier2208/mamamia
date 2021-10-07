import { SHOW_MODAL, HIDE_MODAL } from "../actions/types";

const INITIAL_STATE = {
    modalType: null,
    modalProps: {}
}

export default (state = INITIAL_STATE, { type, modalType, modalProps}) => {
    switch (type) {
        case SHOW_MODAL:
            return {
                modalType,
                modalProps
            }
        case HIDE_MODAL:
            return INITIAL_STATE
        default:
            return state
    }
}