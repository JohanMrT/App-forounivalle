import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcuentaPage } from './crearcuenta.page';

describe('CrearcuentaPage', () => {
  let component: CrearcuentaPage;
  let fixture: ComponentFixture<CrearcuentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearcuentaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearcuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
