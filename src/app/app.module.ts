import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewsComponent } from './welcome/news/news.component';
import { StatisticsComponent } from './welcome/statistics/statistics.component';
import { ChartsModule } from 'ng2-charts';

//Зарегистрируем русский, для возможности отображения дат и прочего.
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu);

import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';
import { LoginComponent } from './login/login.component';
import { ClaimsComponent } from './claims/claims.component';
import { ConversationComponent } from './conversation/conversation.component';
import { SelectComponent } from './select/select.component';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsType: "three-strings"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    NewsComponent,
    StatisticsComponent,
    LoginComponent,
    ClaimsComponent,
    ConversationComponent,
    SelectComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    ChartsModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig), 

    ToastrModule.forRoot({  
      positionClass:'toast-bottom-right',  
      closeButton: true,
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
