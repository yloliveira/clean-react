import { HttpPostClientSpy } from "../../test/mockHttpPostClient";
import { RemoteAuthentication } from "./remoteAuthentication";
import faker from 'faker';
import { mockAuthentication } from "../../../domain/test/mockAuthentication";

type SutTypes = {
  sut: RemoteAuthentication,
  httpPostClientSpy: HttpPostClientSpy,
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return { sut, httpPostClientSpy }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(url);
  })

  test('Should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const mockAuthenticationParams = mockAuthentication();
    await sut.auth(mockAuthenticationParams);
    expect(httpPostClientSpy.body).toEqual(mockAuthenticationParams);
  })
})
