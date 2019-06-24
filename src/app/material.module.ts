import { NgModule } from '@angular/core';

// Material
import {
    MatToolbarModule, MatIconModule, MatBadgeModule, MatButtonModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatButtonModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatButtonModule
    ]
})
export class MaterialModule { }