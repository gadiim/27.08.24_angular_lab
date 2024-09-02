import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LargestObjectsClickComponent } from './largest-objects-click/largest-objects-click.component';
import { LargestObjectNgmodelComponent } from './largest-object-ngmodel/largest-object-ngmodel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LargestObjectsClickComponent, LargestObjectNgmodelComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '27.08.24_ngModel';
}
