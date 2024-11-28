import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecontributorComponent } from './profilecontributor.component';

describe('ProfilecontributorComponent', () => {
  let component: ProfilecontributorComponent;
  let fixture: ComponentFixture<ProfilecontributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilecontributorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilecontributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
