import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products:Product[]=[]

  constructor() {
    this.products[0]=new Product("s1021","Tata","Harrier",10,25050);
    this.products[1]=new Product("s10313","Nothing","Nothing Phone 2",210,25100);
    this.products[2]=new Product("s1041","Samsung","Galaxy S22",140,25200);
    this.products[3]=new Product("s1051","Onida","TV",120,25030);    
    this.products[4]=new Product("s1061","Micromax","Mobile Phone",110,24500);
    this.products[5]=new Product("s101","Amazon","AWS",102,25030);
    this.products[6]=new Product("s18121","Google","Pixel",130,25500);
    this.products[7]=new Product("s111","Lenovo","Legion",130,25060);
    this.products[8]=new Product("s10211","Dell","Laptop",103,25200);
    this.products[9]=new Product("s10241","HP","Pavilion",140,25070);
    this.products[10] = new Product("s1031", "Bose", "Bose Earbuds", 15, 4995);
    this.products[11] = new Product("s1032", "Tata", "Tata Sky", 12, 2600);
    this.products[12] = new Product("s1033", "Tata", "Tata Router", 10, 3500);
    this.products[13] = new Product("s1034", "Tata", "Tata Laptop", 5, 45000);
    this.products[14] = new Product("s1035", "Samsung", "Samsung Galaxy", 20, 50000);
    this.products[15] = new Product("s1036", "Samsung", "Samsung Refrigerator", 8, 60000);
    this.products[16] = new Product("s1037", "Samsung", "Samsung Washing Machine", 7, 35000);
    this.products[17]=new Product("s10251","Nothing","Nothing Phone 2a",10,25500);

  }
  
  getProducts():Product[]{
    return this.products; 
  }


}

