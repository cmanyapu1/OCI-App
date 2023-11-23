CREATE TABLE users (
    id SERIAL PRIMARY KEY
    email TEXT NOT NULL,
    password TEXT NOT NULL
  
)

CREATE TABLE passportinfo (
    id INTEGER
    REFERENCES users ON DELETE CASCADE
    passportnum Integer Primary Key,
    surname Text,
    first_name Text,
    dob date,
    doi date,
    doe date

)

CREATE TABLE miscforminfo (
    id INTEGER
        REFERENCES users ON DELETE CASCADE

)
CREATE TABLE imagecompression (
    id INTEGER
        REFERENCES users ON DELETE CASCADE
    imagename TEXT   
)

