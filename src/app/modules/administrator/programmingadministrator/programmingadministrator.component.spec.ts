import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingadministratorComponent } from './programmingadministrator.component';

describe('ProgrammingadministratorComponent', () => {
  let component: ProgrammingadministratorComponent;
  let fixture: ComponentFixture<ProgrammingadministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammingadministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingadministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
