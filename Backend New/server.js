"use strict";

const app = require("./app");
const { PORT } = require("./config");
const authRoutes = require("./routes/auth")

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});

app.use(`/auth`, authRoutes)
app.listen()

/*
{"web":{"client_id":"62506363646-8jso8ifv29tvb9mni4do76oa3m90ljbl.apps.googleusercontent.com","project_id":"oci-app-429515","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["http://localhost:3001"]}} 
*/