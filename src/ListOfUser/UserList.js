import axios from "axios";
import { useEffect, useState } from "react";
import List from "./List";
const UserList = () => {
  const [listado, setListado] = useState([]);
  const [hiddenList, setHidden] = useState(false);
  const updateList = async () => {
    try {
      const userbaseUrl = "http://localhost:5050/Userbase";
      const { data } = await axios.get(userbaseUrl);
      setListado((prevState) => {
        return { ...prevState, data };
      });
    } catch (error) {
      console.log("Error -- " + error.message);
    }
  };
  useEffect(() => {
    updateList();
  }, []);
  const hideList = () => {
    updateList();
    console.log(listado, "hidelist");
    if (hiddenList === false) return setHidden(true);
    else return setHidden(false);
  };
  return (
    <>
      <button
        onClick={hideList}
        style={{ marginTop: 20, alignSelf: "initial" }}
        className="btn btn-lg btn-info dropdown-toggle"
      >
        Lista de usuarios
      </button>
      {hiddenList ? <List usuarios={listado} /> : null}
    </>
  );
};
export default UserList;
