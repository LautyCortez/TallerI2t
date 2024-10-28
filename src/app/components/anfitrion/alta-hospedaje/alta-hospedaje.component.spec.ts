import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaHospedajeComponent } from './alta-hospedaje.component';

describe('AltaHospedajeComponent', () => {
  let component: AltaHospedajeComponent;
  let fixture: ComponentFixture<AltaHospedajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaHospedajeComponent]
    });
    fixture = TestBed.createComponent(AltaHospedajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
