import { GithubUser } from './model/githubUser.model';
import { GithubApiConnectorService } from './services/githubApiConnector/github-api-connector.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: GithubUser;
  errorMessage = 'Please search for a user first!';

  constructor(private gitApi: GithubApiConnectorService) { }

  ngOnInit(): void {
    // this.search('angular');
  }

  search($event: string) {
    this.errorMessage = '';
    this.user = null;

    this.fetchUser($event).subscribe((userResult) => {
      this.user = new GithubUser(userResult);
    }, (error) => {
      this.errorMessage = 'User: "' + $event + '" not found!';
    });
  }

  fetchUser(userName) {
    return this.gitApi.getUserById(userName);
  }
}
