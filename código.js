
document.getElementById("color").addEventListener("input", function() {
    document.getElementById("preview").style.backgroundColor = this.value;
}); 


  document.addEventListener("DOMContentLoaded", () => {
    const paramsString = window.location.search;
    console.log (paramsString);
    const searchParams = new URLSearchParams(paramsString);
  


    const nombre = searchParams.get("nombre");
    const edad = searchParams.get("edad");
    const fecha = searchParams.get("fecha");
    const pais = searchParams.get("pais");
    const genero = searchParams.get("genero");
    const color = searchParams.get("color");
    const comentarios = searchParams.get("comentarios");
    const intereses = searchParams.getAll("intereses");
  
 
    if (nombre) {
      console.log(" Datos recibidos del formulario:");
      console.log("Nombre:", nombre);
      console.log("Edad:", edad);
      console.log("Fecha de nacimiento:", fecha);
      console.log("País:", pais);
      console.log("Género:", genero);
      console.log("Intereses:", intereses);
      console.log("Color favorito:", color);
      console.log("Comentarios:", comentarios);

      document.getElementById("preview").style.backgroundColor = color;
    }


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
  });
  