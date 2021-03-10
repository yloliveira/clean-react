import { HttpPostClient, HttpPostClientParams } from "../protocols/http/httpPostClient";

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: object;

  async post(params: HttpPostClientParams): Promise<void> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve()
  }
}
