import { increment_value, decrement_value } from '../types';

export const increment = (value) => {
    return {
        type: increment_value,
        payload: value
    }
}

export const decrement = (value) => {
    return {
        type: decrement_value,
        payload: value
    }
}