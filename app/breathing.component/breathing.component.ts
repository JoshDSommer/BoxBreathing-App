import { Component, Input, ChangeDetectionStrategy  } from '@angular/core';

export enum Steps {
    Inhale,
    HoldIn,
    Exhale,
    HoldEmpty
}

@Component({
	selector: 'breathing',
	moduleId: module.id,
	template: `
		<StackLayout [ngSwitch]="currentStep" horizontalAlignment="center" >
			<Label class="h1" *ngSwitchCase="steps.Inhale" text="Inhale" textWrap="true"></Label>
			<Label class="h1" *ngSwitchCase="steps.HoldIn" text="Hold your lungs full of air" textWrap="true"></Label>
			<Label class="h1" *ngSwitchCase="steps.Exhale" text="Exhale" textWrap="true"></Label>
			<Label class="h1" *ngSwitchCase="steps.HoldEmpty" text="Hold your lungs empty" textWrap="true"></Label>
		</StackLayout>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class BreathingComponent {
	@Input() currentStep: Steps;
	steps = Steps;
}