import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeConfigComponent } from './theme-config.component';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
    imports: [CommonModule, FormsModule, ColorPickerModule],
    declarations: [ThemeConfigComponent],
    exports: [ThemeConfigComponent]
})
export class ThemeConfigModule {}
