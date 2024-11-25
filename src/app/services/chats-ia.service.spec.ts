import { TestBed } from '@angular/core/testing';

import { ChatsIAService } from './chats-ia.service';

describe('ChatsIAService', () => {
  let service: ChatsIAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatsIAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
