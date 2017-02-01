/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanActivateAddPostService } from './can-activate-add-post.service';

describe('CanActivateAddPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateAddPostService]
    });
  });

  it('should ...', inject([CanActivateAddPostService], (service: CanActivateAddPostService) => {
    expect(service).toBeTruthy();
  }));
});
