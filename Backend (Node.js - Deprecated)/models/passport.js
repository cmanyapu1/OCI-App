"use strict";

const db = require("../db");
const bcrypt = require("bcrypt");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");

const { BCRYPT_WORK_FACTOR } = require("../config.js");

class Passport {

    static async insert(id,
        {passportnum, surname, first_name, date, dob, doi, doe }) {
    
      const result = await db.query(
            `INSERT INTO passportinfo
             (id,
                passportnum, 
              surname,
              first_name,
              date,
              dob,
              doi,
              doe)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
             RETURNING passportnum, surname, first_name"`,
          [id,
            passportnum, 
            surname,
            first_name,
            date,
            dob,
            doi,
            doe,],
      );
    
      const user = result.rows[0];
    
      return user;
    }

    static async findAll() {
        const result = await db.query(
              `SELECT id,
              passportnum, 
              surname,
              first_name,
              date,
              dob,
              doi,
              doe
               FROM passportinfo
               ORDER BY passportnum`,
        );
      
        return result.rows;
      }

      static async find(passportnum) {
        const result = await db.query(
              `SELECT id,
              passportnum, 
              surname,
              first_name,
              date,
              dob,
              doi,
              doe
               FROM passportinfo
               WHERE passportnum = $1`,
        [passportnum]);
      
        if (!passportnum) throw new NotFoundError(`No company: ${passportnum}`);

        return result.rows;
      }
      static async remove(id) {
        const result = await db.query(
              `DELETE
               FROM passportinfo
               WHERE id = $1
               RETURNING id`,
            [id]);
        const passport = result.rows[0];
    
        if (!passport) throw new NotFoundError(`No passport: ${id}`);
      }
    
}