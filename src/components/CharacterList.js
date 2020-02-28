import React, { useEffect, useState } from "react";
import axios from "axios";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data] = useState([]);
  const [query] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`, {
        
      })
      .then(response => {
        console.log(response);
        // const characters = response.data.filter(character =>
        //   character.name.toLowerCase().includes(query.toLowerCase())
        // );
        // console.log("harry potter characters", response);
        //setData(characters);
      });


  }, [query]);

  return (
   
    <div>
      {data.map(data => {
        return (
          <div className="character-list " key={data._id}>
            <h2>{data.name}</h2>
          </div>
        );
        })}  
    </div>
  );
} 
      
  //           <h2>
  //             {data.name}
  //           </h2>
  //         </div>  
  //       );   
  //     })}
  //   </div>
  // );   
 
 
