"use strict";

/** Routes for jobs. */

const jsonschema = require("jsonschema");

const express = require("express");
const { BadRequestError } = require("../expressError");
const Passport = require("../models/passport");
//const jobNewSchema = require("../schemas/jobNew.json");
//const jobUpdateSchema = require("../schemas/jobUpdate.json");
//const jobSearchSchema = require("../schemas/jobSearch.json");

const router = express.Router({ mergeParams: true });




router.post("/", async function (req, res, next) {
  try {
    
    const passport = await Passport.insert(req.body);
    return res.status(201).json({ passport });
  } catch (err) {
    return next(err);
  }
});

/** GET / =>
 *   { jobs: [ { id, title, salary, equity, companyHandle, companyName }, ...] }
 *
 * Can provide search filter in query:
 * - minSalary
 * - hasEquity (true returns only jobs with equity > 0, other values ignored)
 * - title (will find case-insensitive, partial matches)

 * Authorization required: none
 */

router.get("/", async function (req, res, next) {
  const q = req.query;
  // arrive as strings from querystring, but we want as int/bool

  try {

    const passport = await Passport.findAll(q);
    return res.json({ passport });
  } catch (err) {
    return next(err);
  }
});


router.get("/:id", async function (req, res, next) {
    const q = req.query;
    // arrive as strings from querystring, but we want as int/bool
  
    try {
  
      const passport = await Passport.find(q);
      return res.json({ passport });
    } catch (err) {
      return next(err);
    }
  });

/** DELETE /[handle]  =>  { deleted: id }
 *
 * Authorization required: admin
 */

router.delete("/:passportnum", async function (req, res, next) {
  try {
    await passport.remove(req.params.passportnum);
    return res.json({ deleted: +req.params.passportnum });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;