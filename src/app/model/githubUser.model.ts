export class GithubUser {
  public userName: string;
  public id: number;
  public createdAt: Date;
  public imageUrl: string;
  public publicRepos: number;
  public publicGists: number;
  public followers: number;
  public following: number;
  public userType: string;

  public name?: string;
  public bio?: string;
  public email?: string;
  public location?: string;

  constructor(userResult: any) {
    this.userName = userResult.login;
    this.id = userResult.id;
    this.createdAt = new Date(userResult.created_at);
    this.imageUrl = userResult.avatar_url;
    this.publicRepos = userResult.public_repos;
    this.publicGists = userResult.public_gists;
    this.followers = userResult.followers;
    this.following = userResult.following;
    this.userType = userResult.type;
    this.name = userResult.name;
    this.email = userResult.email;
    this.bio = userResult.bio;
    this.location = userResult.location;
  }
}
