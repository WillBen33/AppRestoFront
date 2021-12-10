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

import { Candidature } from '../models/candidature';

@Injectable({
  providedIn: 'root',
})
export class CandidatureControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAll8
   */
  static readonly GetAll8Path = '/candidatures';

  /**
   * Get the list of all candidatures .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll8()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll8$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CandidatureControllerService.GetAll8Path, 'get');
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
   * Get the list of all candidatures .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAll8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll8(params?: {
  }): Observable<any> {

    return this.getAll8$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation addCandidature
   */
  static readonly AddCandidaturePath = '/candidatures';

  /**
   * Add a new candidature .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCandidature()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCandidature$Response(params: {
    body: Candidature
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CandidatureControllerService.AddCandidaturePath, 'post');
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
   * Add a new candidature .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addCandidature$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCandidature(params: {
    body: Candidature
  }): Observable<any> {

    return this.addCandidature$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getCandidaturesByJobOffer
   */
  static readonly GetCandidaturesByJobOfferPath = '/candidatures/jobOffer/{id}';

  /**
   * Get the list of all candidatures Linked to a jobOffer .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCandidaturesByJobOffer()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCandidaturesByJobOffer$Response(params: {

    /**
     * The id of the concerned jobOffer
     */
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CandidatureControllerService.GetCandidaturesByJobOfferPath, 'get');
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
   * Get the list of all candidatures Linked to a jobOffer .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCandidaturesByJobOffer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCandidaturesByJobOffer(params: {

    /**
     * The id of the concerned jobOffer
     */
    id: number;
  }): Observable<any> {

    return this.getCandidaturesByJobOffer$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation deleteCandidatureById
   */
  static readonly DeleteCandidatureByIdPath = '/candidatures/{id}';

  /**
   * Delete a candidature .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCandidatureById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCandidatureById$Response(params: {

    /**
     * The id of candidatureto delete
     */
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CandidatureControllerService.DeleteCandidatureByIdPath, 'delete');
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
   * Delete a candidature .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteCandidatureById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCandidatureById(params: {

    /**
     * The id of candidatureto delete
     */
    id: number;
  }): Observable<void> {

    return this.deleteCandidatureById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
