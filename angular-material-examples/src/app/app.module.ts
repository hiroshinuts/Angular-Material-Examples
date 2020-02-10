import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { rootRouterConfig } from './app.router';
import { MaterialCheckboxExampleComponent } from './angular/material-checkbox-example/material-checkbox-example.component';
import { MaterialModule } from './modules/material/material.module';
import { AngularExamplesComponent } from './angular/features/angular-examples.component';
import { HtmlCssExamplesComponent } from './htmlcss/html-css-examples/html-css-examples.component';
import { BorderComponent } from './htmlcss/features/border/border.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    AngularExamplesComponent,
    MaterialCheckboxExampleComponent,
    HtmlCssExamplesComponent,
    BorderComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
