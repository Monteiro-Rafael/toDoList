import { Injectable } from '@angular/core';

const TODOS = [

]

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  get() {
    return new Promise(resolve => resolve(TODOS));
  }
}
