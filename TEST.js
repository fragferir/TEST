document.getElementById("form1").onsubmit = function () {
       componente = parseInt(document.querySelector('input[name = "componente"]:checked').value);
	   fecha = parseInt(document.querySelector('input[name = "fecha"]:checked').value);
	   arquitectura = parseInt(document.querySelector('input[name = "arquitectura"]:checked').value);
	   color = parseInt(document.querySelector('input[name = "color"]:checked').value);
	   avara = parseInt(document.querySelector('input[name = "avara"]:checked').value);
	   cmp = parseInt(document.querySelector('input[name = "cmp"]:checked').value);
       productos = parseInt(document.querySelector('input[name = "productos"]:checked').value);
       aprovecha = parseInt(document.querySelector('input[name = "aprovecha"]:checked').value);
       calor = parseInt(document.querySelector('input[name = "calor"]:checked').value);
       error = parseInt(document.querySelector('input[name = "error"]:checked').value);
	   result = componente + fecha + arquitectura + color + avara + cmp + productos + aprovecha + calor + error;
	document.getElementById("puntaje").innerHTML = result;
if (result >= 20) {result2 = location.href = ("AMD.html")};
    if (result > 16 && result < 20) {result2 = location.href = ("INTEL.html")};
    if (result <= 16 ) {result2 = location.href = ("NVIDIA.html")};
return false;
             }