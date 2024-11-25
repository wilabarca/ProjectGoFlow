import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsIAComponent } from './chats-ia.component';

describe('ChatsIAComponent', () => {
  let component: ChatsIAComponent;
  let fixture: ComponentFixture<ChatsIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatsIAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
