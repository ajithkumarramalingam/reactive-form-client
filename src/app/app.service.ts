import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  insert(payload: { name: any; email: any; phoneNumber: any; }) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
