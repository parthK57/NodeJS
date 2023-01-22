const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", addItem);
function addItem(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const table = document.getElementById("tableNumber").value;

  const postorder = async () => {
    try {
      const res = await axios.post("http://localhost:3000/postorder", {
        tablenumber: table,
        item: name,
        price: price,
      });
      // console.log(res);
      display(res);
    } catch (error) {
      console.log(error);
    }
  };
  postorder();
  name.value = "";
  price.value = "";
}

function display(res) {
  const data = res.data[0];
  const name = data.item;
  const price = data.price;
  const table = data.tablenumber;
  const id = data.id;

  if (table == "Table1") {
    const table1Container = document.getElementById("orders-1");

    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardInfoContainer = document.createElement("div");
    const nameSpan = document.createElement("span");
    const priceSpan = document.createElement("span");
    const buttonContainer = document.createElement("div");
    const deleteBtn = document.createElement("button");

    card.className = "card card-style inherit-container";
    cardBody.className = "card-body d-flex";
    cardInfoContainer.className = "container d-flex flex-column";
    nameSpan.innerText = `Name: ${name}`;
    priceSpan.innerText = `Price: ${price}`;
    buttonContainer.className =
      "container d-flex justify-content-end align-items-center";
    deleteBtn.className = "btn btn-danger btn-dimensions";
    deleteBtn.innerText = "Delete";

    // Lexicographical addition
    table1Container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardInfoContainer);
    cardInfoContainer.appendChild(nameSpan);
    cardInfoContainer.appendChild(priceSpan);
    cardBody.appendChild(buttonContainer);
    buttonContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteF);
    function deleteF() {
      const deleteOrder = async () => {
        const res = await axios.post("http://localhost:3000/deleteorder", {
          id: id,
        });
        // console.log(res);
      };
      deleteOrder();
      table1Container.removeChild(card);
    }
  } else if (table == "Table2") {
    const table2Container = document.getElementById("orders-2");

    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardInfoContainer = document.createElement("div");
    const nameSpan = document.createElement("span");
    const priceSpan = document.createElement("span");
    const buttonContainer = document.createElement("div");
    const deleteBtn = document.createElement("button");

    card.className = "card card-style inherit-container";
    cardBody.className = "card-body d-flex";
    cardInfoContainer.className = "container d-flex flex-column";
    nameSpan.innerText = `Name: ${name}`;
    priceSpan.innerText = `Price: ${price}`;
    buttonContainer.className =
      "container d-flex justify-content-end align-items-center";
    deleteBtn.className = "btn btn-danger btn-dimensions";
    deleteBtn.innerText = "Delete";

    // Lexicographical addition
    table2Container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardInfoContainer);
    cardInfoContainer.appendChild(nameSpan);
    cardInfoContainer.appendChild(priceSpan);
    cardBody.appendChild(buttonContainer);
    buttonContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteF);
    function deleteF() {
      const deleteOrder = async () => {
        const res = await axios.post("http://localhost:3000/deleteorder", {
          id: id,
        });
        // console.log(res);
      };
      deleteOrder();
      table2Container.removeChild(card);
    }
  } else {
    const table3Container = document.getElementById("orders-3");

    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardInfoContainer = document.createElement("div");
    const nameSpan = document.createElement("span");
    const priceSpan = document.createElement("span");
    const buttonContainer = document.createElement("div");
    const deleteBtn = document.createElement("button");

    card.className = "card card-style inherit-container";
    cardBody.className = "card-body d-flex";
    cardInfoContainer.className = "container d-flex flex-column";
    nameSpan.innerText = `Name: ${name}`;
    priceSpan.innerText = `Price: ${price}`;
    buttonContainer.className =
      "container d-flex justify-content-end align-items-center";
    deleteBtn.className = "btn btn-danger btn-dimensions";
    deleteBtn.innerText = "Delete";

    // Lexicographical addition
    table3Container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardInfoContainer);
    cardInfoContainer.appendChild(nameSpan);
    cardInfoContainer.appendChild(priceSpan);
    cardBody.appendChild(buttonContainer);
    buttonContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteF);
    function deleteF() {
      const deleteOrder = async () => {
        const res = await axios.post("http://localhost:3000/deleteorder", {
          id: id,
        });
        // console.log(res);
      };
      deleteOrder();
      table3Container.removeChild(card);
    }
  }
}

function run() {
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000");
      // console.log(res);
      const rawData = res.data;
      for (let i = 0; i < rawData.length; i++) {
        preload(
          rawData[i].item,
          rawData[i].price,
          rawData[i].tablenumber,
          rawData[i].id
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  getData();
}
run();

function preload(name, price, table, id) {
  if (table == "Table1") {
    const table1Container = document.getElementById("orders-1");

    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardInfoContainer = document.createElement("div");
    const nameSpan = document.createElement("span");
    const priceSpan = document.createElement("span");
    const buttonContainer = document.createElement("div");
    const deleteBtn = document.createElement("button");

    card.className = "card card-style inherit-container";
    cardBody.className = "card-body d-flex";
    cardInfoContainer.className = "container d-flex flex-column";
    nameSpan.innerText = `Name: ${name}`;
    priceSpan.innerText = `Price: ${price}`;
    buttonContainer.className =
      "container d-flex justify-content-end align-items-center";
    deleteBtn.className = "btn btn-danger btn-dimensions";
    deleteBtn.innerText = "Delete";

    // Lexicographical addition
    table1Container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardInfoContainer);
    cardInfoContainer.appendChild(nameSpan);
    cardInfoContainer.appendChild(priceSpan);
    cardBody.appendChild(buttonContainer);
    buttonContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteF);
    function deleteF() {
      const deleteOrder = async () => {
        const res = await axios.post("http://localhost:3000/deleteorder", {
          id: id,
        });
        // console.log(res);
      };
      deleteOrder();
      table1Container.removeChild(card);
    }
  } else if (table == "Table2") {
    const table2Container = document.getElementById("orders-2");

    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardInfoContainer = document.createElement("div");
    const nameSpan = document.createElement("span");
    const priceSpan = document.createElement("span");
    const buttonContainer = document.createElement("div");
    const deleteBtn = document.createElement("button");

    card.className = "card card-style inherit-container";
    cardBody.className = "card-body d-flex";
    cardInfoContainer.className = "container d-flex flex-column";
    nameSpan.innerText = `Name: ${name}`;
    priceSpan.innerText = `Price: ${price}`;
    buttonContainer.className =
      "container d-flex justify-content-end align-items-center";
    deleteBtn.className = "btn btn-danger btn-dimensions";
    deleteBtn.innerText = "Delete";

    // Lexicographical addition
    table2Container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardInfoContainer);
    cardInfoContainer.appendChild(nameSpan);
    cardInfoContainer.appendChild(priceSpan);
    cardBody.appendChild(buttonContainer);
    buttonContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteF);
    function deleteF() {
      const deleteOrder = async () => {
        const res = await axios.post("http://localhost:3000/deleteorder", {
          id: id,
        });
        // console.log(res);
      };
      deleteOrder();
      table2Container.removeChild(card);
    }
  } else if (table == "Table3") {
    const table3Container = document.getElementById("orders-3");

    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardInfoContainer = document.createElement("div");
    const nameSpan = document.createElement("span");
    const priceSpan = document.createElement("span");
    const buttonContainer = document.createElement("div");
    const deleteBtn = document.createElement("button");

    card.className = "card card-style inherit-container";
    cardBody.className = "card-body d-flex";
    cardInfoContainer.className = "container d-flex flex-column";
    nameSpan.innerText = `Name: ${name}`;
    priceSpan.innerText = `Price: ${price}`;
    buttonContainer.className =
      "container d-flex justify-content-end align-items-center";
    deleteBtn.className = "btn btn-danger btn-dimensions";
    deleteBtn.innerText = "Delete";

    // Lexicographical addition
    table3Container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardInfoContainer);
    cardInfoContainer.appendChild(nameSpan);
    cardInfoContainer.appendChild(priceSpan);
    cardBody.appendChild(buttonContainer);
    buttonContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteF);
    function deleteF() {
      const deleteOrder = async () => {
        const res = await axios.post("http://localhost:3000/deleteorder", {
          id: id,
        });
        // console.log(res);
      };
      deleteOrder();
      table3Container.removeChild(card);
    }
  }
}
