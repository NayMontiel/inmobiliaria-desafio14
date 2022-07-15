window.onload = iniciar;

// arreglos de objetos

const propiedades = [
    {
      id:"casacampo",
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 170
    },
    {
      id:"casaplaya",
      name: "Casa de playa",
      description: "Despierta todos tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      cuartos: 2,
      metros: 130
    },
    {
      id:"casacentro",
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      cuartos: 3,
      metros: 200
    },
    {
      id:"casarodante",
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      cuartos: 1,
      metros: 6
    },
    {
      id:"casadepartamento",
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      cuartos: 2,
      metros: 70
    },
    {
      id:"casamansion",
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      cuartos: 7,
      metros: 700
    }
  ];

  // funcion click
  function iniciar() {
    let btnBuscar = document.getElementById("btn-buscar");
    btnBuscar.addEventListener("click", clickBtnBuscar);
  }

  function clickBtnBuscar() {
      // declaracion de variables
  
    let total = document.querySelector("span");

    let cantidadCuartos = document.getElementById("cantidad-cuartos");
    let cantidad = cantidadCuartos.value;

    let desde = document.getElementById("metro-desde");
    let mDesde = desde.value;

    let hasta = document.getElementById("metro-hasta");
    let mHasta = hasta.value;

    let card_casacampo        = document.querySelector("#casacampo");
    let card_casaplaya        = document.querySelector("#casaplaya");
    let card_casacentro       = document.querySelector("#casacentro");
    let card_casarodante      = document.querySelector("#casarodante");
    let card_casadepartamento = document.querySelector("#casadepartamento");
    let card_casamansion      = document.querySelector("#casamansion");

    card_casacampo.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded');
    card_casaplaya.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded');
    card_casacentro.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded');
    card_casarodante.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded');
    card_casadepartamento.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded');
    card_casamansion.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded');

    
    // validación de campos vacios
    if (cantidad == "") 
    {
      alert("FALTA EL CAMPO CANTIDAD DE CUARTOS POR LLENAR. VERIFIQUE Y VUELVA A INTENTAR");
      return;
    }
    if (mDesde == "") 
    {
      alert("FALTA EL CAMPO METROS CUADRADOS 'DESDE' POR LLENAR. VERIFIQUE Y VUELVA A INTENTAR");
      return;
    }
    if (mHasta == "") 
    {
      alert("FALTA EL CAMPO METROS CUADRADOS 'HASTA' POR LLENAR. VERIFIQUE Y VUELVA A INTENTAR");
      return;
    }
    
    // ciclo for
    let contador = 0;
    
    for (const propiedad of propiedades) {
        if (cantidad == propiedad.cuartos) 
        {
            if (mDesde <= propiedad.metros && mHasta >= propiedad.metros)
            {
              console.log("la "+propiedad.name+" cumple con la condicion");

              contador++
            }
            else
            {
              // para verificar resultados
              console.log(`La ${propiedad.name} Cumple Con La Condicion`);

              if(propiedad.id == 'casacampo')
              {
                card_casacampo.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded ocultar');
              }
            if(propiedad.id == 'casaplaya')
            {
              card_casaplaya.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded ocultar');
            }
            if(propiedad.id == 'casacentro')
            {
              card_casacentro.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded ocultar');
            }
            if(propiedad.id == 'casarodante')
            {
              card_casarodante.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded ocultar');
            }
            if(propiedad.id == 'casadepartamento')
            {
              card_casadepartamento.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded ocultar');
            }
            if(propiedad.id == 'casamansion')
            {
              card_casamansion.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded ocultar');
            }
            }
          }
          else
          {
            // para verificar resultados
            console.log(`La ${propiedad.name} No Cumple Con La Condicion`);

            if(propiedad.id == 'casacampo')
            {
              card_casacampo.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded ocultar');
            }
            if(propiedad.id == 'casaplaya')
            {
              card_casaplaya.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded ocultar');
            }
            if(propiedad.id == 'casacentro')
            {
              card_casacentro.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded ocultar');
            }
            if(propiedad.id == 'casarodante')
            {
              card_casarodante.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded ocultar');
            }
            if(propiedad.id == 'casadepartamento')
            {
              card_casadepartamento.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded ocultar');
            }
            if(propiedad.id == 'casamansion')
            {
              card_casamansion.setAttribute('class','card-propiedades shadow-lg mt-2 bg-body rounded ocultar');
            }
            
          }
    }  
    // fin del for

    total.innerHTML = contador;

    // interpolacion
    let result = document.querySelector("#result")
    if (contador === 0) {
      result.innerHTML = `EL RESULTADO DE SU BUSQUEDA ES ${contador}`;
    }

  }