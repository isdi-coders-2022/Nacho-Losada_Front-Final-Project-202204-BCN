export interface RegisterFormData {
  username: string;
  password: string;
  name: string;
  email: string;
}

export interface LoginFormData {
  username: string;
  password: string;
}

export interface UserResponseApi {
  name: string;
  username: string;
}

export interface IFormData {
  summonerName: string;
  creatorName: string;
  rank: string;
  division: string;
  firstRole: string;
  firstRoleChamps: string[];
  secondRole: string;
  secondRoleChamps: string[];
  description: string;
}

export interface SummonerProp {
  handledSummoner: ISummoner | null | undefined;
}

export interface Props {
  summoner: ISummoner;
}

export interface ISummoner {
  summonerName: string;
  creatorName: string;
  rank: string;
  division: string;
  firstRole: string;
  firstRoleChamps: string[];
  secondRole: string;
  secondRoleChamps: string[];
  description: string;
  id: string;
}
