CREATE DATABASE plant_finder_db;
\c plant_finder_db

DROP TABLE plants;

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

insert into plants (plant_name, common_name, description, class, genus, species, image_url, lat, lng) values ('Acacia cultriformis', ARRAY['knife-leaf wattle', 'dogtooth wattle', 'half-moon wattle', 'golden-glow wattle'], 'Acacia cultriformis, known as the knife-leaf wattle, dogtooth wattle, half-moon wattle or golden-glow wattle, is a perennial tree or shrub of the genus Acacia native to Australia.', 'Magnoliopsida', 'acacia', 'cultriformis', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Acaciacultriformis.jpg', -33.749501, 151.143098);

insert into plants (plant_name, common_name, description, class, genus, species, image_url, lat, lng) values ('acacia', ARRAY['firewheel, Indian blanket, Indian blanketflower, or sundance', 'golden-glow wattle'], 'Gaillardia pulchella (firewheel, Indian blanket, Indian blanketflower, or sundance), is a North American species of short-lived perennial or annual flowering plants in the sunflower family.', 'Magnoliopsida', 'acacia', 'cultriformis', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Acaciacultriformis.jpg', -34.907701, 150.304726);


insert into plants (plant_name, common_name, description, class, genus, species, image_url, lat, lng) values ( 'wattle', ARRAY['grandiflora', 'dazzler', 'yellow blanketflower', 'golden-glow'], 'Gaillardia × grandiflora is a hybrid species of flowering plant in the sunflower family Asteraceae, which is a cross of garden origin between G. aristata × G. pulchella. This herbaceous perennial and its cultivars, known as blanketflowers, are valued for their large ornamental blooms in summer and autumn. Dazzler, with orange flowers tipped with yellow, grows to 1 m (3.3 ft) tall by 50 cm (20 in) broad. It is usually grown as a half-hardy annual, especially in cooler climates. It has won the Royal Horticultural Society Award of Garden Merit. Several other cultivars exist, in the same range of colours (red, orange and yellow).', 'Magnoliopsida', 'acacia', 'cultriformis', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Acaciacultriformis.jpg', -31.940501, 151.261698);

insert into plants (plant_name, common_name, description, class, genus, species, image_url, lat, lng) values ( 'brush', ARRAY['blanketflower', 'red aristata', 'common gaillardia'], 'Gaillardia aristata is a North American species of flowering plant in the sunflower family, known by the common names common blanketflower and common gaillardia. This red perennial wildflower is widespread across much of North America, from Yukon east to Québec and south as far as California, Arizona, Illinois, and Connecticut, although it may be naturalized rather than native in parts of that range. It is also naturalized in scattered locations in Europe, Australia, and South America.', 'Magnoliopsida', 'acacia', 'cultriformis', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Acaciacultriformis.jpg', -31.640501, 150.201698);


insert into plants (plant_name, common_name, description, class, genus, species, image_url, lat, lng) values ( 'brush', ARRAY['ornamental blanket', 'orange blanket', 'blanket flower'], 'Gaillardia (common name blanket flower) is a genus of flowering plants in the sunflower family, Asteraceae, native to North and South America. It was named after Maître Gaillard de Charentonneau, an 18th-century French magistrate who was an enthusiastic botanist. The common name may refer to the resemblance of the inflorescence to the brightly patterned blankets made by Native Americans, or to the ability of wild taxa to blanket the ground with colonies. Many cultivars have been bred for ornamental use.', 'Magnoliopsida', 'acacia', 'cultriformis', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Acaciacultriformis.jpg', -36.640501, 149.201698);