var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    
    doctor = document.getElementById("doctor"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser")


const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

let isEdit = false, editId
newUserBtn.addEventListener('click', () => {
  submitBtn.innerText = 'Crear',
      modalTitle.innerText = "Crear nueva cita"
  isEdit = false
  form.reset()
})

fetch("https://desplieguebackend-production.up.railway.app/citas/listCita")
  .then((response) => {
    if (!response.ok) {
      throw new Error("La solicitud no tuvo éxito.");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    showInfo(data);
  })
  .catch((error) => {
    console.error("Hubo un error:", error);
  });

function showInfo(data) {
  const userInfo = document.getElementById("data");

  while (userInfo.firstChild) {
    userInfo.removeChild(userInfo.firstChild);
  }

  const row = userInfo.insertRow();
  row.classList.add("employeeDetails");

  const cellIndex = row.insertCell(0);
  const cellLastname = row.insertCell(1);
  const cellDate = row.insertCell(2);
  const cellStatus = row.insertCell(3);
  const cellDoctor = row.insertCell(4);
  const cellFech = row.insertCell(5);

  cellIndex.textContent = data.IDCita;
  cellLastname.textContent = data.IDPaciente;
  cellDate.textContent = data.IDMedico;
  cellStatus.textContent = data.citEstad;
  cellDoctor.textContent = data.citTratam;
  cellFech.textContent = data.citFech;

  const cellActions = row.insertCell(6);
  cellActions.innerHTML = `<div class="btns-actions">
    <button class="btnL btn-success" onclick="readInfo('${data.IDCita}', '${data.IDPaciente}', '${data.IDMedico}', '${data.citEstad}', '${data.citTratam}', '${data.citFech}')" data-bs-toggle="modal" data-bs-target="#readData"><i class='bx bx-show'></i></button>
    <button class="btnL btn-primary" onclick="editInfo('${data.IDCita}', '${data.IDPaciente}', '${data.IDMedico}', '${data.citEstad}', '${data.citTratam}', '${data.citFech}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class='bx bx-edit'></i></button>
    <button class="btnL btn-danger" onclick="deleteInfo(1)"><i class='bx bx-trash' ></i></button>
    </div>
    `;
}

function editInfo(IDCita, IDPaciente, IDMedico, citEstad, citTratam, citFech) {
  isEdit = true;
  editId = IDCita;
  userName.value = IDCita;
  lastname.value = IDPaciente;
  date.value = IDMedico;
  date.value = citEstad;
  date.value = citTratam;
  date.value = citFech;
  submitBtn.innerText = "Actualizar";
  modalTitle.innerText = "Actualizar cita";
}

function deleteInfo(index) {
  if (confirm("¿Deseo eliminar de esta lista?")) {
    getData.splice(index, 1);
    localStorage.setItem("userProfile", JSON.stringify(getData));
    showInfo();
  }
}



form.addEventListener("submit", (e) => {
  e.preventDefault();

  const IDPaciente = document.getElementById("IDPaciente");
  const IDMedico = document.getElementById("IDMedico");
  const citEstad = document.getElementById("citEstad");
  const citHora = document.getElementById("citHora");
  const citTratam = document.getElementById("citTratam");

  if (IDPaciente.value.trim() !== "" && citEstad.value.trim() !== "" && IDMedico.value.trim() !== "") {
    const information = {
      IDPaciente: parseInt(IDPaciente.value, 10),
      IDMedico: parseInt(IDMedico.value, 10),
      citEstad: citEstad.value,
      citTratam: citTratam.value,
      citHora: "19:30:00"
    };

    console.log(information);

    fetch("https://desplieguebackend-production.up.railway.app/citas/createCita", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(information),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no tuvo éxito.");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert("Éxito");
        form.reset();
      })
      .catch((error) => {
        console.error("Hubo un error:", error);
      });
  } else {
    console.log("Los campos IDPaciente, IDMedico y citEstad son requeridos y no pueden estar vacíos.");
  }
});

