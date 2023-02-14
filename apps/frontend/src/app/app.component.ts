import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { GraphQLModule } from './graphql.module';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, GraphQLModule],
  selector: 'graph-ql-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
}
