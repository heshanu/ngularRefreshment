import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FraudeService } from './fraude.service';

describe('FraudeService', () => {
  let service: FraudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FraudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
