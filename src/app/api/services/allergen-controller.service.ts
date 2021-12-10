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

import { Allergen } from '../models/allergen';

@Injectable({
  providedIn: 'root',
})
export class AllergenControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getById8
   */
  static readonly GetById8Path = '/allergens/{id}';

  /**
   * Get allergen by it's id .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById8()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById8$Response(params: {

    /**
     * The id of allergen to search
     */
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AllergenControllerService.GetById8Path, 'get');
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
   * Get allergen by it's id .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getById8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById8(params: {

    /**
     * The id of allergen to search
     */
    id: number;
  }): Observable<any> {

    return this.getById8$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation updateAllergen
   */
  static readonly UpdateAllergenPath = '/allergens/{id}';

  /**
   * Update a allergen .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAllergen()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAllergen$Response(params: {

    /**
     * The id of the allergen to update
     */
    id: number;
    body: Allergen
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AllergenControllerService.UpdateAllergenPath, 'put');
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
   * Update a allergen .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateAllergen$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAllergen(params: {

    /**
     * The id of the allergen to update
     */
    id: number;
    body: Allergen
  }): Observable<any> {

    return this.updateAllergen$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation deleteAllergenById
   */
  static readonly DeleteAllergenByIdPath = '/allergens/{id}';

  /**
   * Delete an allergen .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAllergenById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAllergenById$Response(params: {

    /**
     * The id of allergento delete
     */
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AllergenControllerService.DeleteAllergenByIdPath, 'delete');
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
   * Delete an allergen .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteAllergenById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAllergenById(params: {

    /**
     * The id of allergento delete
     */
    id: number;
  }): Observable<void> {

    return this.deleteAllergenById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAll9
   */
  static readonly GetAll9Path = '/allergens';

  /**
   * Get the list of all allergens .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll9()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll9$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AllergenControllerService.GetAll9Path, 'get');
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
   * Get the list of all allergens .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAll9$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll9(params?: {
  }): Observable<any> {

    return this.getAll9$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation addAllergen
   */
  static readonly AddAllergenPath = '/allergens';

  /**
   * Add a new allergen .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addAllergen()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAllergen$Response(params: {
    body: Allergen
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AllergenControllerService.AddAllergenPath, 'post');
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
   * Add a new allergen .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addAllergen$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAllergen(params: {
    body: Allergen
  }): Observable<any> {

    return this.addAllergen$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getAllergenNyProduct
   */
  static readonly GetAllergenNyProductPath = '/allergens/product/{id}';

  /**
   * Get the list of all allergens Linked to a product .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllergenNyProduct()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllergenNyProduct$Response(params: {

    /**
     * The id of the concerned product
     */
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AllergenControllerService.GetAllergenNyProductPath, 'get');
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
   * Get the list of all allergens Linked to a product .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllergenNyProduct$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllergenNyProduct(params: {

    /**
     * The id of the concerned product
     */
    id: number;
  }): Observable<any> {

    return this.getAllergenNyProduct$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
