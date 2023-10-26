/*
 * @Author: songjinwei1 songjinwei1@yiche.com
 * @Date: 2023-07-06 11:05:27
 * @LastEditors: songjinwei1 songjinwei1@yiche.com
 * @LastEditTime: 2023-10-26 19:32:50
 * @FilePath: /mock-api/src/app.controller.ts
 * @Description:
 *
 * Copyright (c) 2023 by YICHE, All Rights Reserved.
 */
import { Controller, All, Post, Body, Request } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  fetchDataMethod = (request) => {
    let originalBody, fd;
    try {
      fd = fs.openSync('src/data.json', 'r');
      originalBody = JSON.parse(fs.readFileSync(fd, 'utf-8'));
    } catch (error) {
      console.log(error);
    } finally {
      if (fd !== undefined) fs.closeSync(fd);
    }

    const result = originalBody.apiListData.find(
      (item: any) => item.apiName === request.url,
    );
    return (
      (result && result.apiReturn) || {
        code: 404,
        msg: `接口不存在, 请调用/addInterface接口,录入后重试,格式如下:
        {
          "apiName": "api/userList1", // 接口名字
          "apiReturn": {} // 接口返回内容
      }
    `,
      }
    );
  };

  @Post('/addInterface')
  addInterface(@Body() body): any {
    console.log(
      '🚀 ~ file: app.controller.ts:26 ~ AppController ~ addInterface ~ body:',
      body,
    );
    let fd;
    try {
      //'r' - 以读取模式打开文件
      //'r+' - 以读写模式打开文件
      //'rs' - 使用同步模式打开并读取文件示操作系统忽略本地文件系统缓存
      //'rs+' - 以同步的方式打开，读取 并 写入文件
      //'w' - 以读取模式打开文件，如果文件不存在则创建
      //'wx' - 和 ' w ' 模式一样，如果文件存在则返回失败
      //'w+' - 以读写模式打开文件，如果文件不存在则创建
      //'wx+' - 和 ' w+ ' 模式一样，如果文件存在则返回失败
      //'a' - 以追加模式打开文件，如果文件不存在则创建
      //'ax' - 和 ' a ' 模式一样，如果文件存在则返回失败
      //'a+' - 以读取追加模式打开文件，如果文件不存在则创建
      //'ax+' - 和 ' a+ ' 模式一样，如果文件存在则返回失败
      // mode    用于创建文件时给文件制定权限，默认0666

      fd = fs.openSync('src/data.json', 'r+');
      const originalBody = JSON.parse(fs.readFileSync(fd, 'utf-8'));
      console.log(
        '🚀 ~ file: app.controller.ts:35 ~ AppController ~ addInterface ~ originalBody:',
        originalBody,
      );
      const oldData = originalBody.apiListData;
      if (oldData.find((item) => item.apiName === body.apiName)) {
        return {
          code: -1,
          msg: '接口已存在!!!',
        } as any;
      }
      oldData.push(body);
      const jsonString = JSON.stringify(originalBody);
      fs.writeFileSync('src/data.json', jsonString, 'utf8');
      return {
        code: 0,
        msg: '接口录入成功',
      } as any;
    } catch (error) {
      if (error) {
        return {
          code: -1,
          msg: '接口录入失败,请重试',
        } as any;
      }
    } finally {
      if (fd !== undefined) fs.closeSync(fd);
    }
  }

  @All('/:a')
  getA(@Request() request): string {
    return this.fetchDataMethod(request);
  }
  @All('/:a/:b')
  getAB(@Request() request): string {
    return this.fetchDataMethod(request);
  }
  @All('/:a/:b/:c')
  getABC(@Request() request): string {
    return this.fetchDataMethod(request);
  }
  @All('/:a/:b/:c/:d')
  getABCD(@Request() request): string {
    return this.fetchDataMethod(request);
  }
  @All('/:a/:b/:c/:d/:e')
  getABCDE(@Request() request): string {
    return this.fetchDataMethod(request);
  }
  @All('/:a/:b/:c/:d/:e/:f')
  getABCDEF(@Request() request): string {
    return this.fetchDataMethod(request);
  }
}
