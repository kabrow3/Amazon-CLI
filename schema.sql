DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);


SELECT * FROM bamazon;

INSERT INTO bamazon (product_name, department_name, price, stock_quantity)
VALUES ("Monkey Wrench", "Tools & Home Improvement", 5.99, 90), ("Danger Club Volume 1", "Books", 9.99, 2), 
("NES Classic Edition", "Video Games", 59.99, 40), ("Leviathan Wakes: The Expanse Book 1", "Books", 10.00, 5), 
("Fresh Step Kitty Litter", "Pet Supplies", 9.99, 30), ("Jurassic World Blu-Ray", "Movies & TV", 9.99, 40),
("A Game of Thrones: A Song fo Ice and Fire Book 1", "Books", 10.49, 40), ("Deadpool 2 Blu-Ray", "Movies & TV", 22.96, 100),
("Expo Dry Erase Markers Assortment", "Office Supplies", 5.60, 12), ("Purell Multi-Surface Disinfectant Spray", "Industrial & Scientific", 12.99, 53);
