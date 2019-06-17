import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatTabsModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule
  ],
  exports: [MatToolbarModule, MatTabsModule, MatButtonModule],
  providers: [],
})
export class MaterialModule { }
