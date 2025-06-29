import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({origin: ['*'],credentials: false});
  const config = new DocumentBuilder()
    .setTitle('Trees API')
    .setDescription('API for managing trees, sites, and watering events')
    .setVersion('0.1')
    .addTag('trees')
    .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'Authorization',
      in: 'header',
    },
    'access-token', // This name will be used in @ApiBearerAuth()
  )
    .build();
    
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
