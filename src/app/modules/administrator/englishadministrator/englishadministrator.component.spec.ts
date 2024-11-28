import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishadministratorComponent } from './englishadministrator.component';

describe('EnglishadministratorComponent', () => {
  let component: EnglishadministratorComponent;
  let fixture: ComponentFixture<EnglishadministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishadministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishadministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
