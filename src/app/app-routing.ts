import { Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./authentication/login/login.component";
import { LogoutComponent } from "./authentication/logout/logout.component";

const APP_ROUTES:Routes =[
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path:'main', component:MainComponent},
    {path:'registration', component:AuthenticationComponent},
    {path:'login', component:LoginComponent},
    {path:'logout', component:LogoutComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);