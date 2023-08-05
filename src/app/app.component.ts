import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
      <div class="logo-container">
  <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true"> 
  <h1 class="site-name">Parkbilgi.com</h1>
</div>
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homes';
}
