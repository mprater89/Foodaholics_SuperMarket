import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ConsumerService {
  private url = 'http://localhost:8091';
  private socket;

  constructor() { }

  /*
  sendMessage(message) {
    this.socket.emit('add-message', message);
    console.log("MESSAGE SENT");
  }
  */

  getLiveData() {
    const observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('webevents.dev', (data) => {

        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }

}
