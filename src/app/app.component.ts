import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HooksComponent } from "./components/hooks/hooks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HooksComponent],
  template: `
    <h1>{{title}}..!</h1>

    <lifehooks [here_to_check_on_onchange_event]=flag>
      <router-outlet />
    </lifehooks>
  `,
  styles: [],
})
export class AppComponent {
  title = 'td.ng.19';
  flag!: boolean;

  ngOnInit() {
    this.flag = true
  }
}
