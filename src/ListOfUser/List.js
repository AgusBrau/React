const List = (listado) => {
  const listaUser = listado.usuarios;
  const tablaUser = listaUser.data;
  return (
    <table className="table table-light table-striped">
      <thead key="thead">
        <tr key="tr">
          <th scope="col" key="#ID">
            #ID
          </th>
          <th scope="col" key="E-Mail">
            E-Mail
          </th>
          <th scope="col" key="Username">
            Username
          </th>
          <th scope="col" key="Provincia">
            Provincia
          </th>
          <th scope="col" key="Ciudad">
            Ciudad
          </th>
        </tr>
      </thead>
      <tbody key="tbod">
        {tablaUser.map((user) => (
          <tr key={"tr" + user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.Correo}</td>
            <td>{user.Usuario}</td>
            <td>{user.Provincia}</td>
            <td>{user.Ciudad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default List;
