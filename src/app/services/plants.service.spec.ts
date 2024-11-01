import { TestBed } from '@angular/core/testing';

import { PlantsService } from './plants.service';
import {provideHttpClient} from '@angular/common/http';

describe('PlantsService', () => {
  let service: PlantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[provideHttpClient()]
    });
    service = TestBed.inject(PlantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
