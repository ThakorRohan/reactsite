import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { ClientsComponent } from './clients.component';
import { OurClientComponent } from './our-client/our-client.component';
import { WorkingLanguageComponent } from './working-language/working-language.component';
import { OurBlogComponent } from './our-blog/our-blog.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
  }
];

@NgModule({
  declarations: [ClientsComponent, OurClientComponent, WorkingLanguageComponent, OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class ClientsModule { }
