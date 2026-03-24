import { Routes } from '@angular/router';
import { authGuard } from './guard/auth-guard.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: "full" },
    { path: 'home', loadComponent: () => import('./component/home/home').then(l => l.Home) },
    { path: 'login', loadComponent: () => import('./component/login/login').then(l => l.Login) },
    { path: 'dashboard', loadComponent: () => import('./component/dashboard1/dashboard1').then(l => l.Dashboard1), canActivate : [authGuard] },


];
