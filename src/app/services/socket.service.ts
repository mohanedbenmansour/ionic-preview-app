import { Injectable } from '@angular/core';
import {io,Socket} from "socket.io-client"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket:Socket;
   url:string="https://socket-server-preview.herokuapp.com/"
  constructor() {
    this.socket=io(this.url);
  }

  listen(eventname:any){
    return new Observable(observer => {
      this.socket.on(eventname, msg => {
        observer.next(msg);
      });
    });
  }

}
