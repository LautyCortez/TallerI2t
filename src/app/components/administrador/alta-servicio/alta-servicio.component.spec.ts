import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaServicioComponent } from './alta-servicio.component';

describe('AltaServicioComponent', () => {
  let component: AltaServicioComponent;
  let fixture: ComponentFixture<AltaServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaServicioComponent]
    });
    fixture = TestBed.createComponent(AltaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
