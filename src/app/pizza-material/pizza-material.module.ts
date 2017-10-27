import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatChipsModule,
  MatTableModule,
  MatSnackBarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatTableModule,
    MatSnackBarModule,
  ]
})
export class PizzaMaterialModule { }
