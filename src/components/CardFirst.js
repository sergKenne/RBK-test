import React from 'react'

const CardFirst = ({item}) => {
  return (
      <div className="card">
          <div className="card__img">
              <div className="card__picture">{item.id}</div>
          </div>
          <div className="card__body">
              <h6 className="card__title">
                  {item.title}
                  <span className="card__title--mute1">{item.title}</span>
              </h6>
              <p className="card__text">{ item.text }</p>
          </div>
      </div>
  );
}

export default CardFirst