import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { MenuItem } from 'primeng/api';
import { map, Observable, shareReplay } from 'rxjs';
import{} from 'primeng/panelmenu'

@Component({
  selector: 'nggt-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {
  
  /* Public Properties */
  display: boolean = true; // Controls sidebar visibility
  menuItems: MenuItem[] = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Profile',
        icon: 'pi pi-user',
        command: () => this.gotoProfile()
      },
      {
        label: 'Generate Reports',
        icon: 'pi pi-file',
        command: () => this.router.navigateByUrl('generate-reports')
      },
      {
        label: 'View Reports',
        icon: 'pi pi-eye',
        items: [
          {
            label: 'Generic Reports',
            icon: 'pi pi-list',
            items: [
              {
                label: 'Report 1',
                icon: 'pi pi-file',
                command: () => this.router.navigateByUrl('view-reports/generic/report1')
              },
              {
                label: 'Report 2',
                icon: 'pi pi-file',
                command: () => this.router.navigateByUrl('view-reports/generic/report2')
              }
            ]
          },
          {
            label: 'Custom Reports',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Custom Report 1',
                icon: 'pi pi-file',
                command: () => this.router.navigateByUrl('view-reports/custom/report1')
              },
              {
                label: 'Custom Report 2',
                icon: 'pi pi-file',
                command: () => this.router.navigateByUrl('view-reports/custom/report2')
              }
            ]
          }
        ]
      }
    ];
  }

  /* Public Methods */
  gotoProfile(): void {
    this.router.navigateByUrl('profile');
  }

  logout(): void {
    this.authService.logout();
  }

  
}
