
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '@/services/productService';
import { create, hideAlert } from '@/actions/crudActions';
import { useSwal } from '@/hooks/useSwal';
import Header from '@/components/header';

const Nuevo = () => {

    const router = useRouter();
    const { fire } = useSwal();
    const dispatch = useDispatch();
    const { showAlert, alert } = useSelector((state) => state.crud);
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    console.log('state', showAlert);

    useEffect(() => {
        if (showAlert) {
            fire(alert).then(() => {
                // Ocultar la alerta
                dispatch(hideAlert());
            });
        }
    }, [showAlert]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nombre.trim() === '' || precio.trim() === '') {
            return;
        }
    
        try {
            const res = await addProduct({ nombre, precio });
            console.log('res', res);
            dispatch(create(res));
        } catch (err) {
            console.log('err', err);
        }

        // Redireccionar
        router.push('/');
    };


    return (
        <div>
            <Header />
            <h1 className="text-center">Nuevo Producto</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4 fw-bold">
                                Agregar nuevo prodcuto
                            </h2>

                            <form
                                style={{ maxWidth: '700px', margin: '0 auto' }}
                            >
                                <div className="form-group">
                                    <label>Nombre producto</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre producto"
                                        name="nombre"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                    <label>Precio producto</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Precio producto"
                                        name="precio"
                                        value={precio}
                                        onChange={(e) => setPrecio(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-3"
                                    onClick={handleSubmit}
                                >
                                    Agregar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nuevo;
