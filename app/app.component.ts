import { Component } from "@angular/core";
import { Observable } from 'rxjs/Rx';

import { Steps } from './breathing.component/breathing.component';

@Component({
    selector: "ns-app",
    template: `
        <StackLayout *ngIf="breathing" verticalAlignment="center" >
            <breathing [currentStep]="step$ | async"></breathing>
            <Button class="btn btn-primary btn-rounded-lg" text="Stop" (tap)="breathing = false"></Button>
        </StackLayout>
        <StackLayout *ngIf="!breathing" verticalAlignment="center" horizontalAlignment="center" >
            <Label  class="h1" text="NativeScript Box Breathing"></Label>
            <Button class="btn btn-primary btn-rounded-lg" text="Start" (tap)="breathing = true"></Button>
        </StackLayout>
    `
})
export class AppComponent {
    breathing = false;
    step$: Observable<Steps>;

    ngOnInit() {
        this.step$ = Observable.interval(4000)
            .startWith(Steps.Inhale)
            .scan((currentStep) => {
               return (currentStep == Steps.HoldEmpty) ? Steps.Inhale : currentStep + 1;
            });
    }
}
