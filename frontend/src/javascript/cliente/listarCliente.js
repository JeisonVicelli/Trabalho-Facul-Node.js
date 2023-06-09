document.addEventListener("DOMContentLoaded", () => {
  const lista = document.querySelector("#lista");

  fetch("http://localhost:8081/clientes")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((cliente) => {
        const div = document.createElement("div");
        const id = document.createElement("h2");
        const Nome = document.createElement("h2");
        const CPF = document.createElement("h2");
        const Telefone = document.createElement("h2");
        const DataNascimento = document.createElement("h2");

        id.textContent = `ID: ${cliente.id}`;
        Nome.textContent = `Nome: ${cliente.Nome}`;
        CPF.textContent = `CPF: ${cliente.CPF}`;
        Telefone.textContent = `Telefone: ${cliente.Telefone}`;
        DataNascimento.textContent = `DataNascimento: ${cliente.DataNascimento}`;

        div.appendChild(id);
        div.appendChild(Nome);
        div.appendChild(CPF);
        div.appendChild(Telefone);
        div.appendChild(DataNascimento);

        lista.appendChild(div);
        lista.appendChild(document.createElement("hr"));
      });
    })
    .catch((error) => console.log(error));
});
