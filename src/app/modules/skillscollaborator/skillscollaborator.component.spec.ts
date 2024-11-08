import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillscollaboratorComponent } from './skillscollaborator.component';

describe('SkillscollaboratorComponent', () => {
  let component: SkillscollaboratorComponent;
  let fixture: ComponentFixture<SkillscollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillscollaboratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillscollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
