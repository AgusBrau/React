import { useState } from "react";
import Selectinput from "./Selectinput";
import Textinput from "./Textinput";
import axios from "axios";
const styleinputs = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
};
const provincias = [
  { numero: 1, codigo: "BA", provincia: "Buenos Aires" },
  { numero: 2, codigo: "CA", provincia: "Catamarca" },
  { numero: 3, codigo: "CH", provincia: "Chaco" },
  { numero: 4, codigo: "CT", provincia: "Chubut" },
  { numero: 5, codigo: "CB", provincia: "Córdoba" },
  { numero: 6, codigo: "CR", provincia: "Corrientes" },
  { numero: 7, codigo: "ER", provincia: "Entre Ríos" },
  { numero: 8, codigo: "FO", provincia: "Formosa" },
  { numero: 9, codigo: "JY", provincia: "Jujuy" },
  { numero: 10, codigo: "LP", provincia: "La Pampa" },
  { numero: 11, codigo: "LR", provincia: "La Rioja" },
  { numero: 12, codigo: "MZ", provincia: "Mendoza" },
  { numero: 13, codigo: "MI", provincia: "Misiones" },
  { numero: 14, codigo: "NQ", provincia: "Neuquén" },
  { numero: 15, codigo: "RN", provincia: "Río Negro" },
  { numero: 16, codigo: "SA", provincia: "Salta" },
  { numero: 17, codigo: "SJ", provincia: "San Juan" },
  { numero: 18, codigo: "SL", provincia: "San Luis" },
  { numero: 19, codigo: "SC", provincia: "Santa Cruz" },
  { numero: 20, codigo: "SF", provincia: "Santa Fe" },
  { numero: 21, codigo: "SE", provincia: "Santiago del Estero" },
  {
    numero: 22,
    codigo: "TF",
    provincia: "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
  },
  { numero: 23, codigo: "TU", provincia: "Tucumán" },
];
const Form = (props) => {
  const [formInputs, setFormInputs] = useState(() => {});
  const [alerta, setAlerta] = useState(false);
  const handleSubmit = async () => {
    try {
      const jsonurl = "http://localhost:5050/Userbase";
      await axios.post(jsonurl, formInputs);
    } catch (error) {
      console.log(error);
    }
  };
  const handleForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInputs((values) => ({ ...values, [name]: value }));
  };
  const handleAlert = () => {
    if (alerta === false) return setAlerta(true);
    else return setAlerta(false);
  };
  const preventClick = (event) => {
    event.preventDefault();
    handleSubmit();
    handleAlert();
  };

  return (
    <div>
      {alerta ? (
        <div
          className="alert alert-success display-5"
          style={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            marginLeft: "25%",
            marginTop: "15%",
          }}
        >
          ¡Datos enviados con exito!
          <button
            onClick={handleAlert}
            className="btn btn-danger"
            style={{ marginLeft: 20 }}
          >
            X
          </button>
        </div>
      ) : (
        ""
      )}
      <form onSubmit={preventClick}>
        <div style={styleinputs}>
          <Textinput
            setFormInputs={setFormInputs}
            handleForm={handleForm}
            label={["", props.username]}
          />
          <Textinput
            setFormInputs={setFormInputs}
            handleForm={handleForm}
            label={["", props.email]}
          />
          <Textinput
            setFormInputs={setFormInputs}
            handleForm={handleForm}
            label={["", props.password]}
          />
          <Textinput
            setFormInputs={setFormInputs}
            handleForm={handleForm}
            label={["Vuelva a introducir su ", props.password2]}
          />
          <Selectinput
            setFormInputs={setFormInputs}
            handleForm={handleForm}
            label={["", props.provincia]}
            provincias={provincias}
          />
          <Textinput
            setFormInputs={setFormInputs}
            handleForm={handleForm}
            label={["", props.ciudad]}
          />
          <button
            className="btn btn-primary"
            type="submit"
            style={{ marginTop: 20 }}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
