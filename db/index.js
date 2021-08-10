import knex from "knex";
import * as knexFile from "./knexfile.js";

const db = knex(knexFile.development)
export default db