import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css'],
})
export class TestApiComponent implements OnInit {
  message: string = '';
  keycloak: Keycloak; // Declare keycloak

  constructor(private http: HttpClient) {
    this.keycloak = new Keycloak({
      url: 'http://localhost:8080', // Replace if needed
      realm: 'charity', // Replace if needed
      clientId: 'tayeb-rest-api', // Replace if needed
    });
  }

  ngOnInit(): void {
    this.loginAndCallApi();
  }

  loginAndCallApi() {
    this.keycloak.init({
      onLoad: 'login-required',
    }).then((authenticated) => {
      if (authenticated) {
        const token = this.keycloak.token;
        if (token) {
          this.callApiWithToken(token);
        }
      } else {
        this.message = 'Failed to authenticate';
      }
    }).catch((error) => {
      this.message = 'Login Error: ' + error;
    });
  }

  callApiWithToken(token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  
    this.http.get('/api/test-cors', { headers, responseType: 'text' }).subscribe({
      next: (apiResponse) => {
        this.message = apiResponse;
      },
      error: (apiError) => {
        this.message = 'API Error: ' + apiError.message;
      },
    });
  }
}