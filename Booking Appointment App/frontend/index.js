const submitBtn = document.getElementById("submit");
const mainBodyDiv = document.querySelector("#papa-div");

// Posting data to localhost:3000 and displaying results on the website
submitBtn.addEventListener("click", submit);
function submit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phonenumber = document.getElementById("phonenumber").value.toString();

  //   axios({
  //     method: "post",
  //     url: "https://crudcrud.com/api/3a928e06e3dd41daa9be45223aea5d97/appointmentData",
  //     data: {
  //       name: name,
  //       email: email,
  //       phonenumber: phonenumber,
  //     },
  //   })
  //     .then((res) => {
  //       display(res);
  //     })
  //     .catch((err) => console.log(err));

  const postUser = async () => {
    try {
      const res = await axios.post("http://localhost:3000/postuser", {
        username: name,
        email: email,
        phonenumber: phonenumber,
      });
      display(res);
    } catch (error) {
      console.log(error);
    }
  };
  postUser();
}

function display(res) {
  const data = res.data[0];
  const name = data.username;
  const email = data.email;
  const phonenumber = data.phonenumber;
  const id = data.id;

  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const detailsContainer = document.createElement("div");
  const nameSpan = document.createElement("span");
  const emailSpan = document.createElement("span");
  const phonenumberSpan = document.createElement("span");
  const buttonsContainer = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  card.className = "card card-style bg-secondary-subtle";
  cardBody.className = "card-body d-flex";
  detailsContainer.className = "container d-flex flex-column";
  nameSpan.innerHTML = `${name}`;
  emailSpan.innerHTML = `${email}`;
  phonenumberSpan.innerHTML = `${phonenumber}`;
  buttonsContainer.className =
    "container d-flex justify-content-end align-items-center";
  editButton.className = "btn btn-warning btn-dimensions";
  editButton.innerText = "Edit";
  editButton.setAttribute("data-bs-toggle", "modal");
  editButton.setAttribute("data-bs-target", "#editModal");
  deleteButton.className = "btn btn-danger btn-dimensions";
  deleteButton.innerText = "Delete";

  // Lexicographical addition of elements
  mainBodyDiv.appendChild(card);
  card.appendChild(cardBody);
  cardBody.appendChild(detailsContainer);
  cardBody.appendChild(buttonsContainer);
  detailsContainer.appendChild(nameSpan);
  detailsContainer.appendChild(emailSpan);
  detailsContainer.appendChild(phonenumberSpan);
  buttonsContainer.appendChild(editButton);
  buttonsContainer.appendChild(deleteButton);

  // setting up functionality for update
  editButton.addEventListener("click", edit);
  // editing stuff
  function edit() {
    // all the modal elements
    const modal = document.createElement("div");
    const modalDialog = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalTitle = document.createElement("h4");
    const close = document.createElement("button");
    const modalBody = document.createElement("div");
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    const emailLabel = document.createElement("label");
    const emailInput = document.createElement("input");
    const phonenumberLabel = document.createElement("label");
    const phonenumberInput = document.createElement("input");
    const modalFooter = document.createElement("div");
    const closeButton = document.createElement("button");
    const saveButton = document.createElement("button");

    mainBodyDiv.appendChild(modal);

    modal.className = "modal fade";
    modal.setAttribute("id", "editModal");
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("aria-labelledby", "modal-title");
    modal.setAttribute("aria-hidden", "true");
    modal.appendChild(modalDialog);
    modalDialog.className = "modal-dialog";
    modalDialog.appendChild(modalContent);
    modalContent.className = "modal-content";

    modalContent.appendChild(modalHeader);
    modalHeader.className = "modal-header";
    modalHeader.appendChild(modalTitle);
    modalTitle.innerText = "Edit Details";
    modalTitle.setAttribute("id", "modal-title");
    modalHeader.appendChild(close);
    close.className = "btn-close";
    close.setAttribute("type", "button");
    close.setAttribute("data-bs-dismiss", "modal");
    close.setAttribute("aria-label", "Close");

    modalContent.appendChild(modalBody);
    modalBody.className = "modal-body";
    modalBody.appendChild(nameLabel);
    nameLabel.className = "form-label";
    nameLabel.setAttribute("for", "name");
    nameLabel.innerHTML = "Name:";
    modalBody.appendChild(nameInput);
    nameInput.className = "form-control";
    nameInput.setAttribute("id", "modalName");
    modalBody.appendChild(emailLabel);
    emailLabel.className = "form-label";
    emailLabel.setAttribute("for", "email");
    emailLabel.innerHTML = "Email:";
    modalBody.appendChild(emailInput);
    emailInput.className = "form-control";
    emailInput.setAttribute("id", "modalEmail");
    modalBody.appendChild(phonenumberLabel);
    phonenumberLabel.className = "form-label";
    phonenumberLabel.setAttribute("for", "phonenumber");
    phonenumberLabel.innerHTML = "Phone Number:";
    modalBody.appendChild(phonenumberInput);
    phonenumberInput.className = "form-control";
    phonenumberInput.setAttribute("id", "modalphonenumber");

    modalContent.appendChild(modalFooter);
    modalFooter.className = "modal-footer";
    modalFooter.appendChild(closeButton);
    closeButton.className = "btn btn-secondary";
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("type", "button");
    closeButton.innerText = "Close";
    modalFooter.appendChild(saveButton);
    saveButton.className = "btn btn-primary";
    saveButton.innerText = "Save";
    saveButton.setAttribute("type", "button");
    saveButton.addEventListener("click", put);

    // patch
    function put() {
      const name = document.getElementById("modalName").value;
      const email = document.getElementById("modalEmail").value;
      const phonenumber = document.getElementById("modalphonenumber").value;

      //   axios({
      //     method: "put",
      //     url: `https://crudcrud.com/api/3a928e06e3dd41daa9be45223aea5d97/appointmentData/${id}`,
      //     data: {
      //       name: `${name}`,
      //       email: `${email}`,
      //       phonenumber: `${phonenumber}`,
      //     },
      //   })
      //     .then(() => {
      //       updateDisplay(name, email, phonenumber, id);
      //       card.remove();
      //     })
      //     .catch((err) => console.log(err));

      const editUser = async () => {
        try {
          const res = await axios.patch("http://localhost:3000/patchuser", {
            id: id,
            username: name,
            email: email,
            phonenumber: phonenumber,
          });
          updateDisplay(res.data[0].username, res.data[0].email, res.data[0].phonenumber, res.data[0].id);
          card.remove();
        } catch (error) {
          console.log(error);
        }
      };
      editUser();
    }
  }

  // setting up functionality for delete
  deleteButton.addEventListener("click", deleteF);
  function deleteF() {
    // axios({
    //   method: "delete",
    //   url: `https://crudcrud.com/api/3a928e06e3dd41daa9be45223aea5d97/appointmentData/${id}`,
    // }).then(() => {
    //   card.remove();
    // });

    const deleteUser = async () => {
      try {
        const res = await axios({
          method: "get",
          url: "http://localhost:3000/deleteuser",
          data: {
            id: id,
          },
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    deleteUser();
  }
}

// Update the display
function updateDisplay(name, email, phonenumber, id) {
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const detailsContainer = document.createElement("div");
  const nameSpan = document.createElement("span");
  const emailSpan = document.createElement("span");
  const phonenumberSpan = document.createElement("span");
  const buttonsContainer = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  card.className = "card card-style bg-secondary-subtle";
  cardBody.className = "card-body d-flex";
  detailsContainer.className = "container d-flex flex-column";
  nameSpan.innerHTML = `${name}`;
  emailSpan.innerHTML = `${email}`;
  phonenumberSpan.innerHTML = `${phonenumber}`;
  buttonsContainer.className =
    "container d-flex justify-content-end align-items-center";
  editButton.className = "btn btn-warning btn-dimensions";
  editButton.innerText = "Edit";
  editButton.setAttribute("data-bs-toggle", "modal");
  editButton.setAttribute("data-bs-target", "#editModal");
  deleteButton.className = "btn btn-danger btn-dimensions";
  deleteButton.innerText = "Delete";

  // Lexicographical addition of elements
  mainBodyDiv.appendChild(card);
  card.appendChild(cardBody);
  cardBody.appendChild(detailsContainer);
  cardBody.appendChild(buttonsContainer);
  detailsContainer.appendChild(nameSpan);
  detailsContainer.appendChild(emailSpan);
  detailsContainer.appendChild(phonenumberSpan);
  buttonsContainer.appendChild(editButton);
  buttonsContainer.appendChild(deleteButton);

  // setting up functionality for update and delete
  editButton.addEventListener("click", edit);
  // editing stuff
  function edit() {
    // all the modal elements
    const modal = document.createElement("div");
    const modalDialog = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalTitle = document.createElement("h4");
    const close = document.createElement("button");
    const modalBody = document.createElement("div");
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    const emailLabel = document.createElement("label");
    const emailInput = document.createElement("input");
    const phonenumberLabel = document.createElement("label");
    const phonenumberInput = document.createElement("input");
    const modalFooter = document.createElement("div");
    const closeButton = document.createElement("button");
    const saveButton = document.createElement("button");

    mainBodyDiv.appendChild(modal);

    modal.className = "modal fade";
    modal.setAttribute("id", "editModal");
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("aria-labelledby", "modal-title");
    modal.setAttribute("aria-hidden", "true");
    modal.appendChild(modalDialog);
    modalDialog.className = "modal-dialog";
    modalDialog.appendChild(modalContent);
    modalContent.className = "modal-content";

    modalContent.appendChild(modalHeader);
    modalHeader.className = "modal-header";
    modalHeader.appendChild(modalTitle);
    modalTitle.innerText = "Edit Details";
    modalTitle.setAttribute("id", "modal-title");
    modalHeader.appendChild(close);
    close.className = "btn-close";
    close.setAttribute("type", "button");
    close.setAttribute("data-bs-dismiss", "modal");
    close.setAttribute("aria-label", "Close");

    modalContent.appendChild(modalBody);
    modalBody.className = "modal-body";
    modalBody.appendChild(nameLabel);
    nameLabel.className = "form-label";
    nameLabel.setAttribute("for", "name");
    nameLabel.innerHTML = "Name:";
    modalBody.appendChild(nameInput);
    nameInput.className = "form-control";
    nameInput.setAttribute("id", "modalName");
    modalBody.appendChild(emailLabel);
    emailLabel.className = "form-label";
    emailLabel.setAttribute("for", "email");
    emailLabel.innerHTML = "Email:";
    modalBody.appendChild(emailInput);
    emailInput.className = "form-control";
    emailInput.setAttribute("id", "modalEmail");
    modalBody.appendChild(phonenumberLabel);
    phonenumberLabel.className = "form-label";
    phonenumberLabel.setAttribute("for", "phonenumber");
    phonenumberLabel.innerHTML = "Phone Number:";
    modalBody.appendChild(phonenumberInput);
    phonenumberInput.className = "form-control";
    phonenumberInput.setAttribute("id", "modalphonenumber");

    modalContent.appendChild(modalFooter);
    modalFooter.className = "modal-footer";
    modalFooter.appendChild(closeButton);
    closeButton.className = "btn btn-secondary";
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("type", "button");
    closeButton.innerText = "Close";
    modalFooter.appendChild(saveButton);
    saveButton.className = "btn btn-primary";
    saveButton.innerText = "Save";
    saveButton.setAttribute("type", "button");
    saveButton.addEventListener("click", put);

    // patch
    function put() {
      const name = document.getElementById("modalName").value;
      const email = document.getElementById("modalEmail").value;
      const phonenumber = document.getElementById("modalphonenumber").value;

      //   axios({
      //     method: "put",
      //     url: `https://crudcrud.com/api/3a928e06e3dd41daa9be45223aea5d97/appointmentData/${id}`,
      //     data: {
      //       name: `${name}`,
      //       email: `${email}`,
      //       phonenumber: `${phonenumber}`,
      //     },
      //   })
      //     .then(() => {
      //       card.remove();
      //       updateDisplay(name, email, phonenumber, id);
      //     })
      //     .catch((err) => console.log(err));
    }
  }

  // deleting stuff
  deleteButton.addEventListener("click", deleteF);
  function deleteF() {
    // axios({
    //   method: "delete",
    //   url: `https://crudcrud.com/api/3a928e06e3dd41daa9be45223aea5d97/appointmentData/${id}`,
    // }).then(() => {
    //   card.remove();
    // });
    const deleteUser = async () => {
      try {
        const res = await axios({
          method: "get",
          url: "http://localhost:3000/deleteuser",
          data: {
            id: id,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    deleteUser();
  }
}

// // getting preloaded data
function run() {
  console.log("first");
  //   axios({
  //     method: "get",
  //     url: "https://crudcrud.com/api/3a928e06e3dd41daa9be45223aea5d97/appointmentData",
  //   })
  //     .then((res) => {
  //       //   console.log(res.data);
  //       preLoadData(res);
  //     })
  //     .catch((err) => console.log(err));
}
run();

function preLoadData(res) {
  const rawData = res.data;
  for (let i = 0; i < rawData.length; i++) {
    updateDisplay(
      rawData[i].name,
      rawData[i].email,
      rawData[i].phonenumber,
      rawData[i]._id
    );
  }
}
