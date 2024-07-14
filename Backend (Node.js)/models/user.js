"use strict";

const db = require("../db");
const bcrypt = require("bcrypt");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");

const { BCRYPT_WORK_FACTOR } = require("../config.js");

class User {

  static async authenticate(email, password) {
    // try to find the user first
    console.log('inside authenticate')
    const result = await db.query(
          `SELECT username,
                  email,
                  password
           FROM users
           WHERE email = $2`,
        [email],
    );

    const user = result.rows[0];
    console.log(user)  
    if (user) {
      // compare hashed password to a new hash from password
      // const isValid = await bcrypt.compare(password, user.password);
      const isValid = password === user.password;
      if (isValid === true) {
        delete user.password;
        return user;
      }
    }

    throw new UnauthorizedError("Invalid username/password");
  }


  static async register(
    { username, email, password }) {

  const result = await db.query(
        `INSERT INTO users
         (username, email, 
          password)
         VALUES ($1, $2, $3)
         RETURNING id, username, email, password`,
      [username,
        email, 
        password],
  );

  const user = result.rows[0];

  return user;
}

static async get(username) {

const result = await db.query(
      `SELECT * FROM users
       where username = $1
       `,
    [username],
);

const user = result.rows[0];

return user;
}

}

module.exports = User;
