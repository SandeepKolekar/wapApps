
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FormsComponent } from './forms/forms.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { AuthTokenGuard } from './auth-token.guard';
import { UnauthorizedSourceComponent } from './unauthorized-source/unauthorized-source.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { HomeComponent } from './home/home.component';
import { Form2Component } from './form2/form2.component';
import { DataTable1Component } from './data-table1/data-table1.component';
import { DataTable2Component } from './data-table2/data-table2.component';
import { SteppersComponent } from './steppers/steppers.component';
import { TabComponent } from './tab/tab.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { HttpDataTableComponent } from './http-data-table/http-data-table.component';
import { JqwidgetsChartsComponent } from './jqwidgets-charts/jqwidgets-charts.component';
import { BasicExpansionPanelComponent } from '../basic-expansion-panel/basic-expansion-panel.component';
import { GridListComponent } from '../grid-list/grid-list.component';
import { TreeComponent } from '../tree/tree.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ToolTipComponent } from './tool-tip/tool-tip.component';
import { ChartjsComponent } from './chartjs/chartjs.component';

const dashRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent , canActivate: [AuthTokenGuard]},
    { path: 'chatbot', component: ChatBotComponent , canActivate: [AuthTokenGuard]},
    { path: 'dataTable', component: DataTableComponent , canActivate: [AuthTokenGuard]},
    { path: 'formsDemo', component: FormsComponent , canActivate: [AuthTokenGuard]},
    { path: 'formsDemo1', component: Form2Component , canActivate: [AuthTokenGuard]},
    { path: 'dataTable1', component: DataTable1Component , canActivate: [AuthTokenGuard]},
    { path: 'dataTable2', component: DataTable2Component , canActivate: [AuthTokenGuard]},
    { path: 'httpDataTable', component: HttpDataTableComponent , canActivate: [AuthTokenGuard]},
    { path: 'steppers', component: SteppersComponent , canActivate: [AuthTokenGuard]},
    { path: 'tab', component: TabComponent , canActivate: [AuthTokenGuard]},
    { path: 'basicExpansionPanel', component: BasicExpansionPanelComponent , canActivate: [AuthTokenGuard]},
    { path: 'gridList', component: GridListComponent , canActivate: [AuthTokenGuard]},
    { path: 'treeView', component: TreeComponent , canActivate: [AuthTokenGuard]},
    { path: 'bottomSheet', component: BottomSheetComponent , canActivate: [AuthTokenGuard]},
    { path: 'dialogBox', component: DialogBoxComponent , canActivate: [AuthTokenGuard]},
    { path: 'snackbar', component: SnackbarComponent , canActivate: [AuthTokenGuard]},
    { path: 'toolTip', component: ToolTipComponent , canActivate: [AuthTokenGuard]},
    { path: 'httpDemo', component: HttpDemoComponent, canActivate: [AuthTokenGuard]},
    { path: 'decorator', component: DecoratorComponent, canActivate: [AuthTokenGuard]},
    { path: 'jqwidgetsCharts', component: JqwidgetsChartsComponent, canActivate: [AuthTokenGuard]},
    { path: 'chartjs', component: ChartjsComponent, canActivate: [AuthTokenGuard]},
    { path: '**', redirectTo: 'dashboard' }
];

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'fotgotpassword', component: ForgotPasswordComponent },
    { path: 'home', component: HomeComponent , children: dashRoutes , canActivate: [AuthTokenGuard] },
    { path: 'unauthorized', component: UnauthorizedSourceComponent },
    { path: 'register', redirectTo: 'signup' },
    { path: '**', redirectTo: 'login' }
];

export const AppRouting = RouterModule.forRoot( routes );
