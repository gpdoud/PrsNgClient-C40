import { Injectable } from '@angular/core';
import { AppInitService } from 'src/app/app-init.service';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: any = "GD";

  constructor(
    private init: AppInitService
  ) { }

  ngOnInit(): void {
    console.log("ngOnInit() in SystemService");
  }
}
