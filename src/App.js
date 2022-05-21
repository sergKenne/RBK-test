import React, { useState, useEffect } from 'react'
import objData from './data.json'
import CardFirst from './components/CardFirst';
import CardMiddle from './components/CardMiddle';
import CardLast from './components/CardLast';

const App = () => {
    const [data, setData] = useState({});
    console.log(data.first);
    useEffect(() => {
        setData(objData)
    }, [])
  return (
      <div className="wrapper">
          <div className="container">
              <div className="grid">
                  <div className="grid__item grid__item--first">
                      <div className="grid__card">
                          {Object.keys(data).length &&
                              data.first.map((item) => <CardFirst item={item} key={item.id} />)}
                      </div>
                  </div>
                  <div className="grid__item grid__item--middle">
                      <div className="grid__card grid__card--middle">
                          {Object.keys(data).length &&
                              data.middle.map((item) => <CardMiddle item={item} key={item.id} />)}
                      </div>
                  </div>
                  <div className="grid__item grid__item--last">
                      <div className="grid__card grid__card--last">
                          {Object.keys(data).length &&
                              data.last.map((item) => <CardLast item={item} key={item.id} />)}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App
