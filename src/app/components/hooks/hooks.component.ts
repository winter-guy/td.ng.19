import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lifehooks',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="c1" style="margin-right: 2rem;">link to first component</a>
    <a [routerLink]="['/c2']" routerLinkActive="router-link-active" >link to second component</a>
    <ng-content></ng-content>
  `,
  styles: ``
})
export class HooksComponent {
  @Input() here_to_check_on_onchange_event: boolean = false;

  ngOnChanges() {

    /**
     * note this get called cause the input decorator passed data from app.component -> layout.component.
     */
    console.log('on changes called.. :) data pushed from app.component -> layout.component [true was initially false]');
  }

  ngOnInit(): void {
    console.log('on init called.');
  }

  ngAfterContentInit(): void {
    console.log('Content initialized; Layout');
  }

  ngAfterContentChecked(): void {
    console.log('Content Checked; Layout');
  }
  
  ngAfterViewInit(): void {
    console.log('View initialized; Layout');
  }
  
  ngAfterViewChecked(): void {
    console.log('View Checked; Layout');
  }
}
