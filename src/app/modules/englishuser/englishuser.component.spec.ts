import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishuserComponent } from './englishuser.component';

describe('EnglishuserComponent', () => {
  let component: EnglishuserComponent;
  let fixture: ComponentFixture<EnglishuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
