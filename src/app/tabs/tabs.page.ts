import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from '../services/socket.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  custom: {
    primary: '#3880ff',
    secondary: '#3dc2ff',
    tertiary: '#5260ff',
    success: '#2dd36f',
    warning: '#ffc409',
    danger: '#eb445a',
    dark: '#222428',
    medium: '#92949c',
    light: '#f4f5f8'
  }
  constructor(private theme: ThemeService, private activatedRoute: ActivatedRoute, private socketService: SocketService) {
  }



  ngOnInit() {

    this.socketService
      .listen('theme')
      .subscribe(msg => {
        this.updateTheme(msg)
        console.log(msg)
      });

  }
  defaultTheme() {
    this.theme.clearStoredTheme().then((data) => {
      location.reload();

    })
  }
  updateTheme(msg: any) {

    this.theme.setTheme(msg);
  }

}
