import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatTableModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatPaginatorModule
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }