import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GithubApiConnectorService } from './../services/githubApiConnector/github-api-connector.service';
import { TestBed, inject } from '@angular/core/testing';

import { UserReposComponent } from './userRepos.component';
import { GithubUser } from '../model/githubUser.model';

describe('a userRepos component', () => {
  let service: GithubApiConnectorService;
  const dummyUser = new GithubUser({ login: 'angular', public_repos: 100 });

  // register all needed dependencies
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserReposComponent,
        GithubApiConnectorService,
      ],
      imports: [HttpClientModule]
    });
  });

  it('should load repos', (done) => {
    service = TestBed.get(GithubApiConnectorService);
    const reposApp = new UserReposComponent(service);
    reposApp.user = dummyUser;
    reposApp.currentPage = 1;
    reposApp.repoPageLimit = 20;

    reposApp.fetchRepos().subscribe((repoResult: any) => {
      expect(repoResult.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should NOT scroll if there are no repos', () => {
    service = TestBed.get(GithubApiConnectorService);
    const reposApp = new UserReposComponent(service);
    reposApp.user = dummyUser;

    reposApp.repos.length = reposApp.user.publicRepos;
    reposApp.onScroll();
    expect(reposApp.repos.length).toBe(reposApp.user.publicRepos);
  });

});
