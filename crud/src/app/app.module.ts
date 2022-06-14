import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { EmployeeFormComponent } from './shared/components/employee-form/employee-form.component';
import { EmployeeFormModule } from './shared/components/employee-form/employee-form.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    EmployeeFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
