import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryMethodComponent } from './comision/create/factory-method';

describe('FactoryMethodComponent', () => {
  let component: FactoryMethodComponent;
  let fixture: ComponentFixture<FactoryMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
