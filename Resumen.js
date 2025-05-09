
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
  
    const nombre = params.get("nombre");
    const edad = params.get("edad");
    const fecha = params.get("fecha");
    const pais = params.get("pais");
    const genero = params.get("genero");
    const color = params.get("color");
    const comentarios = params.get("comentarios");
    const intereses = params.getAll("intereses");

      console.log("Resumen de datos:");
      console.log(`Nombre: ${nombre}`);
      console.log(`Edad: ${edad}`);
      console.log(`Fecha de nacimiento: ${fecha}`);
      console.log(`País: ${pais}`);
      console.log(`Género: ${genero}`);
      console.log(`Color favorito: ${color}`);
      console.log(`Comentarios: ${comentarios}`);
      console.log(`Intereses: ${intereses.join(', ')}`);
  
    if (nombre) {
      const contenedor = document.getElementById("root");
      contenedor.innerHTML = `
        <h1>Resumen de datos:</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Fecha de nacimiento:</strong> ${fecha}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Intereses:</strong> ${intereses.join(', ')}</p>
        <p><strong>Comentarios:</strong> ${comentarios}</p>
        <p><strong>Color favorito:</strong> <span style="color:${color}">${color}</span></p>
      `;
  
     
     
    }
  });
  