import {Component, OnInit} from '@angular/core';
import {Plant} from '../model/plant.model';
import {PlantsService} from '../services/plants.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.css'
})
export class PlantsComponent implements OnInit {
  plants: Plant[] = [];

  constructor(public plantService: PlantsService) {
  }

  ngOnInit() {
    this.getPlants()
  }

  getPlants(){
    this.plantService.getPlants().subscribe(
      plants => this.plants = plants
    )
  }
}
