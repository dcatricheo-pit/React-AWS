// import React, { useState, useEffect } from 'react';

// export const Consulta = () => {
//     // Declaración de una variable de estado que llamaremos "count"
//     const [people, setPeople] = useState([]);

//     useEffect(() => {

//         fetch("https://swapi.dev/api/people/")
//             .then((resp) => resp.json)
//             .then((datos) => setPeople(datos.results))
            
//     }, [people])

//     return (
//         <div>

//             {people.map(item => {
//                 return(
//                 <a>{item}</a>
//             )})}

//         </div>
//     );
// }