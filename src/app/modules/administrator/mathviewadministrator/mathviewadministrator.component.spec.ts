import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathviewadministratorComponent } from './mathviewadministrator.component';

describe('MathviewadministratorComponent', () => {
  let component: MathviewadministratorComponent;
  let fixture: ComponentFixture<MathviewadministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathviewadministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathviewadministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
