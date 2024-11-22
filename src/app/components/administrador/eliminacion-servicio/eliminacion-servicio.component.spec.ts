import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminacionServicioComponent } from './eliminacion-servicio.component';

describe('EliminacionServicioComponent', () => {
  let component: EliminacionServicioComponent;
  let fixture: ComponentFixture<EliminacionServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminacionServicioComponent]
    });
    fixture = TestBed.createComponent(EliminacionServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
