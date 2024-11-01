import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListPlantsComponent} from './list-plants.component';
import {By} from '@angular/platform-browser';

describe('ListPlantsComponent', () => {
  let component: ListPlantsComponent;
  let fixture: ComponentFixture<ListPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPlantsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListPlantsComponent);
    component = fixture.componentInstance;
    component.plants = [
      {
        id: 1,
        nombre_comun: 'Ficus',
        tipo: 'Interior',
        clima: 'Tropical',
        sustrato_siembra: '',
        altura_maxima: 120,
        nombre_cientifico: ''
      },
      {
        id: 2,
        nombre_comun: 'Rosa',
        tipo: 'Exterior',
        clima: 'Templado',
        sustrato_siembra: '',
        altura_maxima: 120,
        nombre_cientifico: ''
      },
      {
        id: 3,
        nombre_comun: 'Cactus',
        tipo: 'Interior',
        clima: 'Desértico',
        sustrato_siembra: '',
        altura_maxima: 120,
        nombre_cientifico: ''
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Verifies that the table renders and it has the correct number of rows and header', () => {
    // Verify if there is a table in the DOM
    const tableElement = fixture.debugElement.query(By.css('table'));
    expect(tableElement).toBeTruthy();

    // Verifies that there should be the expected number of headers
    const headerCells = tableElement.queryAll(By.css('thead th'));
    expect(headerCells.length).toBe(4);

    // Verifies that there is 3 number of Rows
    const rows = tableElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);

    // Verifies that the values matches the content in the td
    rows.forEach((row, index) => {
      const cells = row.queryAll(By.css('td'));
      expect(cells[0].nativeElement.textContent).toContain(component.plants[index].nombre_comun);
      expect(cells[1].nativeElement.textContent).toContain(component.plants[index].tipo);
      expect(cells[2].nativeElement.textContent).toContain(component.plants[index].clima);
    });
  });
});
