import { Client } from "pg";

const dbURL = process.argv[2];

if (!dbURL) {
  console.log("Database URL not provided");
  process.exit(1);
}

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message TEXT NOT NULL,
  username TEXT NOT NULL,
  date TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO messages (message, username, date) VALUES
('Hello there!', 'Obi Wan', DEFAULT),
('General Kenobi. You are a bold one.', 'General Grievous', NOW() - INTERVAL '2 hours'),
('I have a bad feeling about this.', 'Han Solo', NOW() - INTERVAL '1 day'),
('Do or do not. There is no try.', 'Yoda', NOW() - INTERVAL '6 days 7 hours');
`;

const populateDb = async () => {
  console.log("Seeding...");
  const client = new Client({
    connectionString: dbURL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
};

populateDb();
