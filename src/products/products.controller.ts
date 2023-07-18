
import { Controller, Get, Query } from "@nestjs/common";
import { Products } from "./schema/products.schema";
import { Query as ExpressQuery } from 'express-serve-static-core';
import { ProductServices } from "./product.service";


@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductServices) { }

    @Get()
    async getAllProducts(@Query() query: ExpressQuery): Promise<Products[]> {
        return this.productsService.findAll(query);
    }
}