
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
  
    if (nombre) {
      const contenedor = document.getElementById("root");
      contenedor.innerHTML = `
        <h2>Resumen de datos:</h2>
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
  