import { Component, Input} from '@angular/core';

function handlePlanType(value: string) {
  console.log('handlePlanType', value)
  return value.toUpperCase()
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({ required: true, alias: 'planPrice' }) planPrice: number = 0
  @Input({ alias:'planType', transform: (value: string) => handlePlanType(value) }) planType: string = ''
   
  buttonClick(valueEmiter: boolean) {
    console.log('buttonClick', valueEmiter)
    console.log('planType', this.planType)
  }
}  
