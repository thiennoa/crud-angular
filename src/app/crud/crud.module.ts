import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CrudRoutingModule} from './crud-routing.module';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [HomeComponent, DetailsComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    //provideHttpClient(ithInterceptorsFromDi()),
    FormsModule
  ],
  providers: [
    // Cấu hình HttpClient trong providers
    provideHttpClient(withInterceptorsFromDi()) // Đảm bảo sử dụng cung cấp HttpClient đúng cách
  ]
})
export class CrudModule { }
