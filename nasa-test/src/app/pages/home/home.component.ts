import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { INasaResponse } from 'src/app/shared/models/nasa-response.interface';
import { NasaService } from 'src/app/shared/services/nasa.service';

@Component({
  selector: 'app-nasa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public roversName = [
    { name: 'curiosity'},
    { name: 'opportunity'},
    { name: 'spirit'}
  ]
  public showPhotos: boolean = false;
  public firstTime: boolean = true;
  public selectedRover: string = '';
  public listOfPhotos: any;

  constructor(
    private _nasaService: NasaService
  ) { }

  getRover(roverName: string) {
    this.firstTime = false;
    this.selectedRover = roverName;
    this.showPhotos = false;

    this._nasaService.getRover(roverName)
    .pipe(delay(100))
    .subscribe((response: INasaResponse) => {
      this.showPhotos = true;
      this.listOfPhotos = response.photos;
    })
  }
}
