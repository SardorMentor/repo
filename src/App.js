import React, { useState } from "react";

import CheckZone from "./components/CheckZone";
import Add from "./components/Add";
import List from "./components/List";
import ConnectForm from "./components/ConnectForm";

const App = () => {
  const [showHome, setShowHome] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showCheckZone, setShowCheckZone] = useState(false);
  const [showConnectForm, setShowConnectForm] = useState(false);

  return (
    <div className="container">
      <div className="btns pt-5 pb-5 d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-lg btn-dark"
          onClick={() => {
            setShowHome((prevState) => !prevState);
            setShowAdd(false);
            setShowList(false);
            setShowCheckZone(false);
            setShowConnectForm(false);
          }}
        >
          Home
        </button>
        <button
          type="button"
          className="btn btn-lg btn-dark"
          onClick={() => {
            setShowHome(false);
            setShowAdd((prevState) => !prevState);
            setShowList(false);
            setShowCheckZone(false);
            setShowConnectForm(false);
          }}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-lg btn-dark"
          onClick={() => {
            setShowAdd(false);
            setShowHome(false);
            setShowList((prevState) => !prevState);
            setShowCheckZone(false);
            setShowConnectForm(false);
          }}
        >
          List
        </button>
        <button
          type="button"
          className="btn btn-lg btn-dark"
          onClick={() => {
            setShowAdd(false);
            setShowHome(false);
            setShowList(false);
            setShowCheckZone((prevState) => !prevState);
            setShowConnectForm(false);
          }}
        >
          CheckZone
        </button>
        <button
          type="button"
          className="btn btn-lg btn-dark"
          onClick={() => {
            setShowAdd(false);
            setShowHome(false);
            setShowList(false);
            setShowCheckZone(false);
            setShowConnectForm((prevState) => !prevState);
          }}
        >
          ConnectForm
        </button>
      </div>
      {showHome && <h1 className="text-center">Hello World!</h1>}
      {showAdd && <Add />}
      {showList && <List />}
      {showCheckZone && <CheckZone />}
      {showConnectForm && <ConnectForm />}
    </div>
  );
};

export default App;
