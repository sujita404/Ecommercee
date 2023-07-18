import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsController } from "./products.controller";
import { ProductServices } from "./product.service";
import { ProductSchema } from "./schema/products.schema";

@Module({
    imports:[
        MongooseModule.forFeature([{name:'Products', schema:ProductSchema}])
    ],
    controllers:[ProductsController],
    providers:[ProductServices],

})

export class ProductModule{}