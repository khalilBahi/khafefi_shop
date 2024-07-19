import { Client } from "./Client.Entity";
import { Product } from "./Porduct.Entity";

export class Command{
    constructor(
        public id?:number,
        public client?:Client,
        public product?:Product
    ){}
}