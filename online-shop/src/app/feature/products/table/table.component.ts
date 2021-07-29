import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsData } from '../model/products.data';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() data: ProductsData[] = [];
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  displayedColumns: string[] = ['id', 'name', 'category', 'price', 'delete'];
  constructor() {}

  deleteProduct(id: number): void {
    this.delete.emit(id);
  }
}
