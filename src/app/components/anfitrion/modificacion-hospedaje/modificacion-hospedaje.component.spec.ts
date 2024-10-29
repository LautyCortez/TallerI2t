import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionHospedajeComponent } from './modificacion-hospedaje.component';

describe('ModificacionHospedajeComponent', () => {
  let component: ModificacionHospedajeComponent;
  let fixture: ComponentFixture<ModificacionHospedajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificacionHospedajeComponent]
    });
    fixture = TestBed.createComponent(ModificacionHospedajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
