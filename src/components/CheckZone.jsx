import React, {useState} from 'react'

import { data } from "../data";

const CheckZone = () => {
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);
  const [street, setStreet] = useState(null);

  const selectedCity = data.filter((item) => item.value == city);
  const selectedDistrict =
    city && selectedCity[0].districts.filter((item) => item.value == district);
  const selectedStreet =
    district &&
    selectedDistrict[0].streets.filter((item) => item.value == street);

  return (
    <div>
      <h1 className="pt-5 mb-5">Check coverage zone</h1>
      <div className="row">
        {/* City */}
        <div className="col-md-3">
          <select
            className="form-select"
            onChange={(e) => setCity(e.target.value)}
          >
            <option selected disabled hidden>
              City
            </option>
            {data.map((item) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        {/* District */}
        <div className="col-md-3">
          <select
            className="form-select"
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option selected disabled hidden>
              District
            </option>
            {city &&
              selectedCity[0].districts.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.label}
                </option>
              ))}
          </select>
        </div>

        {/* Street */}
        <div className="col-md-3">
          <select
            className="form-select"
            onChange={(e) => setStreet(e.target.value)}
          >
            <option selected disabled hidden>
              Street
            </option>
            {district &&
              selectedDistrict[0].streets.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.label}
                </option>
              ))}
          </select>
        </div>

        <div className="col-md-3">
          <select className="form-select">
            <option selected disabled hidden>
              House No.
            </option>
            {street &&
              selectedStreet[0].houses.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.label}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default CheckZone