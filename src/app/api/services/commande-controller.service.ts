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

import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root',
})
export class CommandeControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCommandeById
   */
  static readonly GetCommandeByIdPath = '/commandes/{id}';

  /**
   * Get commande by it's id .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommandeById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommandeById$Response(params: {

    /**
     * The id of commande to search
     */
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeControllerService.GetCommandeByIdPath, 'get');
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
   * Get commande by it's id .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCommandeById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommandeById(params: {

    /**
     * The id of commande to search
     */
    id: number;
  }): Observable<any> {

    return this.getCommandeById$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation updateCommande
   */
  static readonly UpdateCommandePath = '/commandes/{id}';

  /**
   * Update a commande .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCommande()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCommande$Response(params: {

    /**
     * The id of commande to update
     */
    id: number;
    body: Commande
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeControllerService.UpdateCommandePath, 'put');
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
   * Update a commande .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateCommande$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCommande(params: {

    /**
     * The id of commande to update
     */
    id: number;
    body: Commande
  }): Observable<any> {

    return this.updateCommande$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation deleteCommandeById
   */
  static readonly DeleteCommandeByIdPath = '/commandes/{id}';

  /**
   * Delete a commande .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCommandeById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCommandeById$Response(params: {

    /**
     * The id of commande to delete
     */
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeControllerService.DeleteCommandeByIdPath, 'delete');
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
   * Delete a commande .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteCommandeById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCommandeById(params: {

    /**
     * The id of commande to delete
     */
    id: number;
  }): Observable<void> {

    return this.deleteCommandeById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAllCommandes
   */
  static readonly GetAllCommandesPath = '/commandes';

  /**
   * Get the list of all commandes .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCommandes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCommandes$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeControllerService.GetAllCommandesPath, 'get');
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
   * Get the list of all commandes .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllCommandes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCommandes(params?: {
  }): Observable<any> {

    return this.getAllCommandes$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation addCommande
   */
  static readonly AddCommandePath = '/commandes';

  /**
   * Add a new commande .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCommande()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCommande$Response(params: {
    body: Commande
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeControllerService.AddCommandePath, 'post');
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
   * Add a new commande .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addCommande$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCommande(params: {
    body: Commande
  }): Observable<any> {

    return this.addCommande$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getProductByCategory1
   */
  static readonly GetProductByCategory1Path = '/commandes/user/{id}';

  /**
   * Get the list of all commandes Linked to a user .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductByCategory1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductByCategory1$Response(params: {

    /**
     * The id of the concerned user
     */
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CommandeControllerService.GetProductByCategory1Path, 'get');
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
   * Get the list of all commandes Linked to a user .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProductByCategory1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductByCategory1(params: {

    /**
     * The id of the concerned user
     */
    id: number;
  }): Observable<any> {

    return this.getProductByCategory1$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
