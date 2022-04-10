import React, { useState } from 'react'

const ConnectForm = () => {

  const initialValues = {
    name: "",
    phoneNumber: "",
    address: "",
  };

  const [values, setValues] = useState(initialValues);

  const onChange = () => {

  }

  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <input
          name="name"
          type="text"
          className="form-control"
          onChange={onChange}
          value={values.name}
          placeholder="Your name"
        />
      </div>
      <div className="mb-3">
        <input
          name="phoneNumber"
          type="text"
          className="form-control"
          onChange={onChange}
          value={values.phoneNumber}
          placeholder="Phone number"
        />
      </div>
      <div className="mb-3">
        <input
          name="address"
          type="text"
          className="form-control"
          onChange={onChange}
          value={values.address}
          placeholder="Phone number (additionally)"
        />
      </div>
      <div className="mb-3">
        <input
          name="address"
          type="text"
          className="form-control"
          onChange={onChange}
          value={values.address}
          placeholder="Address"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default ConnectForm