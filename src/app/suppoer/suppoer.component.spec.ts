import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppoerComponent } from './suppoer.component';

describe('SuppoerComponent', () => {
  let component: SuppoerComponent;
  let fixture: ComponentFixture<SuppoerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppoerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuppoerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
