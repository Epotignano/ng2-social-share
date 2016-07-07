/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CeiboShare } from './share.directive';

describe('Share Directive', () => {
  it('should create an instance', () => {
    let directive = new CeiboShare();
    expect(directive).toBeTruthy();
  });
});
