CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE `Products` (
  `ItemID` INT NOT NULL AUTO_INCREMENT,
  `ProductName` VARCHAR(45) NULL,
  `DepartmentName` VARCHAR(45) NULL,
  `Price` DECIMAL(10,2) NULL,
  `StockQuantity` INT NULL,
  PRIMARY KEY (`ItemID`)
);

INSERT INTO `products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Paper Towels','Paper Goods', '3.50', '100');
INSERT INTO `products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Toilet Paper','Paper Goods', '2.50', '50');
INSERT INTO `products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Playstation 4','Electronics', '400.00', '30');
INSERT INTO `products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('XboxOne','Electronics', '350.00', '200');
INSERT INTO `products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Cat litter','Pet Supplies', '5.50', '75');
INSERT INTO `products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Dog Collar','Pet Supplies', '6.35', '110');
INSERT INTO `products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('GI Joe','Toys', '10.99', '73');
INSERT INTO `products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Barbie','Toys', '7.99', '35');
INSERT INTO `products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Tylenol PM','Pharmaceuticals', '4.50', '80');
INSERT INTO `products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('NyQuil','Pharmaceuticals', '8.99', '20');
INSERT INTO `products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Bluebell Ice Cream','Frozen Goods', '5.99', '55');
INSERT INTO `products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Eggos','Frozen Goods', '2.99', '230');

SELECT * FROM products;
