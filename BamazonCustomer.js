var numberFormat = new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format;

// npm install prompt
var prompt = require('prompt');

// npm install mysql
var mysql = require('mysql');

// Connection information.
var connection = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user: "root",
    password: "kungfu123",
    database: "bamazon"
});



// Searches for products by name. The resulting rows are delivered
// as the first argument to the callback method.
var getProducts = function (name, callback) {
    var sql = 'SELECT * FROM `Products` WHERE `ProductName` LIKE ?';

    connection.query(sql, name, function (err, rows, fields) {
        if (err) {
            console.log(JSON.stringify(err));
            process.exit(1);
        }

        if(callback) callback(rows || []);
    });
};

// Updates the given product. Returns the true to indicate
// success, false otherwise.
var updateProduct = function (product, callback) {
    var sql = "update `Products` set `ProductName` = ?, `DepartmentName` = ?, `Price` = ?, `StockQuantity` = ? where `ItemID` = ?";

    connection.query(sql, [product.ProductName, product.DepartmentName, product.Price, product.StockQuantity, product.ItemID], function (err, result) {
        if (err) {
            console.log(JSON.stringify(err));

            process.exit(1);
        }

        if (callback) callback(result.affectedRows == 1);
    });
}

// Wildcard search.
getProducts('%', function (products) {
    console.log('ItemID\tName\tPrice');

    // Print a list of products.
    products.forEach(function (val) {
        console.log(val.ItemID + '\t' + val.ProductName + '\t' + val.Price);
    });

    // Configuration for "prompt". Indicates validation expressions
    // and error messaging.
    var promptSchema = {
      properties: {
        id: {
            description: 'Enter the ItemID of the product you wish to purchase',
            required: true,
            pattern: /^\d+$/,
            message: 'Product IDs are integers.',
        },
        quantity: {
            description: 'How many would you like to purchase?',
            required: true,
            pattern: /^\d+$/,
            message: 'Counting numbers only.',
        }
      }
    };

    // This is a node thing. The standard input stream for the console
    // is paused/suspended by default. Basically, node isn't listening
    // to user input. This tells node to start listening.
    prompt.start();

    prompt.get(promptSchema, function (err, input) {
        if (err) {
            console.log(JSON.stringify(err));
            process.exit(1);
        }

        var product = products.filter(function (val) {
            return val.ItemID == input.id;
        })[0];

        if (!product) {
            console.log('Invalid product!');

            process.exit(1);
        }

        if (!product.StockQuantity || input.quantity > product.StockQuantity) {
            console.log('Insufficient quantity! ' + (product.StockQuantity || 0) + ' ' + product.ProductName + '(s) left in stock.');

            process.exit(1);
        }

        product.StockQuantity -= input.quantity;

        updateProduct(product, function (affectedRows) {
            console.log('Purchase Total: ' + numberFormat(input.quantity * product.Price));

            process.exit();
        });
    });
});
// 	* Once the update goes through, show the customer the total cost of their purchase.
