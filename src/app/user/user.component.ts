import { Component, Input } from '@angular/core';
import { GithubUser } from '../model/githubUser.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {
  @Input()
  user?: GithubUser;

  errorMessage: string;

  constructor() { }

}
