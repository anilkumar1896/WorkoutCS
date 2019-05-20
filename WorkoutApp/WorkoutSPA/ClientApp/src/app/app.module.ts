import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CategoryService } from './Services/category.service';
import { ListComponent } from './Categorys/list/list.component';
import { CreateComponent } from './Categorys/create/create.component';
import { EditComponent } from './Categorys/edit/edit.component';
import { DeleteComponent } from './Categorys/delete/delete.component';
import { SearchComponent } from './Categorys/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
   
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ListComponent,
    CreateComponent,
    DeleteComponent,
    EditComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'list', component: ListComponent },
      { path: 'create', component: CreateComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'delete/:id', component: DeleteComponent }
    ])
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
