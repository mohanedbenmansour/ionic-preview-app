import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorChangerService } from '../services/color-changer.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  toolbarColor:string="light";
  contentColor:string="light"
  constructor(    private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['color']=="random"){
        this.toolbarColor=this.getRandomColor();
        this.contentColor=this.getRandomColor();
      }else {
           this.toolbarColor = params['color'];
      
      this.contentColor = params['color'];
      }
   
  });
  
  }
 getRandomColor(){

    const myArray = ["primary", "dark", "secondary","tertiary","success","warning","light","medium"];    
    const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
    return randomElement

  
 }

}
