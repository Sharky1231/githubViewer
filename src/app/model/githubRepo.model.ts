export class GithubRepo {
  public name: string;
  public description: string;
  public repoUrl: string;
  public numberOfStars: number;
  public language: string;
  public createdAt: Date;

  constructor(repoResult: any) {
    this.name = repoResult.name;
    this.description = repoResult.description;
    this.repoUrl = repoResult.html_url;
    this.numberOfStars = repoResult.stargazers_count;
    this.language = repoResult.language;
    this.createdAt = new Date(repoResult.created_at);
  }
}
