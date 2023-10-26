/*
 * @Author: songjinwei1 songjinwei1@yiche.com
 * @Date: 2023-07-06 11:05:27
 * @LastEditors: songjinwei1 songjinwei1@yiche.com
 * @LastEditTime: 2023-10-13 18:01:52
 * @FilePath: /mock-api/src/app.service.ts
 * @Description:
 *
 * Copyright (c) 2023 by YICHE, All Rights Reserved.
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      message: '请求成功',
      errCode: 0,
      res: {
        name: 'Invalid',
        age: 18,
        sex: '男',
        address: {
          province: '广东省',
          city: '深圳市',
          district: '南山区',
          street: '西湖区',
          zipcode: '200000',
        },
      },
    } as any;
  }

  getListData(): any {
    return {
      code: 0,
      msg: null,
      result: {
        total: 3,
        list: [
          {
            id: 1721061,
            supplierId: '23', //非必须		供应商id
            supplierName: 'A类供应商456', //非必须		供应商名称
            unitPrice: '33.53', //非必须		线索单价
            unitPriceStr: '33.53', //非必须		线索单价中文
            taxRate: '15.36', //非必须		税点
            taxRateStr: '15.36%', //非必须		税点中文
            type: '0', //非必须		政策类型
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
          },
          {
            id: 17210761,
            supplierId: '23', //非必须		供应商id
            supplierName: 'A类供应商456', //非必须		供应商名称
            unitPrice: '33.53', //非必须		线索单价
            unitPriceStr: '33.53', //非必须		线索单价中文
            taxRate: '15.36', //非必须		税点
            taxRateStr: '15.36%', //非必须		税点中文
            type: '0', //非必须		政策类型
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
          },
          {
            id: 17216061,
            supplierId: '23', //非必须		供应商id
            supplierName: 'A类供应商456', //非必须		供应商名称
            unitPrice: '33.53', //非必须		线索单价
            unitPriceStr: '33.53', //非必须		线索单价中文
            taxRate: '15.36', //非必须		税点
            taxRateStr: '15.36%', //非必须		税点中文
            type: '0', //非必须		政策类型
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
          },
        ],
        pageNum: 1,
        pageSize: 20,
        size: 20,
        startRow: 1,
        endRow: 20,
        pages: 2577,
        prePage: 0,
        nextPage: 2,
        isFirstPage: true,
        isLastPage: false,
        hasPreviousPage: false,
        hasNextPage: true,
        navigatePages: 8,
        navigatepageNums: [1, 2, 3, 4, 5, 6, 7, 8],
        navigateFirstPage: 1,
        navigateLastPage: 8,
      },
    } as any;
  }

  getHistoryPolicyData(): any {
    return {
      code: 0,
      msg: null,
      result: {
        total: 20,
        list: [
          {
            id: '1', //非必须		id
            supplierId: '12', //非必须		供应商id
            supplierName: 'A类供应商123', //非必须		供应商名称
            unitPrice: '12', //非必须		线索单价
            unitPriceStr: '12', //非必须		线索单价中文
            taxRate: '11', //非必须		税点
            taxRateStr: '11%', //非必须		税点中文
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            status: '1', //非必须		执行状态
            statusStr: '当前执行', //非必须		执行状态
          },
          {
            id: '14', //非必须		id
            supplierId: '12', //非必须		供应商id
            supplierName: 'A类供应商123', //非必须		供应商名称
            unitPrice: '12', //非必须		线索单价
            unitPriceStr: '12', //非必须		线索单价中文
            taxRate: '11', //非必须		税点
            taxRateStr: '11%', //非必须		税点中文
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            status: '2', //非必须		执行状态
            statusStr: '已过期', //非必须		执行状态
          },
          {
            id: '15', //非必须		id
            supplierId: '12', //非必须		供应商id
            supplierName: 'A类供应商123', //非必须		供应商名称
            unitPrice: '12', //非必须		线索单价
            unitPriceStr: '999.99', //非必须		线索单价中文
            taxRate: '11', //非必须		税点
            taxRateStr: '11%', //非必须		税点中文
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            status: '3', //非必须		执行状态
            statusStr: '待执行', //非必须		执行状态
          },
          {
            id: '15', //非必须		id
            supplierId: '12', //非必须		供应商id
            supplierName: 'A类供应商123', //非必须		供应商名称
            unitPrice: '12', //非必须		线索单价
            unitPriceStr: '999.99', //非必须		线索单价中文
            taxRate: '11', //非必须		税点
            taxRateStr: '11%', //非必须		税点中文
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            status: '3', //非必须		执行状态
            statusStr: '待执行', //非必须		执行状态
          },
          {
            id: '15', //非必须		id
            supplierId: '12', //非必须		供应商id
            supplierName: 'A类供应商123', //非必须		供应商名称
            unitPrice: '12', //非必须		线索单价
            unitPriceStr: '999.99', //非必须		线索单价中文
            taxRate: '11', //非必须		税点
            taxRateStr: '11%', //非必须		税点中文
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            status: '3', //非必须		执行状态
            statusStr: '待执行', //非必须		执行状态
          },
          {
            id: '15', //非必须		id
            supplierId: '12', //非必须		供应商id
            supplierName: 'A类供应商123', //非必须		供应商名称
            unitPrice: '12', //非必须		线索单价
            unitPriceStr: '999.99', //非必须		线索单价中文
            taxRate: '11', //非必须		税点
            taxRateStr: '11%', //非必须		税点中文
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            status: '3', //非必须		执行状态
            statusStr: '待执行', //非必须		执行状态
          },
          {
            id: '15', //非必须		id
            supplierId: '12', //非必须		供应商id
            supplierName: 'A类供应商123', //非必须		供应商名称
            unitPrice: '12', //非必须		线索单价
            unitPriceStr: '999.99', //非必须		线索单价中文
            taxRate: '11', //非必须		税点
            taxRateStr: '11%', //非必须		税点中文
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            status: '3', //非必须		执行状态
            statusStr: '待执行', //非必须		执行状态
          },
          {
            id: '15', //非必须		id
            supplierId: '12', //非必须		供应商id
            supplierName: 'A类供应商123', //非必须		供应商名称
            unitPrice: '12', //非必须		线索单价
            unitPriceStr: '999.99', //非必须		线索单价中文
            taxRate: '11', //非必须		税点
            taxRateStr: '11%', //非必须		税点中文
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            status: '3', //非必须		执行状态
            statusStr: '待执行', //非必须		执行状态
          },
          {
            id: '15', //非必须		id
            supplierId: '12', //非必须		供应商id
            supplierName: 'A类供应商123', //非必须		供应商名称
            unitPrice: '12', //非必须		线索单价
            unitPriceStr: '999.99', //非必须		线索单价中文
            taxRate: '11', //非必须		税点
            taxRateStr: '11%', //非必须		税点中文
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            status: '3', //非必须		执行状态
            statusStr: '待执行', //非必须		执行状态
          },
          {
            id: '15', //非必须		id
            supplierId: '12', //非必须		供应商id
            supplierName: 'A类供应商123', //非必须		供应商名称
            unitPrice: '12', //非必须		线索单价
            unitPriceStr: '999.99', //非必须		线索单价中文
            taxRate: '11', //非必须		税点
            taxRateStr: '11%', //非必须		税点中文
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            status: '3', //非必须		执行状态
            statusStr: '待执行', //非必须		执行状态
          },
          {
            id: '15', //非必须		id
            supplierId: '12', //非必须		供应商id
            supplierName: 'A类供应商123', //非必须		供应商名称
            unitPrice: '12', //非必须		线索单价
            unitPriceStr: '999.99', //非必须		线索单价中文
            taxRate: '11', //非必须		税点
            taxRateStr: '11%', //非必须		税点中文
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            status: '3', //非必须		执行状态
            statusStr: '待执行', //非必须		执行状态
          },
          {
            id: '15', //非必须		id
            supplierId: '12', //非必须		供应商id
            supplierName: 'A类供应商123', //非必须		供应商名称
            unitPrice: '12', //非必须		线索单价
            unitPriceStr: '999.99', //非必须		线索单价中文
            taxRate: '11', //非必须		税点
            taxRateStr: '11%', //非必须		税点中文
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            status: '3', //非必须		执行状态
            statusStr: '待执行', //非必须		执行状态
          },
          {
            id: '15', //非必须		id
            supplierId: '12', //非必须		供应商id
            supplierName: 'A类供应商123', //非必须		供应商名称
            unitPrice: '12', //非必须		线索单价
            unitPriceStr: '999.99', //非必须		线索单价中文
            taxRate: '11', //非必须		税点
            taxRateStr: '11%', //非必须		税点中文
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            status: '3', //非必须		执行状态
            statusStr: '待执行', //非必须		执行状态
          },
          {
            id: '15', //非必须		id
            supplierId: '12', //非必须		供应商id
            supplierName: 'A类供应商123', //非必须		供应商名称
            unitPrice: '12', //非必须		线索单价
            unitPriceStr: '999.99', //非必须		线索单价中文
            taxRate: '11', //非必须		税点
            taxRateStr: '11%', //非必须		税点中文
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            status: '3', //非必须		执行状态
            statusStr: '待执行', //非必须		执行状态
          },
        ],
      },
    } as any;
  }

  getDeliveryPolicyData(): any {
    return {
      code: 0,
      msg: null,
      result: {
        total: 20,
        list: [
          {
            id: 1721600,
            media: '4',
            type: '',
            status: '0',
            policyValue: '25%',
            policyValueStr: '',
            effectTime: '2023-01-01~2023-09-20',
            beginDate: '2023-01-01',
            endDate: '2023-09-20',
            createTime: '2023-08-12 19:20:56',
            updateTime: '2023-08-22 19:20:56',
            mediaStr: '头条',
            statusStr: '无政策',
            agentName: '',
            agentId: '',
            businessType: '',
            businessTypeStr: '',
            mediaAccountId: '',
            originalGrantAmount: '',
            notAdjustAmount: '',
            adjustedAmount: '',
            grantCostDate: '',
            grantAdjustDate: '',
          },
          {
            id: 1721966,
            media: '4',
            type: '',
            status: '3',
            policyValue: '25%',
            policyValueStr: '',
            effectTime: '2023-01-01~2023-09-20',
            beginDate: '',
            endDate: '',
            createTime: '2023-08-12 19:20:56',
            updateTime: '2023-08-22 19:20:56',
            mediaStr: '头条',
            statusStr: '未生效',
            agentName: '',
            agentId: '',
            businessType: '',
            businessTypeStr: '',
            mediaAccountId: '',
            originalGrantAmount: '',
            notAdjustAmount: '',
            adjustedAmount: '',
            grantCostDate: '',
            grantAdjustDate: '',
          },
          {
            id: 178666,
            media: '',
            type: '',
            status: '2',
            policyValue: '25%',
            policyValueStr: '',
            effectTime: '2023-01-01~2023-09-20',
            beginDate: '',
            endDate: '',
            createTime: '2023-08-12 19:20:56',
            updateTime: '2023-08-22 19:20:56',
            mediaStr: '头条',
            statusStr: '白单期',
            agentName: '',
            agentId: '',
            businessType: '',
            businessTypeStr: '',
            mediaAccountId: '',
            originalGrantAmount: '',
            notAdjustAmount: '',
            adjustedAmount: '',
            grantCostDate: '',
            grantAdjustDate: '',
          },
          {
            id: 1700566,
            media: '2',
            type: '',
            status: '1',
            policyValue: '35%',
            policyValueStr: '',
            effectTime: '2023-05-01~2023-09-20',
            beginDate: '',
            endDate: '',
            createTime: '2023-05-12 19:20:56',
            updateTime: '2023-06-22 19:20:56',
            mediaStr: '百度原生',
            statusStr: '正常',
            agentName: '',
            agentId: '',
            businessType: '',
            businessTypeStr: '',
            mediaAccountId: '',
            originalGrantAmount: '',
            notAdjustAmount: '',
            adjustedAmount: '',
            grantCostDate: '',
            grantAdjustDate: '',
          },
        ],
      },
    } as any;
  }
  getPolicyAdvertByAgent(): any {
    return {
      code: 0,
      msg: null,
      result: {
        total: 20,
        list: [
          {
            policyValue: '25', //非必须		政策值
            policyValueStr: '25%', //非必须
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            settleType: '', //非必须		结算方式
            settleTypeStr: '', //非必须
            status: '1', //非必须		执行状态
            statusStr: '当前执行', //非必须		执行状态
          },
          {
            policyValue: '95', //非必须		政策值
            policyValueStr: '95%', //非必须
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            settleType: '', //非必须		结算方式
            settleTypeStr: '', //非必须
            status: '2', //非必须		执行状态
            statusStr: '已过期', //非必须		执行状态
          },
          {
            policyValue: '85', //非必须		政策值
            policyValueStr: '85%', //非必须
            effectTime: '2023-05-01~2023-09-20', //非必须		生效时间
            beginDate: '2023-05-01', //非必须		开始时间
            endDate: '2023-09-01', //非必须		结束时间
            createTime: '2023-08-22 19:20:56', //非必须		创建时间
            updateTime: '2023-08-22 19:20:56', //非必须		更新时间
            settleType: '', //非必须		结算方式
            settleTypeStr: '', //非必须
            status: '3', //非必须		执行状态
            statusStr: '待执行', //非必须		执行状态
          },
        ],
      },
    } as any;
  }
  addDeliveryPolicyData(): any {
    return {
      code: 0,
      msg: null,
      result: {},
    } as any;
  }
  updateDeliveryPolicyData(): any {
    return {
      code: 0,
      msg: '更新成功',
      result: {},
    } as any;
  }
  deleteDeliveryPolicyData(): any {
    return {
      code: 0,
      msg: null,
      result: {},
    } as any;
  }

  getNoPolicyMedia(): any {
    return {
      code: 0,
      msg: null,
      result: [
        {
          mediaName: '头条',
          media: 'tt',
        },
        {
          mediaName: '百度',
          media: 'bd',
        },
        {
          mediaName: '快手',
          media: 'ks',
        },
      ],
    } as any;
  }
}
