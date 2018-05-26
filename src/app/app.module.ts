import { UserReposComponent } from './userRepos/userRepos.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { GithubApiConnectorService } from './services/githubApiConnector/github-api-connector.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    UserReposComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [GithubApiConnectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
