import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  standalone: true,
  imports: [],
  templateUrl: './test-observable.component.html',
  styleUrl: './test-observable.component.css'
})
export class TestObservableComponent {

  
  invoke(){
    let observable: Observable<Object> = this.createObservable();
    this.subscribeToObservable(observable);
}
createObservable():Observable<Object>{
    return new Observable((obs) => {
        setTimeout(()=>{
            obs.next('Hello');
        },1000);
        setTimeout(()=>{
            obs.next('Welcome');
        },2000);
        setTimeout(()=>{
            obs.next('Asynchronous');
        },3000);
        setTimeout(()=>{
            obs.next('Communication');
        },4000);
        
        // obs.next("1 2 3 ....");
        // obs.next("4 5 6 ....");
        // obs.next("Hello");
    })
}

subscribeToObservable(observable: Observable<Object>){
    observable.subscribe((data)=>{
        console.log(data);
    });

}
}
