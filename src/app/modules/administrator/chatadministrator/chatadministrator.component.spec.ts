import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatadministratorComponent } from './chatadministrator.component';

describe('ChatadministratorComponent', () => {
  let component: ChatadministratorComponent;
  let fixture: ComponentFixture<ChatadministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatadministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatadministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
