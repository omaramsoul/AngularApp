import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{

  formGrp! : FormGroup;

  constructor(private fromBuilder: FormBuilder, 
              private productsService: ProductsService) {}

  ngOnInit() {
    this.formGrp = this.fromBuilder.group({
      'title': this.fromBuilder.control('', [Validators.required]),
      'price': this.fromBuilder.control(0),
      'checked': this.fromBuilder.control(null)
    })
  }

  submitForm() {
    let product = this.formGrp.value;
    console.log(this.formGrp);
    this.productsService.saveProduct(product).subscribe({
      next: response => alert(JSON.stringify(response)),
      error: err => console.log(err)
    })
  }

}
