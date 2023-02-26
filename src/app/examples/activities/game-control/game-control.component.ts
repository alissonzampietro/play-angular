import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  template: `
    <div class="container">
      <p>game-control works!</p>

      <div class="row">
          {{incrementingNumber}}
      </div>

      <div>
          <button class="btn btn-success" type="button" (click)="onStartGame()" [disabled]="intervalReference">Start</button>
          <button class="btn btn-danger" type="button" [disabled]="!intervalReference" (click)="onStopGame()">Stop</button>
      </div>
    </div>
  `
})
export class GameControlComponent {

  @Output() intervalEmitter = new EventEmitter<number>();
  intervalReference: any|null = null;
  incrementingNumber:number = 0;

  onStopGame() {
    clearInterval(this.intervalReference);
    this.intervalReference = null;
    this.incrementingNumber = 0;
  }

  onStartGame() {
    this.intervalReference = setInterval(() => {
      this.incrementingNumber++;
      this.intervalEmitter.emit(this.incrementingNumber);
    }, 1000)
  }

}
