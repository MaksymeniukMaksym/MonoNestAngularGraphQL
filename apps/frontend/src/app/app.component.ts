import { HttpClientModule } from '@angular/common/http';
import { FeatureSetsModule } from './../../../../libs/feature-sets/src/lib/feature-sets.module';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { GraphQLModule } from './graphql.module';
// import { Set, SetListGQL } from '@graph-ql/data-access';
// import { map, Observable } from 'rxjs';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ApolloModule } from 'apollo-angular';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, GraphQLModule, FeatureSetsModule, CommonModule, HttpClientModule, ApolloModule],
  selector: 'graph-ql-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  // sets$: Observable<any>;

  constructor() {
    // this.sets$ = this.setListGQL.watch().valueChanges.pipe(map((result) => result.data.allSets));

  }
}
