//
//  SeedManager.m
//  AwesomeProject
//
//  Created by panyibin on 2018/3/15.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "SeedManager.h"

@implementation SeedManager
{
  NSMutableString *str;
}

- (instancetype)init {
  self = [super init];
  if (self) {
    str = [NSMutableString stringWithString:@"seed"];
    
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(didReceiveEventNotification:) name:kSendEventNotification object:nil];
  }
  
  return self;
}

RCT_EXPORT_MODULE()

RCT_REMAP_METHOD(getSeed,resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject) {
  static NSInteger a = 0;
  [str appendFormat:@" seed%ld", a++];
//  NSArray *events = @[str];
  resolve(str);
}

RCT_REMAP_METHOD(createWallet,createWallet:(NSString*)seed resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject) {
//  static NSInteger a = 1;
//  NSString *str = [NSString stringWithFormat:@"seed%ld", a++];
//  NSArray *events = @[str];
//  resolve(str);
  if(seed && [seed isEqualToString:@"google"]) {
    resolve(@(YES));
  } else {
    resolve(@(NO));
  }
}

- (NSArray<NSString *> *)supportedEvents {
  return @[kSWHappyEvent];
}


- (void)didReceiveEventNotification:(NSNotification*)notification {
  [self sendEventWithName:kSWHappyEvent body:@{@"school":@"bupt"}];
}
//- (void)sendMessage {
//  [self sendEventWithName:kSWHappyEvent body:@{@"school":@"bupt"}];
//}

@end
