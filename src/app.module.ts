import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { config } from 'process';
import { ProductModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
      
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    ProductModule
  ],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
