import { Component, Input} from '@angular/core';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.sass'
})
export class HousinglocationComponent {
  @Input() housingLocation!:HousingLocation;
}
