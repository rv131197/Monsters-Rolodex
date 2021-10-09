import React from 'react';
import './card-list.styles.css';

export const CardListComponent = props => {
    return <div className='card-list'>{props.children}</div>
    
}