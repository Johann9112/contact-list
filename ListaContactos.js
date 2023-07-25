/* Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:
id
nombres
apellidos
teléfono
ubicaciones
ciudad
dirección */

let listaContactos = [];
  
function agregarContacto(id, nombre, apellido, telefono, ciudad, direccion) {
    listaContactos.push({
      id,
      nombre,
      apellido,
      telefono,
      ubicacion: {ciudad,direccion},
    });
  }

  agregarContacto(1018, "Johann", "Ortiz", "123456", "Bogota", "Engativa");
  agregarContacto(1017, "John", "Briceño", "78910", "Ibague", "Miro lindo");
  agregarContacto(1134, "Angee", "Clavijo", "98765", "Bogota", "Tunjuelito");
  
  
  /* console.log(listaContactos); */
  
  //Crea una función para borrar un contacto existente de la lista
  
  function borrarContacto(id) {
    listaContactos = listaContactos.filter((contacto) => {
      return contacto.id !== id;
    });
  
    imprimirConsolo(listaContactos);
  }


  imprimirConsolo(listaContactos)
  
  
   borrarContacto(1134);
   
  
  /* console.log(listaContactos); */
  
  //Crea una función para imprimir en consola los contactos presentes en la lista
  
  function imprimirConsolo (listaContactos){
      console.log(listaContactos);
  
  }


  // crea una funcion para actualizar un contacto existente


  function actualizarContacto(id, nuevosDatos) {
    listaContactos = listaContactos.map((contacto) =>
      contacto.id === id ? { ...contacto, ...nuevosDatos } : contacto
    );

    imprimirConsola(listaContactos);
  }


  actualizarContacto(1017, {
    nombre: "Johnn",
    apellido: "Briceño",
    telefono: "78910",
    ubicaciones: {
      ciudad: "Bogota",
      direccion: "Kennedy",
    },
  });