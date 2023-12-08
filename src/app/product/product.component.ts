import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  myData: any;
  products:any;

  // @Output() addToCart = new EventEmitter<any>();
  
 constructor(private formBuilder: FormBuilder, private  services:ProductserviceService){

 }
  productsFrom!:FormGroup;

  ngOnInit(): void {
    
    this.productsFrom = this.formBuilder.group({
       productTitle: [null,Validators.required],
       productPrice: [null,Validators.required],
       offerPrice: [null,Validators.required],
       productDescription: [null,Validators.required],
       productImage: [null,Validators.required]
    })
   
  }

  submitData() {
    if (this.productsFrom.valid) {
      if (this.myData) {
        this.services.addProduct(this.productsFrom.value).subscribe({
          next : (val : any)=>{
            
          }
        })
      }
    }else{
      alert('input fill invalid ')
    }
  }

  // products = [
  //   {id: 1, title: 'books', offerprice: 15},
  //   {id: 2, title: 'tshirt', offerprice: 99},
  // ];

}
