import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ColorComponent } from "./color/color.component";
import { DataComponent } from "./data/data.component";
import { ReactiveComponent } from "./reactive/reactive.component";
import { FormbuilderComponent } from "./formbuilder/formbuilder.component";
import { TestObservableComponent } from "./test-observable/test-observable.component";
import { HttpClient } from '@angular/common/http';
import { CreateComponent } from "./create/create.component";
import { DisplayComponent } from "./display/display.component";
import { TokenComponent } from "./token/token.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, CommonModule, ColorComponent, AppComponent, DataComponent, ReactiveFormsModule, ReactiveComponent, FormbuilderComponent, TestObservableComponent, CreateComponent, DisplayComponent, TokenComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

  titletest : string='';
  flag:boolean=false
  
  send() {
    if(this.flag==false)
      this.flag=true
    else
      this.flag=false
  }


  title = 'myapp';
  location='TVM';
  productid='PE3455';
  description='No features available right now';
  available=true;
  instock=this.available;
  qty=900;
  orderqty=0;

  odd_color='orange';
  even_color='white';

  // isorderedQtyAvailable=false;
  deliverColor='red';

  orderDate : Date=new Date;
  isorderedQtyAvailable = this.qty > this.orderqty;

  products=[{"productId":"WEE1243","description":"Notebook","price":"1234567"},
            {"productId":"PEE1743","description":"Laptop","price":"567890"},
            {"productId":"WEO1846","description":"Tablet","price":"103822"},
            {"productId":"WLE1448","description":"Inhaler","price":"543"},
            {"productId":"WPE1347","description":"TextBook","price":"765"}]

  printOrder(inputqty: any):void{
    console.log(inputqty,'order placed');
  }
}
