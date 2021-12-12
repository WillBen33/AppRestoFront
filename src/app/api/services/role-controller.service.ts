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

import { Role } from '../models/role';

@Injectable({
  providedIn: 'root',
})
export class RoleControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getRoleById
   */
  static readonly GetRoleByIdPath = '/roles/{id}';

  /**
   * Get role by it's id .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRoleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleById$Response(params: {

    /**
     * The id of role to search
     */
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, RoleControllerService.GetRoleByIdPath, 'get');
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
   * Get role by it's id .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getRoleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleById(params: {

    /**
     * The id of role to search
     */
    id: number;
  }): Observable<any> {

    return this.getRoleById$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation updateRole
   */
  static readonly UpdateRolePath = '/roles/{id}';

  /**
   * Update a role .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRole$Response(params: {

    /**
     * The id of role to update
     */
    id: number;
    body: Role
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, RoleControllerService.UpdateRolePath, 'put');
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
   * Update a role .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRole(params: {

    /**
     * The id of role to update
     */
    id: number;
    body: Role
  }): Observable<any> {

    return this.updateRole$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation deleteRoleById
   */
  static readonly DeleteRoleByIdPath = '/roles/{id}';

  /**
   * Delete a role .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRoleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRoleById$Response(params: {

    /**
     * The id of role to delete
     */
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RoleControllerService.DeleteRoleByIdPath, 'delete');
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
   * Delete a role .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteRoleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRoleById(params: {

    /**
     * The id of role to delete
     */
    id: number;
  }): Observable<void> {

    return this.deleteRoleById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAllRoles
   */
  static readonly GetAllRolesPath = '/roles';

  /**
   * Get the list of all roles .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRoles$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, RoleControllerService.GetAllRolesPath, 'get');
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
   * Get the list of all roles .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRoles(params?: {
  }): Observable<any> {

    return this.getAllRoles$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation addRole
   */
  static readonly AddRolePath = '/roles';

  /**
   * Add a new role .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addRole$Response(params: {
    body: Role
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, RoleControllerService.AddRolePath, 'post');
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
   * Add a new role .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addRole(params: {
    body: Role
  }): Observable<any> {

    return this.addRole$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
