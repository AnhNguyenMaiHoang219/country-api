import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CountryIntegrationExceptionFilter } from './country/filter/country-integration-filter';
import { CountryNotFoundExceptionFilter } from './country/filter/country-not-found-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Country API')
    .setDescription('RESTful API for exploring countries all over the world')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  app.useGlobalFilters(new CountryNotFoundExceptionFilter());
  app.useGlobalFilters(new CountryIntegrationExceptionFilter());
  await app.listen(8080);
}
bootstrap();
