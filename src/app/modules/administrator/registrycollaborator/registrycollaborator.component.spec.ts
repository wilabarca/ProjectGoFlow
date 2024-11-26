import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrycollaboratorComponent } from './registrycollaborator.component';

describe('RegistrycollaboratorComponent', () => {
  let component: RegistrycollaboratorComponent;
  let fixture: ComponentFixture<RegistrycollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrycollaboratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrycollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
