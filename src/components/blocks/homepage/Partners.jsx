// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     fetchRequest,
//   fetchSuccess,
//   fetchFailure,
// } from '../../../redux/actions';


// const PartnersComponent = () => {
//   const dispatch = useDispatch();
//   const partnersData = useSelector((state) => state.data.partners);
//   const loading = useSelector((state) => state.data.loading);
//   const error = useSelector((state) => state.data.error);

//   useEffect(() => {
//     dispatch(fetchRequest());
//     fetchPartners()
//       .then((data) => {
//         dispatch(fetchSuccess(data));
//       })
//       .catch((err) => {
//         dispatch(fetchFailure(err));
//       });
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {partnersData.map((partner, index) => (
//         <div key={index}>
//           <img src={partner.image} alt={`Partner ${index}`} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PartnersComponent;
