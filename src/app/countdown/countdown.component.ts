import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { interval } from 'rxjs';

@Component({
    selector: 'app-countdown',
    templateUrl: './countdown.component.html'
})

export class Countdowncomponent implements OnInit {
    @Input()
    time: number;

    @Output()
    tick: EventEmitter<number> = new EventEmitter<number>();

    timer: any;

    ngOnInit() {
        this.timer = interval(this.time*100);
        this.timer.subscribe(e => this.countdown());
    }

    countdown() {
        console.log(this.time);
        this.tick.emit(this.time);
        if (this.time == 0) this.timer.unsubscribe();
        this.time--;
    }
}