import React, { useState, useEffect } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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

  return (
    <div>
      <table>
        {countries.map((element, index) => (
          <tr>
            <td>
              <LazyLoadImage
                height="400px"
                src={element.flag}
                width="400px"
                effect="blur"
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Lazy;
