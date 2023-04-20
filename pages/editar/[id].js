import { update } from '@/actions/crudActions';
import Header from '@/components/header';
import { getProduct, updateProduct } from '@/services/productService';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Editar = () => {
    const {
        query: { id },
    } = useRouter();

    const router = useRouter();

    const dispatch = useDispatch();
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [idItem, setIdItem] = useState('');

    useEffect(() => {
        if (id) {
            getProduct(id)
                .then((res) => {
                    console.log('res', res);
                    const { nombre, precio, id } = res;
                    setNombre(nombre);
                    setPrecio(precio);
                    setIdItem(id);
                })
                .catch((err) => {
                    console.log('err', err);
                });
        }
    }, [id]);

    const handleEdit = async (e) => {
        e.preventDefault();
        if (nombre.trim() === '' || precio.trim() === '') {
            return;
        }

        try {
            const res = await updateProduct({ nombre, precio, id: idItem });
            console.log('res', res);
            dispatch(update(res));
        } catch (err) {
            console.log('err', err);
        }

        // Redireccionar
        router.push('/');
    };

    return (
        <div>
            <Header />
            <h1 className="text-center">Editar Producto</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4 fw-bold">
                                Editar producto
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
                                        onChange={(e) =>
                                            setNombre(e.target.value)
                                        }
                                    />
                                    <label>Precio producto</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Precio producto"
                                        name="precio"
                                        value={precio}
                                        onChange={(e) =>
                                            setPrecio(e.target.value)
                                        }
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-3"
                                    onClick={handleEdit}
                                >
                                    Editar producto
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editar;
