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

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getById3
   */
  static readonly GetById3Path = '/products/{id}';

  /**
   * Get product by it's id .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById3()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById3$Response(params: {

    /**
     * The id of the product to search
     */
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProductControllerService.GetById3Path, 'get');
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
   * Get product by it's id .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getById3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById3(params: {

    /**
     * The id of the product to search
     */
    id: number;
  }): Observable<any> {

    return this.getById3$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation updateProduct
   */
  static readonly UpdateProductPath = '/products/{id}';

  /**
   * Update a product .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduct$Response(params: {

    /**
     * The id of the product to update
     */
    id: number;
    body: Product
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProductControllerService.UpdateProductPath, 'put');
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
   * Update a product .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduct(params: {

    /**
     * The id of the product to update
     */
    id: number;
    body: Product
  }): Observable<any> {

    return this.updateProduct$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation deleteProductById
   */
  static readonly DeleteProductByIdPath = '/products/{id}';

  /**
   * Delete a product .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProductById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProductById$Response(params: {

    /**
     * The id of product to delete
     */
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductControllerService.DeleteProductByIdPath, 'delete');
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
   * Delete a product .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteProductById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProductById(params: {

    /**
     * The id of product to delete
     */
    id: number;
  }): Observable<void> {

    return this.deleteProductById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAll3
   */
  static readonly GetAll3Path = '/products';

  /**
   * Get the list of all products .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll3()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll3$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProductControllerService.GetAll3Path, 'get');
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
   * Get the list of all products .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAll3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll3(params?: {
  }): Observable<any> {

    return this.getAll3$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation addProduct
   */
  static readonly AddProductPath = '/products';

  /**
   * Add a new product .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addProduct$Response(params: {
    body: Product
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProductControllerService.AddProductPath, 'post');
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
   * Add a new product .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addProduct(params: {
    body: Product
  }): Observable<any> {

    return this.addProduct$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getProductByCommand
   */
  static readonly GetProductByCommandPath = '/products/commande/{id}';

  /**
   * Get the list of all products Linked to Commande .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductByCommand()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductByCommand$Response(params: {

    /**
     * The id the concernedcommand
     */
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProductControllerService.GetProductByCommandPath, 'get');
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
   * Get the list of all products Linked to Commande .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProductByCommand$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductByCommand(params: {

    /**
     * The id the concernedcommand
     */
    id: number;
  }): Observable<any> {

    return this.getProductByCommand$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getProductByCategory
   */
  static readonly GetProductByCategoryPath = '/products/category/{id}';

  /**
   * Get the list of all products Linked to a category .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductByCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductByCategory$Response(params: {

    /**
     * The id the concernedcategory
     */
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProductControllerService.GetProductByCategoryPath, 'get');
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
   * Get the list of all products Linked to a category .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProductByCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductByCategory(params: {

    /**
     * The id the concernedcategory
     */
    id: number;
  }): Observable<any> {

    return this.getProductByCategory$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
