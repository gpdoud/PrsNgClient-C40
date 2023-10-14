import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  config: any;

  constructor(
    private http: HttpClient
  ) { }

  getSettings(): void {
    this.http.get("./assets/config.json").subscribe(
      (cfg) => {
        this.config = cfg;
        console.debug("assets/config.json", this.config);
      }
    )
  }
}
