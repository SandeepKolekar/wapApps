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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DataTable1Component } from './data-table1/data-table1.component';
import { Form2Component } from './form2/form2.component';
import { DataTable2Component } from './data-table2/data-table2.component';
import { ForgotPassword } from './login/forgot-password.component';
import { SteppersComponent } from './steppers/steppers.component';
import { TabComponent } from './tab/tab.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { HttpDataTableComponent } from './http-data-table/http-data-table.component';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { JqwidgetsChartsComponent } from './jqwidgets-charts/jqwidgets-charts.component';
import { CommonModule } from '@angular/common';
import { LineJqwidgetsChartComponent } from './line-jqwidgets-chart/line-jqwidgets-chart.component';
import { BasicExpansionPanelComponent } from './basic-expansion-panel/basic-expansion-panel.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { TreeComponent } from './tree/tree.component';
import { BottomSheetComponent, BottomSheetOverviewExampleSheet } from './bottom-sheet/bottom-sheet.component';
import { DialogBoxComponent, DialogOverviewExampleDialog } from './dialog-box/dialog-box.component';
import { SnackbarComponent, PizzaPartyComponent } from './snackbar/snackbar.component';
import { ToolTipComponent } from './tool-tip/tool-tip.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { WeatherService } from './weather.service';
import { ChartjsComponent } from './chartjs/chartjs.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient} from '@angular/common/http';
import { HtmlToPdfComponent } from './html-to-pdf/html-to-pdf.component';
import { CanlendarTaskComponent } from './canlendar-task/canlendar-task.component';
import { CalendarModule } from 'angular-calendar';
// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


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
    ChatBotComponent,
    DataTable1Component,
    Form2Component,
    DataTable2Component,
    ForgotPassword,
    SteppersComponent,
    TabComponent,
    DecoratorComponent,
    HttpDataTableComponent,
    JqwidgetsChartsComponent,
    jqxBarGaugeComponent ,
    jqxChartComponent,
    LineJqwidgetsChartComponent,
    BasicExpansionPanelComponent,
    GridListComponent,
    TreeComponent,
    BottomSheetComponent,
    DialogBoxComponent,
    SnackbarComponent,
    ToolTipComponent,
    BottomSheetOverviewExampleSheet,
    PizzaPartyComponent,
    DialogOverviewExampleDialog,
    SidebarMenuComponent,
    ChartjsComponent,
    HtmlToPdfComponent,
    CanlendarTaskComponent
  ],
  entryComponents: [
    ForgotPassword,
    BottomSheetOverviewExampleSheet,
    PizzaPartyComponent,
    DialogOverviewExampleDialog
],
  imports: [NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRouting,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    }),
    CalendarModule.forRoot()
  ],
  providers: [GlobalService, AuthServiceService, HttpService, AuthTokenGuard,WeatherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
