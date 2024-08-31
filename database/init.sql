-- Создание таблицы для хранения информации о чаях
CREATE TABLE tea (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    type VARCHAR(100),
    origin_country VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы для хранения информации о времени заваривания
CREATE TABLE brew_time (
    id SERIAL PRIMARY KEY,
    tea_id INT REFERENCES tea(id) ON DELETE CASCADE,
    infusion_number INT NOT NULL,
    optimal_brew_time INT NOT NULL -- Время заваривания в секундах
);

-- Создание таблицы пользователей
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы для хранения избранных чаев пользователей
CREATE TABLE favorite_teas (
    user_id INT REFERENCES "user"(id) ON DELETE CASCADE,
    tea_id INT REFERENCES tea(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, tea_id)
);

-- Создание таблицы для хранения комментариев пользователей к чаям
CREATE TABLE tea_note (
    id SERIAL PRIMARY KEY,
    tea_id INT REFERENCES tea(id) ON DELETE CASCADE,
    user_id INT REFERENCES "user"(id) ON DELETE CASCADE,
    note TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы для хранения истории завариваний
CREATE TABLE brewing_history (
    id SERIAL PRIMARY KEY,
    tea_id INT REFERENCES tea(id) ON DELETE CASCADE,
    user_id INT REFERENCES "user"(id) ON DELETE CASCADE,
    brew_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы для хранения интересных фактов о чае
CREATE TABLE interesting_facts (
    id SERIAL PRIMARY KEY,
    fact TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Вставка некоторых начальных данных (пример)
INSERT INTO tea (name, description, type, origin_country)
VALUES 
('Green Tea', 'A popular tea made from unoxidized leaves.', 'Green', 'China'),
('Black Tea', 'A strong tea made from fully oxidized leaves.', 'Black', 'India');

INSERT INTO interesting_facts (fact)
VALUES 
('Tea is the second most consumed beverage in the world after water.'),
('Green tea contains antioxidants that can improve brain function.');
