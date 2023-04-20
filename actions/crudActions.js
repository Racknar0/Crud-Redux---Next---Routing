//! actions del gridAutoColumns:
import { GET_ALL, GET_ONE, CREATE, UPDATE, DELETE, HIDE_ALERT } from '../types';

export const getAll = (products) => {
    return {
        type: GET_ALL,
        payload: products,
    };
};

export const getOne = (productId) => ({ type: GET_ONE, payload: productId });

export const create = (product) => ({ type: CREATE, payload: product });

export const update = (product) => ({ type: UPDATE, payload: product });

export const remove = (productId) => ({ type: DELETE, payload: productId });

export const hideAlert = () => ({ type: HIDE_ALERT });
