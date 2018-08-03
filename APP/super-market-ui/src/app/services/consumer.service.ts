import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ConsumerService {
  private url = 'http://localhost:8091';
  private socket;


  constructor() { }

  getLiveData() {
    const observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        const response = JSON.parse(data);
        observer.next(response.data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }

}
