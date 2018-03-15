//
//  TestViewController.m
//  AwesomeProject
//
//  Created by panyibin on 2018/3/15.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "TestViewController.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "SeedManager.h"

@interface TestViewController ()

@property (nonatomic, strong) RCTRootView *rctView;

@end

@implementation TestViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
  
  NSURL *jsCodeLocation;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  
  self.rctView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"ReactTestView" initialProperties:nil launchOptions:nil];
  
  [self.view addSubview:self.rctView];
  
  self.rctView.frame = CGRectMake(20, 100, 200, 200);
}

- (IBAction)clickButton:(id)sender {
  static NSInteger age = 19;
  self.rctView.appProperties = @{@"username":@"Beckham", @"age":[NSString stringWithFormat:@"%ld", age++]};
}

- (IBAction)clickSendNotification:(id)sender {
  [[NSNotificationCenter defaultCenter] postNotificationName:kSendEventNotification object:nil];
}

@end
