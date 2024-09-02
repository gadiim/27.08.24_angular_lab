import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-largest-object-ngmodel',
  standalone: true, // Ensure this is standalone
  imports: [FormsModule, CommonModule], // Add CommonModule for ngIf
  templateUrl: './largest-object-ngmodel.component.html',
  styleUrls: ['./largest-object-ngmodel.component.css']
})
export class LargestObjectNgmodelComponent {
  selectedObject: string = '';
}
