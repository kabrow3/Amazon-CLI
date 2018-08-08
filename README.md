# Amazon-CLI

This is the Amazon-CLI app.

It was completed for the Tenth Homework Assignment for the Coding Boot Camp.

It is an app run entirely from the command line that simulates an Amazon storefront.

It links to a MySQL database called bamazon, to retrieve, display, and update product information. It also uses Inquirer to retrieve input from the user.

The app initially displays a list of all the products available for purchase in the app,then it asks the user which item they would like and how many units of said item they wish to purchase.

If the user requests more units of the item than the app has in stock, it will return a message stating that fact to the console. It will then ask the user whether or not they would like to continue using the app. If the user says no, the app will exit. If the user says yes, the app will prompt the user to choose an item and quantity again. 

If the the user requests an item and number of units of that item that the app has in stock, the app calculates a total price for the purchase, consisting of the price of a single unit of the item multiplied by the number of units requested. After that transaction is complete the app will again prompt the user if they want to continue using the app with the same choices and consequences as mentioned above. 

Now watch the app in action!

https://drive.google.com/file/d/136UxBg07J5K7VhfKDIwSoj0zZFxY7RwZ/view
