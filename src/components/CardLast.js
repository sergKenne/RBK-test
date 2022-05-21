import React from 'react'

const CardLast = ({item}) => {
    return (
        <div className="card card--last">
            <div className="card__img card__img--last">
                <div className="card__picture card__picture--last">{item.id}</div>
            </div>
            <div className="card__body">
                <h6 className="card__title card__title--last">{item.title}</h6>
                <p className="card__text">{item.text}</p>
            </div>
        </div>
    );
}

export default CardLast