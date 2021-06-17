import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorChangerService } from '../services/color-changer.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  toolbarColor:string="primary";
  constructor(    private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.toolbarColor = params['color'];
      console.log(this.toolbarColor); 
  });
  
  }
 

}
