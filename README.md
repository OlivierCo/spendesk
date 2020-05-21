# SpenDesk: Backend Test

Before doing anything, I would like to mention that I didn't complete the whole thing due to lack of time. So I haven't implemented the transfer protocol with the master wallet or the load unload money into a card last but not least I haven't done any tests either but I would have used mocha, chai, chai-http and sinon to name a few.

Note:

*With more time I would have completed the whole test obviously plus "dockerizing" it properly. I think linking those microservices with an event bus system such as rabbitMQ or zeroMQ would be interesting as well and probably use Redis for caching data and faster process.*

Gateway is an API gateway behind a GraphQL layer I thought that would be a good fit for this kind of project as it comes with playground which plays multiple roles (documentation and a interface for testing APIs)

---
## MongoDB

In order to make this working properly you must have mongodb installed locally.

Useful links:
* https://zellwk.com/blog/install-mongodb/
* https://zellwk.com/blog/local-mongodb/

Once you have installed correctly your mongodb on you machine run the following command:

```shell
mongod --dbpath /System/Volumes/Data/data/db
```

## Dependencies

Simply run `yarn` at the root of the project, it should install all the required dependencies accross packages.

## Run the "Thing"

Now, you have install all the dependencies and mongodb, you can launch the beast.

Again be sure you are at the root of the project and simply run this command.

```
yarn start
```

Once you have launched all the services you can go to [localhost:4000/graphql](htt[://localhost:4000/graphql]). There you can explore available APIs.

1. once you have graphql up and running you should create your first user by using the mutation `createUser`
2. once your first user is created you can create a wallet `createWallet` needs the `user_id` and a currency <'EUR', 'USD', 'GPB'>
3. now you can create your card `createCard` needs a `wallet_id` and a currency <'EUR', 'USD', 'GPB'>

---

## Microservices

### Card

Available services:

* createCard - create a card
* blockCard - block a card
* getCardById - return a card by it's card_id

### User

Available services:

* getUsers - return a list of users
* getUserById - return a user by it's user_id
* createUser - create a user

### Wallet

Available services:

* createWallet - create a wallet
* getWallets - return a list of wallets

### Gateway

All of the above.

---