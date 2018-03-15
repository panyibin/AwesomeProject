//
//  MyLogger.m
//  AwesomeProject
//
//  Created by panyibin on 2018/3/13.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "MyLogger.h"

@implementation MyLogger

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(showLog:(NSString*)str) {
//  [self log:str];
  NSLog(@"log:%@", str);
}

//RCT_EXPORT_METHOD(getAlias:(NSString*)name alias:(RCTResponseSenderBlock)callback) {
//  callback(@[name,@"def"]);
//}

//RCT_REMAP_METHOD(getAlias1, getAlias:(NSString*)name alias:(RCTResponseSenderBlock)callback) {
//  callback(@[name,@"def"]);
//}

RCT_REMAP_METHOD(getAlias2, getAlias:(NSString*)name) {
  NSLog(@"log:%@", name);
}

RCT_REMAP_METHOD(getAlias1, getAlias:(NSString*)name resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  NSArray *array = @[name, @"xxx", @"yyy"];

  NSLog(@"getAlias1 async");
  if(array) {
    resolve(array);
  } else {
//    reject(@"error when getAlias");
  }
}

- (void)log:(NSString*)str {
  NSLog(@"log:%@", str);
}

@end
