import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRouting } from './app.router';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GlobalService } from './global/global.service';
import { AuthServiceService } from './auth-service/auth-service.service';
import { CurrencyFormatDirective } from './currency-format.directive';
import { FormsComponent } from './forms/forms.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { AuthTokenGuard } from './auth-token.guard';
import { UnauthorizedSourceComponent } from './unauthorized-source/unauthorized-source.component';
import { UpperCasePipePipe } from './upper-case-pipe.pipe';
import { DashlinePipe } from './dashline.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    DataTableComponent,
    HeaderComponent,
    FooterComponent,
    CurrencyFormatDirective,
    FormsComponent,
    HttpDemoComponent,
    UnauthorizedSourceComponent,
    UpperCasePipePipe,
    DashlinePipe,
    ChatBotComponent
  ],
  imports: [NgbModule,
    BrowserModule,
    AppRouting,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GlobalService, AuthServiceService, HttpService, AuthTokenGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
