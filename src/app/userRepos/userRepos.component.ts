import { GithubRepo } from './../model/githubRepo.model';
import { GithubUser } from './../model/githubUser.model';
import { Component, OnInit, Input } from '@angular/core';
import { GithubApiConnectorService } from '../services/githubApiConnector/github-api-connector.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './userRepos.component.html',
  styleUrls: ['./userRepos.component.scss']
})

export class UserReposComponent implements OnInit {

  @Input()
  user: GithubUser;

  repos: GithubRepo[] = [];
  currentPage = 1;
  repoPageLimit = 20;
  errorMessage: string;

  constructor(private gitApi: GithubApiConnectorService) { }

  ngOnInit(): void {
    this.loadRepos();
  }

  loadRepos() {
    if (this.user.userName) {
      this.errorMessage = '';

     this.fetchRepos().subscribe((reposResult: any) => {
        this.onRepoLoadSucess(reposResult);
      }, (error) => {
        this.onRepoLoadFail();
      });
    }
  }

  fetchRepos() {
    return this.gitApi.getUserRepo(this.user.userName, this.currentPage, this.repoPageLimit);
  }

  private onRepoLoadSucess(reposResult: any) {
    if (!reposResult.length) {
      this.errorMessage = 'User has no public repos.';
      return;
    }

    reposResult.forEach(repo => {
      const githubRepo = new GithubRepo(repo);
      this.repos.push(githubRepo);
    });
    this.currentPage++;
  }

  private onRepoLoadFail() {
    this.errorMessage = 'No repos found';
  }

  onScroll() {
    if (this.repos.length < this.user.publicRepos) {
      this.loadRepos();
    }
  }
}
