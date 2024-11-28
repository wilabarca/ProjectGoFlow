import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorheaderComponent } from './collaboratorheader.component';

describe('CollaboratorheaderComponent', () => {
  let component: CollaboratorheaderComponent;
  let fixture: ComponentFixture<CollaboratorheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaboratorheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaboratorheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
