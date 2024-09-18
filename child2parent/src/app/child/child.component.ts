import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  childItem: string | undefined;
  @Output()
  childEvent = new EventEmitter<string>();

  addChildItem(){
    this.childEvent.emit(this.childItem);
    this.childItem='';
  }
}
