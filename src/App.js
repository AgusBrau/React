import "./App.css";
import TiempoEjecucion from "./Components/TiempoEjecucion";
import Form from "./userRegistration/Form";
import UserList from "./ListOfUser/UserList";

function App() {
  const emailLabel = "Correo";
  const passwordLabel = "Contraseña";
  const password2Label = "contraseña";
  const usernameLabel = "Usuario";
  const ciudadLabel = "Ciudad";
  const provinciaLabel = "Provincia";

  return (
    <div className="App">
      <h2 className="text-bg-primary p-3">Registrar usuario</h2>
      <TiempoEjecucion />
      <Form
        email={emailLabel}
        password={passwordLabel}
        password2={password2Label}
        username={usernameLabel}
        ciudad={ciudadLabel}
        provincia={provinciaLabel}
      />
      <UserList />
    </div>
  );
}

export default App;
