import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { FootballercardComponent } from "./modules/footballercard/footballercard.component";
import { HomeComponent } from "./modules/home/home.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'account', component: FootballercardComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}