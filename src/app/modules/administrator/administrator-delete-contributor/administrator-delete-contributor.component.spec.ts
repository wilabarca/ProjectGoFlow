import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorDeleteContributorComponent } from './administrator-delete-contributor.component';

describe('AdministratorDeleteContributorComponent', () => {
  let component: AdministratorDeleteContributorComponent;
  let fixture: ComponentFixture<AdministratorDeleteContributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministratorDeleteContributorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorDeleteContributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
