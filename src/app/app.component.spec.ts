import { UserReposComponent } from './userRepos/userRepos.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubApiConnectorService } from './services/githubApiConnector/github-api-connector.service';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GithubUser } from './model/githubUser.model';
describe('AppComponent', () => {
  let service: GithubApiConnectorService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        UserReposComponent,
      ],
      imports: [HttpClientModule, InfiniteScrollModule],
      providers: [GithubApiConnectorService]
    }).compileComponents();
  }));

  it('should retrieve user "Angualar"', (done) => {
    service = TestBed.get(GithubApiConnectorService);
    const app = new AppComponent(service);

    app.fetchUser('angular').subscribe((userResult) => {
      app.user = new GithubUser(userResult);
      expect(app.user.userName).toBe('angular');
      done();
    });
  });
});
