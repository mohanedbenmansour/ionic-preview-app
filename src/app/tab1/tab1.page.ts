import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from '../services/socket.service';
import { ThemeService } from '../services/theme.service';


let theme:any;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  custom:{
    primary: '#3880ff',
    secondary: '#0cd1e8',
    tertiary: '#7044ff',
    success: '#10dc60',
    warning: '#ffce00',
    danger: '#f04141',
    dark: '#222428',
    medium: '#989aa2',
    light: '#f4f5f8'
  }
  constructor(private theme: ThemeService,private activatedRoute: ActivatedRoute,private socketService:SocketService ) {
  }

  
  
  ngOnInit() {
   
  this.socketService
  .listen('theme')
  .subscribe(msg => {
    this.updateTheme(msg)
  });

}
updateTheme(msg:any){

  this.theme.setTheme(msg);
}
}