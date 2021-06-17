import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ColorChangerService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }
  changeColor() : Observable<string>{
    return this.httpClient.get<any>('http://localhost:3000/color')
      .pipe(
        tap(_ => console.log(`color fetched`))
      );
  }
}
