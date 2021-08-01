import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableContainerComponent } from './feature/products/table-container/table-container.component';
import { TableComponent } from './feature/products/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './feature/users/login/login.component';
import { UserFormComponent } from './feature/users/user-form/user-form.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BackendService } from './backend/backend.service';
import { ProductsService } from './feature/products/products.service';
import { UsersService } from './feature/users/users.service';
import { HeaderComponent } from './feature/header/header.component';
import { ProductModelDialogComponent } from './feature/products/product-model-dialog/product-model-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    TableContainerComponent,
    TableComponent,
    LoginComponent,
    UserFormComponent,
    HeaderComponent,
    ProductModelDialogComponent,
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    FlexModule,
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
    BackendService,
    ProductsService,
    UsersService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
