import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // option de connexion
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      database: 'nestjs-market',
      username: 'SA',
      password: 'Some4Complex#Password',
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },

      // option de synchronisation
      synchronize: true,
      logging: true,

      entities: [ProductEntity],
    }),
    TypeOrmModule.forFeature([ProductEntity]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
