import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousingdetailComponent } from './housingdetail/housingdetail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home Page'},
    {path: 'details/:id', component: HousingdetailComponent, title: 'Details Page'}
];
