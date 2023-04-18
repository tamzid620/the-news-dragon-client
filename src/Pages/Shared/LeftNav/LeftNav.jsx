import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [ categories , setCategories ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h4>All Caterogy</h4>
            <div className='ps-5 py-3 bg-light'>
            {
                categories.map(category => <p
                key={category.id}
                >
                    <Link className='text-decoration-none text-secondary fs-5 fw-semibold' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
            </div>
        </div>
    );
};

export default LeftNav;