
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

const dashRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent , canActivate: [AuthTokenGuard]},
    { path: 'chatbot', component: ChatBotComponent , canActivate: [AuthTokenGuard]},
    { path: 'dataTable', component: DataTableComponent , canActivate: [AuthTokenGuard]},
    { path: 'formsDemo', component: FormsComponent , canActivate: [AuthTokenGuard]},
    { path: 'formsDemo1', component: Form2Component , canActivate: [AuthTokenGuard]},
    { path: 'dataTable1', component: DataTable1Component , canActivate: [AuthTokenGuard]},
    { path: 'dataTable2', component: DataTable2Component , canActivate: [AuthTokenGuard]},
    { path: 'steppers', component: SteppersComponent , canActivate: [AuthTokenGuard]},
    { path: 'tab', component: TabComponent , canActivate: [AuthTokenGuard]},
    { path: 'httpDemo', component: HttpDemoComponent, canActivate: [AuthTokenGuard]},
    { path: 'decorator', component: DecoratorComponent, canActivate: [AuthTokenGuard]},
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
