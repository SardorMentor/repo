import React, { useState } from "react";
import axios from "axios";

const Add = () => {
  const initialValues = {
    name: "",
    phoneNumber: "",
    address: "",
  };

  const [values, setValues] = useState(initialValues);

  // const inputs = [
  //   {
  //     name: "name",
  //     value: values.name,
  //   },
  //   {
  //     name: "phoneNumber",
  //     value: values.phoneNumber,
  //   },
  //   {
  //     name: "address",
  //     value: values.address,
  //   },
  // ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues(initialValues)
    // axios
    //   .post("http://localhost:3000/api/employees", inputs)
    //   .then((res) => console.log(res));
  };

  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="name"
          onChange={onChange}
          value={values.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
          Phone Number
        </label>
        <input
          name="phoneNumber"
          type="text"
          className="form-control"
          id="phoneNumber"
          onChange={onChange}
          value={values.phoneNumber}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          name="address"
          type="text"
          className="form-control"
          id="address"
          onChange={onChange}
          value={values.address}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Add;
