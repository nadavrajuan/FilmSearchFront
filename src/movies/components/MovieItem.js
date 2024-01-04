
// const MovieItem = ({ title, overview }) => {
//   return (
//     <div className="card-container" >
//       <div className="card">
//         <div className="front-content" style={{border: '3px solid green'}}>
//           <p>{title}</p>
//         </div>
//         <div className="content" style={{border: '3px solid violet'}}>
//           <p className="heading">{title}</p>
//           <p>
//            {overview.length> 200 ? overview.substring(0, 200) + '...' : overview}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './movieItem.css';

const MovieItem = ({ title, overview }) => {
  const [transformVariant, setTransformVariant] = useState('');

  useEffect(() => {
    const variants = ['1', '2', '3', '4'];
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    setTransformVariant(randomVariant);
    console.log(randomVariant);
  }, []);

  const contentClass = classNames({
    'card-content-transform-1': transformVariant === '1',
    'card-content-transform-2': transformVariant === '2',
    'card-content-transform-3': transformVariant === '3',
    'card-content-transform-4': transformVariant === '4',

  });

  const frontContentClass = classNames({
    'card-front-content-transform-1': transformVariant === '1',
    'card-front-content-transform-2': transformVariant === '2',
    'card-front-content-transform-3': transformVariant === '3',
    'card-front-content-transform-4': transformVariant === '4',

  });

  return (
    <div className="card-container" >
      <div className="card">
        <div className={`front-content ${frontContentClass}`} >
          <p>{title}</p>
        </div>
        <div className={`content ${contentClass}`} >
          <p className="heading">{title}</p>
          <p>
            {overview.length > 200 ? overview.substring(0, 200) + '...' : overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;