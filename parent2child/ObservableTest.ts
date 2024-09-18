import { Observable } from "rxjs";

@exports class Test{

    invoke(){
        let observable: Observable<Object> = this.createObservable();
    }
    createObservable():Observable<Object>{
        return new Observable((obs) => {
            setTimeout(()=>{
                console.log(obs.next('Hello'));
            },1000);
            setTimeout(()=>{
                console.log(obs.next('Welcome'));
            },2000);
            setTimeout(()=>{
                console.log(obs.next('Asynchronous'));
            },3000);
            setTimeout(()=>{
                console.log(obs.next('Communication'));
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