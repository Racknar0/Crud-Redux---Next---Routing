import Link from 'next/link';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between mb-5">
            <div className="container">
                <Link href="/">
                    <h1 className="text-light">
                        {' '}
                        CRUD React - Redux - REST API & Axios
                    </h1>
                </Link>
            </div>

            <Link
                href="/productos/nuevo"
                className="btn btn-danger nuevo-post d-block d-md-inline-block"
            >
                Agregar nuevo &#43;
            </Link>
        </nav>
    );
};

export default Header;
