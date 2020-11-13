import React, { useState, useEffect } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Lazy() {
  const [countries, SetCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(
      (posRes) => {
        SetCountries(posRes.data);
      },
      (errRes) => {
        console.log("errRes", errRes);
      }
    );
  }, []);
  //   let myFun = () => {
  //     axios.get("https://restcountries.eu/rest/v2/all").then(
  //       (posRes) => {
  //         console.log("posRes", posRes);
  //       },
  //       (errRes) => {
  //         console.log("errRes", errRes);
  //       }
  //     );
  //   };
  return (
    <div>
      <table>
        {countries.map((element, index) => (
          <tr>
            <td>
              <LazyLoadImage
                height="500px"
                src={element.flag} // use normal <img> attributes as props
                width="500px"
                effect="black-and-white"
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Lazy;
