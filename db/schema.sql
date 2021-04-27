CREATE DATABASE plant_finder_db;
\c plant_finder_db

CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    email TEXT, 
    password_digest TEXT
);

CREATE TABLE plants (
    id SERIAL PRIMARY KEY,
    plant_name TEXT,
    common_name TEXT[],
    description TEXT,
    class TEXT,
    genus TEXT,
    species TEXT,
    image_url TEXT,
    lat numeric,
    lng numeric
);

insert into plants (plant_name, common_name, description, class, genus, species, image_url, lat, lng) values ( 'Acacia cultriformis', ARRAY['knife-leaf wattle', 'dogtooth wattle', 'half-moon wattle', 'golden-glow wattle'], 'Acacia cultriformis, known as the knife-leaf wattle, dogtooth wattle, half-moon wattle or golden-glow wattle, is a perennial tree or shrub of the genus Acacia native to Australia.', 'Magnoliopsida', 'acacia', 'cultriformis', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Acaciacultriformis.jpg', -33.749501, 151.143098);

insert into plants (plant_name, common_name, description, class, genus, species, image_url, lat, lng) values ( 'acacia', ARRAY['knife-leaf wattle', 'dogtooth wattle', 'half-moon wattle', 'golden-glow wattle'], 'Acacia cultriformis, known as the knife-leaf wattle, dogtooth wattle, half-moon wattle or golden-glow wattle, is a perennial tree or shrub of the genus Acacia native to Australia.', 'Magnoliopsida', 'acacia', 'cultriformis', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Acaciacultriformis.jpg', -34.907701, 150.304726);


insert into plants (plant_name, common_name, description, class, genus, species, image_url, lat, lng) values ( 'wattle', ARRAY['knife-leaf wattle', 'dogtooth wattle', 'half-moon wattle', 'golden-glow wattle'], 'Acacia cultriformis, known as the knife-leaf wattle, dogtooth wattle, half-moon wattle or golden-glow wattle, is a perennial tree or shrub of the genus Acacia native to Australia.', 'Magnoliopsida', 'acacia', 'cultriformis', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Acaciacultriformis.jpg', -31.940501, 151.261698);

insert into plants (plant_name, common_name, description, class, genus, species, image_url, lat, lng) values ( 'brush', ARRAY['knife-leaf wattle', 'dogtooth wattle', 'half-moon wattle', 'golden-glow wattle'], 'Acacia cultriformis, known as the knife-leaf wattle, dogtooth wattle, half-moon wattle or golden-glow wattle, is a perennial tree or shrub of the genus Acacia native to Australia.', 'Magnoliopsida', 'acacia', 'cultriformis', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Acaciacultriformis.jpg', -31.640501, 150.201698);


insert into plants (plant_name, common_name, description, class, genus, species, image_url, lat, lng) values ( 'brush', ARRAY['knife-leaf wattle', 'dogtooth wattle', 'half-moon wattle', 'golden-glow wattle'], 'Acacia cultriformis, known as the knife-leaf wattle, dogtooth wattle, half-moon wattle or golden-glow wattle, is a perennial tree or shrub of the genus Acacia native to Australia.', 'Magnoliopsida', 'acacia', 'cultriformis', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Acaciacultriformis.jpg', -36.640501, 149.201698);