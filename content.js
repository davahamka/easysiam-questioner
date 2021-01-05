let text;
let inputElements = document.getElementsByTagName("input");
let isiSaran = prompt("Masukkan saran: ", "Perbanyak tugas pak/bu!");
if (isiSaran == null || isiSaran == "") {
  alert("EASYSIAM terminated.");
} else {
  isiKuisoner(4, isiSaran);
}

function isiKuisoner(nilai, saran) {
  for (let i = 0; i < inputElements.length; i++) {
    if (inputElements[i].getAttribute("type") == "radio") {
      if (inputElements[i].getAttribute("value") == nilai) {
        inputElements[i].checked = true;
      }
    }
  }

  document.getElementById("saran").appendChild(document.createTextNode(saran));
  for(let i =0;i<inputElements.length;i++){
    if(inputElements[i].type.toLowerCase()=='submit'){
      inputElements[i].scrollIntoView({
        behavior:'smooth'
      });
    } else {
      inputElements[i].scrollIntoView();
    }
  }
}
// prompt("Masukkan saran: ", "Keren pak/bu dosen!");
