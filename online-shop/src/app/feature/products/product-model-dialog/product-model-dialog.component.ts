import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ProductsService } from '../products.service';
import { ProductDetailData } from '../model/product-detail.data';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-model-dialog',
  templateUrl: './product-model-dialog.component.html',
  styleUrls: ['./product-model-dialog.component.scss'],
})
export class ProductModelDialogComponent implements OnInit {
  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    image: new FormControl(),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { id: number; primaryButton: string; admin: boolean },
    private service: ProductsService,
    public dialogRef: MatDialogRef<ProductModelDialogComponent>
  ) {}

  ngOnInit(): void {
    console.log(this.data.id);
    this.service.getProductDetail(this.data.id).subscribe((result) => {
      this.productForm.patchValue(result);
      console.log(result);
      if (!this.data.admin) {
        this.productForm.disable();
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  updateProduct() {
    this.dialogRef.close(this.productForm.value);
  }

  getButtonName() {
    return this.data.primaryButton;
  }
}
