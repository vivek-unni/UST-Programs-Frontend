import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spa';
  a:number=30
  b:number=20
  constructor(private router:Router){}
  
  changeRoute(path:string){
    this.router.navigate([path]);
  }
}
