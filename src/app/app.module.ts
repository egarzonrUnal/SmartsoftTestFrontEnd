import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { DataComponent } from './components/data/data.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { PopupModule } from '@progress/kendo-angular-popup';
import { EditService } from './core/services/edit.service';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    DataComponent
  ],
  imports: [
    HttpClientModule,
        HttpClientJsonpModule,
        ReactiveFormsModule,
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    DropDownsModule,
    GridModule,
    PopupModule
  ],
  providers: [
    {
      deps: [HttpClient],
      provide: EditService,
      useFactory: (jsonp: HttpClient) => () => new EditService(jsonp)
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
