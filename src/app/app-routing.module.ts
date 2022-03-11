import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {AuthGuard} from "./auth/auth.guard";
import {ProfileComponent} from "./home/profile/profile.component";
import {PlaygroundComponent} from "./home/playground/playground.component";
import {CollectorComponent} from "./home/collector/collector.component";
import {RecommendationComponent} from "./home/recommendation/recommendation.component";

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: PlaygroundComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'collector', component: CollectorComponent },
      { path: 'recommendation', component: RecommendationComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
