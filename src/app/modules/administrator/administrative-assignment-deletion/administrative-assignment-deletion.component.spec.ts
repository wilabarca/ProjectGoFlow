import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeAssignmentDeletionComponent } from './administrative-assignment-deletion.component';

describe('AdministrativeAssignmentDeletionComponent', () => {
  let component: AdministrativeAssignmentDeletionComponent;
  let fixture: ComponentFixture<AdministrativeAssignmentDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeAssignmentDeletionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrativeAssignmentDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
