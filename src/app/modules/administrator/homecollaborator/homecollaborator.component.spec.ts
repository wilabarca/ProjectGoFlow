import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecollaboratorComponent } from './homecollaborator.component';

describe('HomecollaboratorComponent', () => {
  let component: HomecollaboratorComponent;
  let fixture: ComponentFixture<HomecollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomecollaboratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
