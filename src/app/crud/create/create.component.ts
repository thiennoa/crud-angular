// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-create',
//   imports: [],
//   templateUrl: './create.component.html',
//   styleUrl: './create.component.css'
// })
// export class CreateComponent {

// }

import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  productForm!: FormGroup; //// Sử dụng dấu chấm hỏi để cho TypeScript biết thuộc tính sẽ được khởi tạo

  ngOnInit() {
      this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],    
    })
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CrudService
  ){ }
  submitForm() {
    this.crudService.create(this.productForm.value).subscribe(res => {
      console.log('Product created!');
      this.router.navigateByUrl('/crud/home/');

  });
}
}