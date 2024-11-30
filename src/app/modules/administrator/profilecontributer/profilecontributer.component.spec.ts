import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecontributerComponent } from './profilecontributer.component';

describe('ProfilecontributerComponent', () => {
  let component: ProfilecontributerComponent;
  let fixture: ComponentFixture<ProfilecontributerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilecontributerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilecontributerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
