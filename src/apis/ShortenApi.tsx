import HttpClient from "./abstracts/HttpClient";

type ShortenResponseResult = {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
};

export type ShortenResponse = {
  ok: boolean;
  result: ShortenResponseResult;
};

export default class ShortenApi extends HttpClient {
  public constructor() {
    super("https://api.shrtco.de/v2");
  }

  public shorten = (url: string) =>
    this.instance.get<any, ShortenResponse>("/shorten", {
      params: { url },
    });
}
