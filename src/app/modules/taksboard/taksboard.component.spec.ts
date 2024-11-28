import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaksboardComponent } from './taksboard.component';

describe('TaksboardComponent', () => {
  let component: TaksboardComponent;
  let fixture: ComponentFixture<TaksboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaksboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaksboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
