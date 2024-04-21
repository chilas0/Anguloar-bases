import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Hello world';
  public counter: number = 10;

  public increaseBy(value?: boolean): void {
    if(value){
      this.counter += 1;
    }else{
      this.counter -= 1;
    }
  }

  public resetCounter(): void {
    this.counter = 10;
  }

}
