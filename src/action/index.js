import { INPUT_CHANGE_ACTION, DEMO_ACTION } from './actionType';

export const INPUT_CHANGE_ACTION_DISPATCH = payload => {
    return {
        type:INPUT_CHANGE_ACTION,
        payload
    }
}
export const DEMO_ACTION_DISPATCH = xyz => {
    return {
        type:DEMO_ACTION,
        xyz
    }
}