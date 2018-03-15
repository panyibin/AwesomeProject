//
//  MyLogger.h
//  AwesomeProject
//
//  Created by panyibin on 2018/3/13.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>

@interface MyLogger : NSObject <RCTBridgeModule>

//- (void)log:(NSString*)str;
- (void)showLog:(NSString*)str;

@end
