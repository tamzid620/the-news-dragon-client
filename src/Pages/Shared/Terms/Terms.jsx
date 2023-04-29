import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Tersm and Conditions: </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusamus impedit. Alias porro fugit dolore eaque totam culpa velit ducimus dicta, nesciunt cupiditate ipsum quis dolor vitae necessitatibus quam repudiandae.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;