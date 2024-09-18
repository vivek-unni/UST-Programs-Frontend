import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [FormsModule, ColorComponent],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent implements OnChanges,OnInit,DoCheck,OnDestroy{

  @Input() title:string=''

  constructor(){
    console.log(' constructor() is called ............... ')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(' ngOnChanges is called .............. ')
    console.log('You Entered: '+ this.title)
  }

  ngOnInit(): void {
    console.log(' ngOnInit() is called ...............')
  }
  
  ngOnDestroy(): void {
    console.log('----------------destroyed')
  }

  ngDoCheck(): void {
    console.log('________________checked________________')
  }
  
  sendMessage(){
    console.log('clicked.........................................')
  }


  selectedColor = '';

  selectedColor2:string='';
  
  onColorChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.name === 'bg-color-form' && target.checked) {
      this.selectedColor2 = target.value;
      document.body.style.backgroundColor = this.selectedColor2;
    }else{
      document.body.style.backgroundColor = '';
    }
  }
  
}