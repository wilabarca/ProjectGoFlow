import { TestBed } from '@angular/core/testing';

import { WebSocketService } from './chatwebsocke.service';

describe('ChatwebsockeService', () => {
  let service: WebSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
