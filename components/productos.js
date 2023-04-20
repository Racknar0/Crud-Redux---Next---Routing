import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '@/services/productService';
import Producto from './producto';
import { getAll, hideAlert } from '@/actions/crudActions';
import { useSwal } from '@/hooks/useSwal';

const Productos = () => {
    const { products, showAlert, alert } = useSelector((state) => state.crud);
    const dispatch = useDispatch();
    const { fire } = useSwal();
    //console.log('state', showAlert);

    useEffect(() => {
        if (showAlert) {
            fire(alert).then(() => {
                // Ocultar la alerta
                dispatch(hideAlert());
            });
        }
    }, [showAlert]);

    useEffect(() => {
        getAllProducts().then((res) => {
            dispatch(getAll(res));
        });
    }, []);

    return (
        <div>
            <h2 className="text-center my-5">Listado de productos</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((product) => (
                        <Producto key={product.id} product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Productos;
