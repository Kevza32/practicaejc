import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeInteresComponent } from './de-interes.component';

describe('DeInteresComponent', () => {
  let component: DeInteresComponent;
  let fixture: ComponentFixture<DeInteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeInteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
