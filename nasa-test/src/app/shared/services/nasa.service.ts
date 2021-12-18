import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INasaResponse } from '../models/nasa-response.interface';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  /**
   * This function returns photos of a rover, receiving the name of the rover by parameter
   * @param roverName :string
   * @returns Objetct: INasaResponse
   */
  getRover(roverName: string): Observable<INasaResponse> {
    return this.http.get<INasaResponse>(`${environment.roverApi}${roverName}/photos?sol=1&api_key=${this.apiKey}`)
  }
}
