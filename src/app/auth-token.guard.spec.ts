import { TestBed, async, inject } from '@angular/core/testing';

import { AuthTokenGuard } from './auth-token.guard';

describe('AuthTokenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthTokenGuard]
    });
  });

  it('should ...', inject([AuthTokenGuard], (guard: AuthTokenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
