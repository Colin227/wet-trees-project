import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({origin: ['*'],credentials: false});
  const config = new DocumentBuilder()
    .setTitle('Trees API')
    .setDescription('API for managing trees, sites, and watering events')
    .setVersion('0.1')
    .addTag('trees')
    .build();
    
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
