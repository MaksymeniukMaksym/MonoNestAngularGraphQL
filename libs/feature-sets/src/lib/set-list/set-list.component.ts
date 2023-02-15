import { SetListGQL } from '@graph-ql/data-access';
import { map } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'graph-ql-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
})
export class SetListComponent {
  sets$: any;
  constructor(private setListGQL: SetListGQL) {
    this.sets$ = this.setListGQL.watch().valueChanges.pipe(map((result) => result));

  }
}
