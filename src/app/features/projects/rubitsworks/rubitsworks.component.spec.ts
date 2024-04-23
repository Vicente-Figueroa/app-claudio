import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubitsworksComponent } from './rubitsworks.component';

describe('RubitsworksComponent', () => {
  let component: RubitsworksComponent;
  let fixture: ComponentFixture<RubitsworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RubitsworksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RubitsworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
