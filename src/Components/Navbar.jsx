import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalStates } from '../Context/Context';
import { useEffect } from 'react';

const Navbar = () => {
    const { state, dispatch } = useGlobalStates();
    const [theme, setTheme] = useState(state.isDark ? 'dark' : 'light');

    const handleClick = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        dispatch({ type: 'TOGGLE_THEME', payload: newTheme === 'dark' });
    };
  
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    return (
        <nav>
            <div className='barra'>
                <Link to='/'><h3>Home</h3></Link>
                <Link to='/Favs'><h3>Favoritos</h3></Link>
                <Link to='/Contact'><h3>Contacto</h3></Link>
            </div>
            <span>
                <button title="Toggle color theme" type="button" onClick={handleClick}>
                    {theme === 'dark' ? (
                        <i className='sol'>🌞</i>
                    ) : (
                        <i className="luna">🌚</i>
                    )}
                </button>
            </span>
        </nav>
    );
}

export default Navbar;

