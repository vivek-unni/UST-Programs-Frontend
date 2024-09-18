import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-token',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './token.component.html',
  styleUrl: './token.component.css'
})
export class TokenComponent {

  username:string=''
  password:string=''

  constructor(private tokenService: TokenService){}

  token:string='';

  message:string=''

  generateToken(username:string, password:string){
    this.tokenService.tokenGenerate(username,password).subscribe({
      next: (data) => {
        this.token = data.jwt; 
        console.log(this.token); 
        this.authorize(this.token)
      },
      error: (error) => {
        console.error(error); 
      },
      complete: () => console.log('Data Stream Completed') 
    });
  }

  authorize(token:string){
    this.tokenService.greet(token).subscribe({
      next: (data) => {
        console.log(data);
        this.message=data; 
      },
      error: (error) => {
        console.error(error); 
      },
      complete: () => console.log('Data Stream Completed') 
    });
  }
}
