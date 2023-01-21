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
        console.log(data);
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
