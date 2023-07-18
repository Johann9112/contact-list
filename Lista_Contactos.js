/* Crea una lista de contactos con datos predefinidos,
cada contacto debe contener el nombre y apellido como 
una sola cadena de caracteres */

let listaContactos = [
    { nombre: "Johann", apellido: "Ortiz" },
    { nombre: "John", apellido: "Briceño" },
    { nombre: "Angee", apellido: "Clavijo" },
  ];
  
  /*   console.log(listaContactos); */
  
  //Crea una función para añadir un nuevo contacto a una lista
  
  function agregarContacto(anadeNombre) {
      const [nombre, apellido] = anadeNombre.split(" ");
      listaContactos.push({ nombre, apellido });
  }
  /*   console.log(listaContactos); */
  
  agregarContacto("Sebastian Quiroga");
  agregarContacto("Daniel Martines");
  
  
  /* console.log(listaContactos); */
  
  //Crea una función para borrar un contacto existente de la lista
  
  function borrarContacto(eliminar) {
     
      listaContactos = listaContactos.filter((contacto) => {
          return  `${contacto.nombre} ${contacto.apellido}` !== eliminar;
          
     
      });
  imprimirConsolo(listaContactos)
  
    }
  
  
   borrarContacto("John Briceño");
   borrarContacto("Sebastian Quiroga");
  
  /* console.log(listaContactos); */
  
  //Crea una función para imprimir en consola los contactos presentes en la lista
  
  function imprimirConsolo (listaContactos){
      console.log(listaContactos);
  
  }