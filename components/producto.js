import PropTypes from 'prop-types';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { remove } from '@/actions/crudActions';
import { deleteProduct } from '@/services/productService';

const Producto = ({ product }) => {
    const { nombre, precio, id } = product;
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log('eliminando');
        console.log(id);
        deleteProduct(id).then((res) => {
            console.log('res', res);
            dispatch(remove(id));
        });
    };

    return (
        <tr>
            <td> {nombre} </td>
            <td> {precio} </td>
            <td className="acciones">
                <Link href={`/editar/${id}`}>Editar</Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Producto;

Producto.propTypes = {
    product: PropTypes.object.isRequired,
};
