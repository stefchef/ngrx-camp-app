import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
})
export class HeaderModule { }
