import localforage from "localforage"
import { cartTableName, productTableName, userTableName } from "./local_db_table_name"

const databaseName = "food-ecommerce"
export const productDB = localforage.createInstance({
    name: databaseName,
    storeName: productTableName,
    driver: localforage.INDEXEDDB,
    version: 1.0,
    description: "Store product data",
})

export const userDB = localforage.createInstance({
    name: databaseName,
    storeName: userTableName,
    driver: localforage.INDEXEDDB,
    version: 1.0,
    description: "Store user data",
})

export const cartDB = localforage.createInstance({
    name: databaseName,
    storeName: cartTableName,
    driver: localforage.INDEXEDDB,
    version: 1.0,
    description: "Store cart data",
})