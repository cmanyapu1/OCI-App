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
    const result = await db.query(
          `SELECT email,
                  password
           FROM users
           WHERE email = $1`,
        [email],
    );

    const user = result.rows[0];

    if (user) {
      // compare hashed password to a new hash from password
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid === true) {
        delete user.password;
        return user;
      }
    }

    throw new UnauthorizedError("Invalid username/password");
  }


  static async register(
    { email, password }) {

  const result = await db.query(
        `INSERT INTO users
         (email, 
          password)
         VALUES ($1, $2)
         RETURNING id, email, paassword`,
      [
        email, 
        password],
  );

  const user = result.rows[0];

  return user;
}


}
