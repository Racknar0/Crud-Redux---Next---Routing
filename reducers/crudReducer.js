import { CREATE, DELETE, GET_ALL, GET_ONE, UPDATE, HIDE_ALERT } from '../types/index';


const initialState = {
    products: [],
    alert: null,
    showAlert: false,
};

export const crudReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL:
            //console.log('ction.type = GET_ALL ==>', action.payload);
            return {
                ...state,
                products: action.payload,
                alert: 'Productos Leidos',
                showAlert: true,
            };

        case GET_ONE:
            //console.log('action.type = GET_ONE ==>', action.payload);
            return {};

        case CREATE:
            //console.log('action.type = CREATE ==>', action.payload);
            return {
                ...state,
                products: [...state.products, action.payload],
                alert: 'Producto Creado',
                showAlert: true,
            };

        case UPDATE:
            //console.log('action.type = UPDATE ==>', action.payload);
            return {
                ...state,
                products: state.products.map((product) => (product.id === action.payload.id ? action.payload : product)),
            };

        case DELETE:
            //console.log('action.type = DELETE ==>', action.payload);
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload),
                alert: 'Producto Eliminado',
                showAlert: true,
            };

        case HIDE_ALERT:
            // Ocultar la alerta y actualizar el estado
            return {
                ...state,
                alert: null,
                showAlert: false,
            };
    
        default:
            return state;
    }
    
};

export default crudReducer;
