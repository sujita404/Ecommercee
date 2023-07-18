import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Query } from "express-serve-static-core";

import * as mongoose from "mongoose";
import { Products } from "./schema/products.schema";

@Injectable()

export class ProductServices {
    constructor(
        @InjectModel(Products.name)
        private productsModel: mongoose.Model<Products>
    ) { }

    async findAll(query: Query): Promise<Products[]> {
        const products = await this.productsModel.find()
        return products;

    }
}