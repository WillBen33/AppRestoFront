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

import { JobOffer } from '../models/job-offer';

@Injectable({
  providedIn: 'root',
})
export class JobOfferControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getById4
   */
  static readonly GetById4Path = '/jobOffers/{id}';

  /**
   * Get jobOffer by it's id .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById4()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById4$Response(params: {

    /**
     * The id of jobOffer to search
     */
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, JobOfferControllerService.GetById4Path, 'get');
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
   * Get jobOffer by it's id .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getById4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById4(params: {

    /**
     * The id of jobOffer to search
     */
    id: number;
  }): Observable<any> {

    return this.getById4$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation updatejobOffer
   */
  static readonly UpdatejobOfferPath = '/jobOffers/{id}';

  /**
   * Update a jobOffer .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatejobOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatejobOffer$Response(params: {

    /**
     * The id of jobOffer to update
     */
    id: number;
    body: JobOffer
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, JobOfferControllerService.UpdatejobOfferPath, 'put');
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
   * Update a jobOffer .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatejobOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatejobOffer(params: {

    /**
     * The id of jobOffer to update
     */
    id: number;
    body: JobOffer
  }): Observable<any> {

    return this.updatejobOffer$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation deleteJobOfferById
   */
  static readonly DeleteJobOfferByIdPath = '/jobOffers/{id}';

  /**
   * Delete a jobOffer .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteJobOfferById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteJobOfferById$Response(params: {

    /**
     * The id of jobOffer to delete
     */
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, JobOfferControllerService.DeleteJobOfferByIdPath, 'delete');
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
   * Delete a jobOffer .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteJobOfferById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteJobOfferById(params: {

    /**
     * The id of jobOffer to delete
     */
    id: number;
  }): Observable<void> {

    return this.deleteJobOfferById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAll4
   */
  static readonly GetAll4Path = '/jobOffers';

  /**
   * Get the list of all jobOffers .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll4()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll4$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, JobOfferControllerService.GetAll4Path, 'get');
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
   * Get the list of all jobOffers .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAll4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll4(params?: {
  }): Observable<any> {

    return this.getAll4$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation addjobOffer
   */
  static readonly AddjobOfferPath = '/jobOffers';

  /**
   * Add a new jobOffer .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addjobOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addjobOffer$Response(params: {
    body: JobOffer
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, JobOfferControllerService.AddjobOfferPath, 'post');
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
   * Add a new jobOffer .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addjobOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addjobOffer(params: {
    body: JobOffer
  }): Observable<any> {

    return this.addjobOffer$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
