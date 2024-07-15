CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  
);

CREATE TABLE passportinfo (
    id INTEGER REFERENCES users ON DELETE CASCADE, /* we want store passport per user -> does this work*/
    passportnum Integer,
    surname Text,
    first_name Text,
    dob date,
    doi date,
    doe date,
    compressedImage TEXT REFERENCES uploadedImages ON DELETE CASCADE
);

CREATE TABLE uploadedImages (
    id INTEGER
        REFERENCES users ON DELETE CASCADE,
    originalImage TEXT   
    compressedImage
);

