import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-largest-objects-click',
  standalone: true,
  imports: [CommonModule], //  for ngIf
  templateUrl: './largest-objects-click.component.html',
  styleUrls: ['./largest-objects-click.component.css']
})
export class LargestObjectsClickComponent {
  selectedObject: string = '';

  showCar() {
    this.selectedObject = 'car';
  }

  showPlane() {
    this.selectedObject = 'plane';
  }

  showShip() {
    this.selectedObject = 'ship';
  }
}
