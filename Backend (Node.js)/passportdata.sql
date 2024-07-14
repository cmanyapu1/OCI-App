CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  
);

CREATE TABLE passportinfo (
    id INTEGER REFERENCES users ON DELETE CASCADE, /* we want store passport per user -> does this work
*/
    passportnum Integer Primary Key,
    surname Text,
    first_name Text,
    dob date,
    doi date,
    doe date
);


CREATE TABLE miscforminfo (
    id INTEGER
        REFERENCES users ON DELETE CASCADE
);
CREATE TABLE uploadedphoto (
    id INTEGER
        REFERENCES users ON DELETE CASCADE,
    imagename TEXT   
);

