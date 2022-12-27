CREATE DATABASE turbotraffic;
CREATE TABLE Products (
    id SERIAL PRIMARY KEY,
    skuId uuid NOT NULL,
    image TEXT NOT NULL,
    title VARCHAR(50) NOT NULL,
    shortDescription VARCHAR(80) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price numeric NOT NULL,
    stock INTEGER NOT NULL
);

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name character varying(50) NOT NULL
);

CREATE TABLE Staff (
    id SERIAL PRIMARY KEY,
    name character varying(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);
CREATE TABLE Review (
    id SERIAL PRIMARY KEY,
    like INTEGER NOT NULL DEFAULT 0,
    dislike INTEGER NOT NULL DEFAULT 0
);
INSERT INTO Products (skuId, image, title, shortDescription, price, stock) VALUES 
('6c3b2810-e2e2-40ab-ab1b-05f1d81b54e8', 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8emFwYXRvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60','Zapatatilla deportiva OKCLYS', 'Zapatilla deportiva color rojo con blanco','Nuestras zapatillas están hechas con materiales de alta calidad y cuentan con una suela de goma antideslizante y duradera, perfecta para cualquier tipo de terreno. Además, el diseño ergonómico y la plantilla acolchada proporcionan un soporte y comodidad excepcionales, lo que las convierte en la elección perfecta para cualquier actividad física.',119.99,6),
('c7b18ad2-d2d2-4746-94b7-29e19b9a7b8e', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80', 'Tennis Nike FREE', 'Tennis nike free deportivo color rojo con blanco', 'Con una suela de goma que proporciona una tracción excepcional y una plantilla acolchada que ofrece un gran soporte y amortiguación, las Nike Free son ideales para correr, caminar o simplemente para el día a día. Además, el tejido transpirable y el diseño sin cordones aseguran que tus pies permanezcan frescos y cómodos durante todo el día.', 599.99, 20),
('53b2c2d6-e42e-4312-81a7-f3924b0d7cc8', 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8emFwYXRvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', 'Zapatilla Nike AIR Fuerza Area', 'Zapatilla Nike AIR edición Fuerza Area color beige', '¡Ven a conocer nuestras impresionantes Nike Air Force 1! Estas zapatillas son el calzado perfecto para cualquier amante del estilo y del deporte, gracias a su diseño icónico y a la tecnología de amortiguación Nike Air.', 899.99, 3),
('a9b6e9ac-efec-4d8f-b2ee-cb2bcf547106', 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8emFwYXRvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', 'Tennis Nike Air Brasilia', 'Zapatilla Nike AIR edición Brazil color naranja','Con su color naranja vibrante y su diseño icónico, las Nike Air Brazil se verán increíbles con cualquier atuendo. Además, están disponibles en una amplia gama de tallas para que encuentres el par perfecto para ti. ¡No esperes más y adquiere ya tus Nike Air Brazil en color naranja!',399.99, 100),
('537ec9c1-c80a-4d01-894f-4b4f69f0d61c','https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8emFwYXRvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', 'Tennis Nike Superrep','Tennis Nike Superrep color Verde', 'Los Nike Superrep son unos zapatos de entrenamiento de alta calidad diseñados para mejorar tu rendimiento y brindarte un mayor confort durante tus sesiones de entrenamiento. Estos tenis cuentan con una suela de goma duradera y una amortiguación reactiva que te permitirá moverte con facilidad y rapidez.', 699.99, 90),
('f9e9daa7-ef87-49d8-be33-76a62c042e47','https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80', 'Zapatilla Nike Air Deluxe','Zapatilla Nike Air Deluxe color negro', 'Las Nike Air Deluxe son unas zapatillas de running de alta calidad que te brindarán una amortiguación y comodidad excepcionales. La parte superior de malla transpirable y el sistema de amortiguación Air Max te permitirán mantener tus pies frescos y cómodos durante todo el día. El color negro es elegante y versátil, y se verá genial con cualquier atuendo de running.', 3999.99, 9);
