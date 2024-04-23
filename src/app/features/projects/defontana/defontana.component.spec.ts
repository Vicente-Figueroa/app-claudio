import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefontanaComponent } from './defontana.component';

describe('DefontanaComponent', () => {
  let component: DefontanaComponent;
  let fixture: ComponentFixture<DefontanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefontanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefontanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
