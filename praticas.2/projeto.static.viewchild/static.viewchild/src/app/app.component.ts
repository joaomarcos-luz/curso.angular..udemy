import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  
  title = 'static.viewchild';

  @ViewChild('meuInput') 
  meuInputEL!: ElementRef<HTMLInputElement>

  constructor() {
    console.log("Constructor")
  }

  ngOnInit() {
    console.log("OnInit")

  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit")

    this.meuInputEL.nativeElement.focus()
  }

}
