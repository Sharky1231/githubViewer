import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubApiConnectorService {

  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUserById(id: string) {
    return this.http.get(this.baseUrl + '/users/' + id);
  }

  getUserRepo(id: string, page: number, limit: number) {
    return this.http.get(this.baseUrl + '/users/' + id + '/repos?page=' + page + '&per_page=' + limit);
  }
}
