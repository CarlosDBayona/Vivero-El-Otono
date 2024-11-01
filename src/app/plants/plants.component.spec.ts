import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsComponent } from './plants.component';
import {PlantsService} from '../services/plants.service';
import {provideHttpClient} from '@angular/common/http';
import {PlantsModule} from './plants.module';

describe('PlantsComponent', () => {
  let component: PlantsComponent;
  let fixture: ComponentFixture<PlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantsComponent],
      imports: [PlantsModule],
      providers: [provideHttpClient(), PlantsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
