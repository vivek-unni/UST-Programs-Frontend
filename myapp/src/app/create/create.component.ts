import { Component } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent {

  product: Product = new Product('','','',0,0);
  
  constructor(private productService: ProductService){}

  onSubmit(){
    console.warn(this.product);
    this.productService.saveProduct(this.product).subscribe({
      next:(data)=>{console.log(data);},
      error:(error)=>{console.error(error);},
      complete: () => console.log('Data Stream Completed')
    })
  }
}
