import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MaterialModule,
        FlexLayoutModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        MaterialModule,
        FlexLayoutModule,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule {}