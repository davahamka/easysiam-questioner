let nilai;
let saran;
let isiNilai = prompt("Masukkan nilai (1-5): ", "4");
let isiSaran = prompt("Masukkan saran: ", "Perbanyak tugas pak/bu!");
let inputElements = document.getElementsByTagName("input");
// let backdrop = document.createElement("div");
// let modal = document.createElement("div");
// let nilaiLabel = document.createElement("label");
// nilaiLabel.appendChild(document.createTextNode("Nilai: (1-5)"));
// let nilaiInput = document.createElement("input");
// nilaiInput.oninput = handleNilaiInput;
// let saranLabel = document.createElement("label");
// saranLabel.appendChild(document.createTextNode("Saran: "));
// let saranInput = document.createElement("textarea"); 
// modal.appendChild(document.createElement("h2").appendChild(document.createTextNode("EZSIAM🔥")));
// modal.appendChild(document.createElement("hr"));
// backdrop.style.cssText =
//   " top:0;left: 0;position: fixed;background: rgba(0, 0, 0, 0.5);width: 100%;height: 100%;";
// modal.style.cssText =
//   "width: 400px;padding: 20px;margin: 100px auto;background: white;border-radius:6px ;display:flex;flex-direction:column";
// document.body.appendChild(backdrop);
// backdrop.appendChild(modal);
// modal.appendChild(nilaiLabel);
// modal.appendChild(nilaiInput);
// modal.appendChild(saranLabel);
// modal.appendChild(saranInput);

if (isiSaran == null || isiSaran == "") {
  alert("EASYSIAM terminated.");
} else {
  isiKuisoner(isiNilai, isiSaran);
}

function handleNilaiInput(){
  nilai = nilaiInput.value;
  console.log(nilai)
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
  for (let i = 0; i < inputElements.length; i++) {
    if (inputElements[i].type.toLowerCase() == "submit") {
      inputElements[i].scrollIntoView({
        behavior: "smooth",
      });
    } else {
      inputElements[i].scrollIntoView();
    }
  }
}
// prompt("Masukkan saran: ", "Keren pak/bu dosen!");
