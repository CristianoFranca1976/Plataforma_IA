document.getElementById("myInput").addEventListener("keydown", function(event) {
    if (event.key === "/") {
      event.preventDefault(); // Impede o comportamento padrão do símbolo "/"
      document.getElementById("myButton").click(); // Simula o clique no botão
    }
  });
  
  document.getElementById("myButton").addEventListener("click", function() {
    // Coloque aqui a ação que deseja executar quando o botão for clicado ou "Enter" for pressionado
    console.log("Botão clicado ou Enter pressionado");
  });
  