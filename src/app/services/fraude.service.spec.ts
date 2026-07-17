import { TestBed } from '@angular/core/testing';

import { FraudeService } from './fraude.service';

describe('FraudeService', () => {
  let service: FraudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
