# ToDo-App
![alt-text](https://i.ibb.co/6rdn73Y/Screen-Shot-2020-05-25-at-7-17-38-PM.png)

## Requirements
Clone this repository:

```bash
git clone https://github.com/ahirsharan/ToDo-App.git
```

Add the access link to the NoSQL database (eg. [MongoDB atlas](https://account.mongodb.com/account/login)) to the TodoController.js file.

To run this repository, kindly run:
```bash
npm install
nodemon app.js
```
The app would be hosted at http://localhost:3000/todo

## Code-Structure
The repository follows the MVC code structure.

```
.
|  
├── app.js                      # Main script
|
├── controllers           
|   ├── TodoController.js       # Controller script for the app
|
|
├── public/assets                     
|   ├── styles.css              # CSS script for frontend
|   ├── todo-list.js            # Functionality utility for add/remove
|  
├── views           
|   ├── todo.ejs                # View script. 
|
├── node_modules                # Node modules required      
|
├── package.json                # App info     
|   
├── package-lock.json           # Packages info
|
.
```
## Functionality
- To add: Enter the item and click on "Add Item" or press enter.
- To remove: Click on the item which would be initially striked off followed by removal.

## Acknowledgement
- [Node.js Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp) 
