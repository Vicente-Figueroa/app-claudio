import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CymasuiteComponent } from './cymasuite.component';

describe('CymasuiteComponent', () => {
  let component: CymasuiteComponent;
  let fixture: ComponentFixture<CymasuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CymasuiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CymasuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
