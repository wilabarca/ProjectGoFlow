import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramminguserComponent } from './programminguser.component';

describe('ProgramminguserComponent', () => {
  let component: ProgramminguserComponent;
  let fixture: ComponentFixture<ProgramminguserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramminguserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramminguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
