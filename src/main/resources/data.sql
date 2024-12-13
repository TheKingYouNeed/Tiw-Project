-- Insert categories
INSERT INTO categories (name) VALUES 
    ('Électronique'),
    ('Vêtements'),
    ('Alimentation'),
    ('Livres'),
    ('Sports & Loisirs'),
    ('Maison & Jardin'),
    ('Beauté & Santé'),
    ('Jouets')
ON CONFLICT DO NOTHING;

-- Insert sample products
INSERT INTO products (reference, description, price, category_id)
SELECT 'ELEC001', 'Smartphone Samsung Galaxy', 599.99, c.id
FROM categories c
WHERE c.name = 'Électronique'
AND NOT EXISTS (SELECT 1 FROM products WHERE reference = 'ELEC001');

INSERT INTO products (reference, description, price, category_id)
SELECT 'LIVRE001', 'Le Petit Prince', 12.99, c.id
FROM categories c
WHERE c.name = 'Livres'
AND NOT EXISTS (SELECT 1 FROM products WHERE reference = 'LIVRE001');

INSERT INTO products (reference, description, price, category_id)
SELECT 'VET001', 'T-Shirt Coton Bio', 19.99, c.id
FROM categories c
WHERE c.name = 'Vêtements'
AND NOT EXISTS (SELECT 1 FROM products WHERE reference = 'VET001');
