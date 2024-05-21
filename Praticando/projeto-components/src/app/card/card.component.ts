import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('planType') planType: string = ''
  @Input({ required: true, alias: 'planPrice' }) planPrice: number = 0

  buttonClick(valueEmiter: boolean) {
    console.log('buttonClick', valueEmiter)
  }
}  
