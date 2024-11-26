import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorviewComponent } from './administratorview.component';

describe('AdministratorviewComponent', () => {
  let component: AdministratorviewComponent;
  let fixture: ComponentFixture<AdministratorviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministratorviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
