
# NodeJs: Build The E-Commerce Web API

Used MongoDb for database creation and management

# Introduction
This repository is related to E-Commerce Web API



# Run

### Install

```
npm install
```

### Start API

```
npm start
```

# Routes

### Products
 ##Products collection having  id,name,description,price,category and product count as attributes

```
POST     /api/v1/products
PUT      /api/v1/products/:id
DELETE   /api/v1/products/:id

```

### Categories 
 ##Categories collection having id and name as attributes

```
POST     /api/v1/categories
PUT      /api/v1/categories/:id
DELETE   /api/v1/categories/:id

```
### Serching

```
GET      /api/v1/products
GET      /api/v1/products/:id
GET      /api/v1/categories
GET      /api/v1/categories/:id

```

###For testing get,push,put and delete methods I used postman application.
