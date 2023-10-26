/*
 * @Author: songjinwei1 songjinwei1@yiche.com
 * @Date: 2023-07-06 11:05:27
 * @LastEditors: songjinwei1 songjinwei1@yiche.com
 * @LastEditTime: 2023-10-26 11:48:57
 * @FilePath: /mock-api/src/main.ts
 * @Description:
 *
 * Copyright (c) 2023 by YICHE, All Rights Reserved.
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
