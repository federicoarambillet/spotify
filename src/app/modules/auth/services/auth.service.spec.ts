import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import * as mockRaw from '../../../data/user.json'

import { CookieService } from 'ngx-cookie-service';

import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy: { post: jasmine.Spy }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CookieService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //function sendCredentials

  it('It must return an object with "data" y "tokenSession"',
    (done: DoneFn) => {

      const user: any = mockUser.userOk
      const mockResponse = {
        data: {},
        tokenSession: ''
      }

      httpClientSpy.post.and.returnValue(
        of(mockResponse)
      )

  
      service.sendCredentials(user.email, user.password)
        .subscribe(responseApi => {
          const getProperties = Object.keys(responseApi)
          expect(getProperties).toContain('data')
          expect(getProperties).toContain('tokenSession')
          done()
        })

    })

});