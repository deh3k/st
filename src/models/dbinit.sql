create TABLE person(
    id SERIAL PRIMARY KEY,
    rfId VARCHAR(255) UNIQUE,
    adm INTEGER,
    points INTEGER
);