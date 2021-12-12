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

import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCategoryById
   */
  static readonly GetCategoryByIdPath = '/categories/{id}';

  /**
   * Get category by it's id .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategoryById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryById$Response(params: {

    /**
     * The id of candidature to search
     */
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryControllerService.GetCategoryByIdPath, 'get');
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
   * Get category by it's id .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCategoryById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryById(params: {

    /**
     * The id of candidature to search
     */
    id: number;
  }): Observable<any> {

    return this.getCategoryById$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation updateCategory
   */
  static readonly UpdateCategoryPath = '/categories/{id}';

  /**
   * Update a category .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory$Response(params: {

    /**
     * The id of the category to update
     */
    id: number;
    body: Category
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryControllerService.UpdateCategoryPath, 'put');
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
   * Update a category .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory(params: {

    /**
     * The id of the category to update
     */
    id: number;
    body: Category
  }): Observable<any> {

    return this.updateCategory$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation deleteCategoryById
   */
  static readonly DeleteCategoryByIdPath = '/categories/{id}';

  /**
   * Delete a category .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCategoryById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategoryById$Response(params: {

    /**
     * The id of categoryto delete
     */
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryControllerService.DeleteCategoryByIdPath, 'delete');
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
   * Delete a category .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteCategoryById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategoryById(params: {

    /**
     * The id of categoryto delete
     */
    id: number;
  }): Observable<void> {

    return this.deleteCategoryById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAllCategories
   */
  static readonly GetAllCategoriesPath = '/categories';

  /**
   * Get the list of all categories .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryControllerService.GetAllCategoriesPath, 'get');
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
   * Get the list of all categories .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories(params?: {
  }): Observable<any> {

    return this.getAllCategories$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation addCategory
   */
  static readonly AddCategoryPath = '/categories';

  /**
   * Add a new category .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCategory$Response(params: {
    body: Category
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryControllerService.AddCategoryPath, 'post');
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
   * Add a new category .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCategory(params: {
    body: Category
  }): Observable<any> {

    return this.addCategory$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
