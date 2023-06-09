const deleta = document.forms.formDeletar;

deleta.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const { id } = deleta;
  const json = { id: id.value };

  fetch(`http://localhost:8081/produtos/${id.value}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao deletar produto");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      id.value = "";
      id.focus();
      document.getElementById("resp").innerHTML =
        "Produto deletado com sucesso!";
      setTimeout(() => {
        document.getElementById("resp").innerHTML = "";
      }, 5000);
    })
    .catch((error) => {
      console.log(error);
      document.getElementById("resp").innerHTML = "Erro ao deletar!";
    });
});
