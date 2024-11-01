import {Component, Input} from '@angular/core';
import {Plant} from '../../model/plant.model';

@Component({
  selector: 'app-list-plants',
  templateUrl: './list-plants.component.html',
  styleUrl: './list-plants.component.css'
})
export class ListPlantsComponent {
  @Input() plants: Plant[] = [];

  constructor() {

  }

  getNumberByType(type: string) {
    return this.plants.filter(plant => plant.tipo === type).length
  }
}
