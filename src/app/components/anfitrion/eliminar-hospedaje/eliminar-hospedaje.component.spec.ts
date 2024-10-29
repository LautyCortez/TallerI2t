import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarHospedajeComponent } from './eliminar-hospedaje.component';

describe('EliminarHospedajeComponent', () => {
  let component: EliminarHospedajeComponent;
  let fixture: ComponentFixture<EliminarHospedajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarHospedajeComponent]
    });
    fixture = TestBed.createComponent(EliminarHospedajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
