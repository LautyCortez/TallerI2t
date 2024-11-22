import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionServicioComponent } from './modificacion-servicio.component';

describe('ModificacionServicioComponent', () => {
  let component: ModificacionServicioComponent;
  let fixture: ComponentFixture<ModificacionServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificacionServicioComponent]
    });
    fixture = TestBed.createComponent(ModificacionServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
