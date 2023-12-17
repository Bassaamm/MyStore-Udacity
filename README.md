# MyStoreUdacity

### Here is my solution for the project

### TailwindCSS been used for styling

The flow in the app goes like this :

```bash
Pick a quantity from the products page --> product get added to the cart page --> fill the form --> checkout --> Conformation page
```

## routes:

```bash
1- '/': It has all the products
2- '/Product/:id': It has a spcefic selected product
3- '/cart': It shows all the added items to the cart with a form to fill the customer information
4- '/conformation': shows you that the order have been made
5- '**': for unKnown routes which will redirect you to the root route which in this case route 1
```

## Relations

```
Products parent of product
Cart parent of CartItem
Cart parent of Form
```

### Install dependencies

    $ npm i

### Run the app

    $ ng serve OR npm run start
