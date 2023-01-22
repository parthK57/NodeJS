const db = require("../database/db");

exports.postOrderHandler = async (req, res) => {
  const data = req.body;
  const tablenumber = data.tablenumber;
  const item = data.item;
  const price = data.price;

  try {
    await db.execute(
      "INSERT INTO sharpenertech.orders (tablenumber, item, price) VALUES (?,?,?)",
      [tablenumber, item, price],
      (err, results) => {
        const data = results.insertId;
        db.execute(
          "SELECT * FROM sharpenertech.orders WHERE id = ?",
          [data],
          (err, results) => {
            res.status(200).send(results);
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.deleteOrderHandler = async (req, res) => {
  const data = req.body;
  const rawId = data.id;
  const id = parseInt(rawId);

  try {
    await db.execute(
      "DELETE FROM sharpenertech.orders WHERE id = ?",
      [id],
      (err, results) => {
        res.status(200).send(results);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.getOrdersHandler = async (req, res) => {
  await db.execute("SELECT * FROM sharpenertech.orders;", (err, results) => {
    res.status(200).send(results);
  });
};
