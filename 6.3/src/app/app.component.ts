import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reader';
  isSmallScreen = false;

  constructor(bpo: BreakpointObserver) {
    bpo
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe(state => {
        this.isSmallScreen = state.breakpoints[Breakpoints.XSmall] || 
              state.breakpoints[Breakpoints.Small];
      })
  }
}
