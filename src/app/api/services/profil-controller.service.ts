/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Profil } from '../models/profil';

@Injectable({
  providedIn: 'root',
})
export class ProfilControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getProfileById
   */
  static readonly GetProfileByIdPath = '/profils/{id}';

  /**
   * Get profile by it's id .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfileById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfileById$Response(params: {

    /**
     * The id of profil to search
     */
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProfilControllerService.GetProfileByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Get profile by it's id .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProfileById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfileById(params: {

    /**
     * The id of profil to search
     */
    id: number;
  }): Observable<any> {

    return this.getProfileById$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation updateProfile
   */
  static readonly UpdateProfilePath = '/profils/{id}';

  /**
   * Update a profile .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProfile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProfile$Response(params: {

    /**
     * The id of profile to update
     */
    id: number;
    body: Profil
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProfilControllerService.UpdateProfilePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Update a profile .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateProfile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProfile(params: {

    /**
     * The id of profile to update
     */
    id: number;
    body: Profil
  }): Observable<any> {

    return this.updateProfile$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation deleteProfileById
   */
  static readonly DeleteProfileByIdPath = '/profils/{id}';

  /**
   * Delete a profile .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProfileById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProfileById$Response(params: {

    /**
     * The id of profile to delete
     */
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProfilControllerService.DeleteProfileByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Delete a profile .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteProfileById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProfileById(params: {

    /**
     * The id of profile to delete
     */
    id: number;
  }): Observable<void> {

    return this.deleteProfileById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAllProfiles
   */
  static readonly GetAllProfilesPath = '/profils';

  /**
   * Get the list of all profiles .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllProfiles()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllProfiles$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProfilControllerService.GetAllProfilesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Get the list of all profiles .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllProfiles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllProfiles(params?: {
  }): Observable<any> {

    return this.getAllProfiles$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation addProfile
   */
  static readonly AddProfilePath = '/profils';

  /**
   * Add a new profile .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addProfile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addProfile$Response(params: {
    body: Profil
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProfilControllerService.AddProfilePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Add a new profile .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addProfile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addProfile(params: {
    body: Profil
  }): Observable<any> {

    return this.addProfile$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
