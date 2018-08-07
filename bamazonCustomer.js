var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",  
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  displayItems();
});
  

function displayItems() {
    connection.query("SELECT * FROM products", function(err, res) {
        if(err) throw err;
        console.log("\n------------------------------------");
        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + " || Name: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: " + res[i].price);
        }
        console.log("\n------------------------------------");
        purchasePrompt();
    });
};

function purchasePrompt() {
    inquirer.prompt([
    {
      name: "ID",
      type: "input",
      message: "What is the ID of the product you would like to buy?",
      validate: function(value){
        if(isNaN(value) == false){return true;}
        else{return false;}
      }
    },
    {
      name: "QTY",
      type: "input",
      message: "How many units of the product would you like to buy?",
      validate: function(value){
        if(isNaN(value) == false){return true;}
        else{return false;}
      }
    }])
    .then(function(answer) {
      connection.query("SELECT * FROM products WHERE item_id = ?", [answer.ID], function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity < answer.QTY) {
                console.log("Insufficient quantity of item: " + res[i].product_name + "!");
                rePrompt();
            } else {
                console.log("Our stock is sufficient for your purchase request!");
                // console.log(res[i].item_id);
                // console.log(res[i].product_name);
                // console.log(res[i].department_name);
                console.log(res[i].price);
                // console.log(res[i].stock_quantity);
                var newQTY = res[i].stock_quantity - answer.QTY;
                var itemID = parseInt(answer.ID);
                var newCost = res[i].price * answer.QTY;
                console.log(newQTY);
                console.log(itemID);
                console.log(newCost);
                connection.query("UPDATE products SET ? WHERE ?",
                    [
                    {
                        stock_quantity: newQTY
                    },
                    {
                        item_id: itemID
                    }
                    ],
                    function(err, res) {
                        if (err) throw err;
                        console.log("The total cost for your purchase is " + newCost.toFixed(2));
                        rePrompt();
                    }
                );
            }
        }
      })
    })
}

function rePrompt() {
    inquirer.prompt({
        name: "Boolean",
        type: "confirm",
        message: "Would you like to purchase something else?"
    }).then(function(answer) {
        if(answer.reply === true) {
            purchasePrompt();
        } else {
            console.log("Okay, please come again!");
            connection.end();
        }
    })
}