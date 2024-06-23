import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

const Navbar: React.FC = () => {
    const { user } = useContext(AuthContext);

    return (
        <nav>
            <div className="navhead"></div>
            <div className="nav-list">
                <Link to="/">
                    <button>Home</button>
                </Link>
                {user && (
                    <Link to="/profile">
                        <button>Profile</button>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
