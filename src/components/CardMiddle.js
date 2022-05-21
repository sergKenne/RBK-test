import React from 'react'

const CardMiddle = ({item}) => {
  return (
      <div className="card card--middle">
          <div className="card__img card__img--middle">
              <div className="card__picture card__picture--middle">{item.id}</div>
          </div>
          <div className="card__body">
              <h6 className="card__title card__title--middle">
                  {item.title}
                  <span className="card__title--mute2">{item.title}</span>
              </h6>
              <p className="card__text">{item.text}</p>
          </div>
      </div>
  );
}

export default CardMiddle