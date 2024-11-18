import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHospedajesComponent } from './lista-hospedajes.component';

describe('ListaHospedajesComponent', () => {
  let component: ListaHospedajesComponent;
  let fixture: ComponentFixture<ListaHospedajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaHospedajesComponent]
    });
    fixture = TestBed.createComponent(ListaHospedajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
