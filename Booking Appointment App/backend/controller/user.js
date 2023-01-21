const db = require("../database/db");

exports.postUserHandler = async (req, res) => {
  try {
    const data = req.body;
    const username = data.username;
    const email = data.email;
    const phonenumber = data.phonenumber;

    await db.execute(
      "INSERT INTO sharpenertech.users (username, email, phonenumber) VALUES (?, ?, ?)",
      [username, email, phonenumber],
      (err, results) => {
        const data = results.insertId;
        db.execute(
          "SELECT * FROM sharpenertech.users WHERE id = ?",
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

exports.patchUserHandler = async (req, res, next) => {
  try {
    const data = req.body;
    const id = data.id;
    const username = data.username;
    const email = data.email;
    const phonenumber = data.phonenumber;

    await db.execute(
      "UPDATE sharpenertech.users SET username = ?, email = ?, phonenumber = ? WHERE id = ?",
      [username, email, phonenumber, id],
      (err, results) => {
        db.execute(
          "SELECT * FROM sharpenertech.users WHERE username = ? AND email = ? AND phonenumber = ?",
          [username, email, phonenumber],
          (err, results) => {
            console.log(results);
            res.status(200).send(results);
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUserHandler = async (req, res, next) => {
  try {
    const id = req.body.id;
    console.log(id);
    // await db.execute(
    //   "DELETE FROM sharpenertech.users WHERE id = ?",
    //   [id],
    //   (err, results) => {
    //     res.status(200);
    //   }
    // );
  } catch (error) {
    console.log(error);
  }
};
