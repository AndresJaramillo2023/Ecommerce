
    function mostrar(arreglo,valor){
        // alert("arreglo: "+ arreglo[0]);
        // alert("arreglo: "+ arreglo[1]);
        // alert("arreglo: "+ arreglo[2]);
        // alert("arreglo: "+ arreglo[3]);
        // alert("arreglo: "+ arreglo[4]);
        // alert("valor: "+ valor);
        if(valor === 'true'){
            let seccionGalerias = document.getElementById('idGalerias');
            seccionGalerias.style.position = "relative";
            seccionGalerias.style.zIndex = "1";
            let descripcion = document.getElementById('idDescripcion');
            descripcion.style.width = "100%";
            descripcion.style.height = "auto";
            descripcion.style.display = "flex";
            descripcion.style.flexDirection = "row";
            descripcion.style.justifyContent = "center";
            descripcion.style.position = "relative";
            descripcion.style.zIndex = "2";
            descripcion.style.backgroundColor = "red";

            let seccionStarWars = document.getElementById('idStarWars');
            // seccionStarWars.style.position = "relative";
            // seccionStarWars.style.zIndex = "1";
            seccionStarWars.style.display = "none";
            let seccionConsolas = document.getElementById('idConsolas');
            // seccionConsolas.style.position = "relative";
            // seccionConsolas.style.zIndex = "1";
            seccionConsolas.style.display = "none";
            let seccionDiversos = document.getElementById('idDiversos');
            // seccionDiversos.style.position = "relative";
            // seccionDiversos.style.zIndex = "1";
            seccionDiversos.style.display = "none";
            var desNom = document.querySelector("[data-descripcion-nombre]");
            desNom.innerHTML = arreglo[1];
            var desNom = document.querySelector("[data-descripcion-precio]");
            desNom.innerHTML = "$"+arreglo[2];
            var desNom = document.querySelector("[data-descripcion-parrafo]");
            desNom.innerHTML = arreglo[3];    
            document.getElementById("idDescripcionImagen").src=arreglo[4];
        }

    }
