const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR (200)
);

INSERT INTO users (name) 
VALUES ('jimmy'),
('test');

CREATE TABLE IF NOT EXISTS pins (
    pin_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    longitude DECIMAL(9, 6),
    latitude DECIMAL(9, 6),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO pins (longitude, latitude, user_id)
VALUES 
    (45,45,1),
    (45,46,2)
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: `postgresql://${process.env.PSQL_ROLE_NAME}:${process.env.PSQL_ROLE_PASSWORD}@localhost:5432/pin_maps`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();