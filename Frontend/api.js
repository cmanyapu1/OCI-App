

import axios from "axios";

// if(!!process && !!process.env) {
//   let BASE_URL = process.env.REACT_APP_BASE_URL 
// } else {
let BASE_URL =  "http://localhost:3001";
// }


/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class InternalApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${IDApiIDApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getPassport(passportnum) {
    let res = await this.request(`/${passportnum}`);
    return res;
  }
  
  // obviously, you'll add a lot here ...

  static async getPassports() {
    let res = await this.request(`passport`, { passportnum });
    return res;
  }

  static async savePasssport(data) {
    let res = await this.request(`/`, data, "post");
    return res;
  } 

  static async getCurrentUser(username) {
    let res = await this.request(`/${username}`);
    return res.user;
  }

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }



}

//class OCRAPI {}


export default InternalApi;

//upload image - change the state - send to API - receive data