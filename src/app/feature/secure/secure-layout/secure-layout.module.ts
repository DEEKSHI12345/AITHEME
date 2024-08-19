import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppLayoutComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    SidebarModule,
    ButtonModule,
    MenubarModule,
    PanelMenuModule,
    InputTextModule
  ],
  exports: [
    AppLayoutComponent,
  ]
})
export class SecureLayoutModule { }
