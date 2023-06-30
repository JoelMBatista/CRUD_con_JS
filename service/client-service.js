

//CRUD --- Metodos HTTP

//Create -- POST
//Read -- GET
//Update -- PUT/PATCH
//Delete -- DELETE

const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((response) => response.json());

export const clientServer = {
  listaClientes,
}