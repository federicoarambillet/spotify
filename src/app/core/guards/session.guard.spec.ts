import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { SessionGuard } from './session.guard';

describe('sessionGuard', () => {
  let guard: SessionGuard;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
