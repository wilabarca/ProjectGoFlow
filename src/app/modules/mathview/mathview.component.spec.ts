import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathviewComponent } from './mathview.component';

describe('MathviewComponent', () => {
  let component: MathviewComponent;
  let fixture: ComponentFixture<MathviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
