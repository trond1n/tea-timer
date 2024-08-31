CREATE TABLE tea (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

CREATE TABLE brew_time (
  id SERIAL PRIMARY KEY,
  tea_id INT REFERENCES tea(id),
  optimal_brew_time INT,
  infusion_number INT,
  infusion_time INT
);

CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE tea_rating (
  id SERIAL PRIMARY KEY,
  tea_id INT REFERENCES tea(id),
  user_id INT REFERENCES "user"(id),
  rating INT
);

CREATE TABLE tea_note (
  id SERIAL PRIMARY KEY,
  tea_id INT REFERENCES tea(id),
  user_id INT REFERENCES "user"(id),
  note TEXT
);

CREATE TABLE brewing_history (
  id SERIAL PRIMARY KEY,
  tea_id INT REFERENCES tea(id),
  user_id INT REFERENCES "user"(id),
  brew_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE interesting_facts (
  id SERIAL PRIMARY KEY,
  fact TEXT
);

CREATE TABLE favorite_teas (
  user_id INT REFERENCES "user"(id),
  tea_id INT REFERENCES tea(id),
  PRIMARY KEY (user_id, tea_id)
);
