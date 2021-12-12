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

import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllInvoices
   */
  static readonly GetAllInvoicesPath = '/invoices';

  /**
   * Get the list of all invoices .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllInvoices()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllInvoices$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceControllerService.GetAllInvoicesPath, 'get');
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
   * Get the list of all invoices .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllInvoices$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllInvoices(params?: {
  }): Observable<any> {

    return this.getAllInvoices$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation addInvoice
   */
  static readonly AddInvoicePath = '/invoices';

  /**
   * Add a new invoice .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addInvoice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addInvoice$Response(params: {
    body: Invoice
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceControllerService.AddInvoicePath, 'post');
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
   * Add a new invoice .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addInvoice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addInvoice(params: {
    body: Invoice
  }): Observable<any> {

    return this.addInvoice$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getInvoiceById
   */
  static readonly GetInvoiceByIdPath = '/invoices/{id}';

  /**
   * Get invoice by it's id .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInvoiceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoiceById$Response(params: {

    /**
     * The id of the invoice to search
     */
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceControllerService.GetInvoiceByIdPath, 'get');
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
   * Get invoice by it's id .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getInvoiceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoiceById(params: {

    /**
     * The id of the invoice to search
     */
    id: number;
  }): Observable<any> {

    return this.getInvoiceById$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation deleteInvoiceById
   */
  static readonly DeleteInvoiceByIdPath = '/invoices/{id}';

  /**
   * Delete an invoice .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteInvoiceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInvoiceById$Response(params: {

    /**
     * The id of invoice to delete
     */
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceControllerService.DeleteInvoiceByIdPath, 'delete');
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
   * Delete an invoice .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteInvoiceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInvoiceById(params: {

    /**
     * The id of invoice to delete
     */
    id: number;
  }): Observable<void> {

    return this.deleteInvoiceById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getInvoicesByUser
   */
  static readonly GetInvoicesByUserPath = '/invoices/user/{id}';

  /**
   * Get the list of all Invoices Linked to a user .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInvoicesByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoicesByUser$Response(params: {

    /**
     * The id of the concernded user
     */
    id: number;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceControllerService.GetInvoicesByUserPath, 'get');
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
   * Get the list of all Invoices Linked to a user .
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getInvoicesByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoicesByUser(params: {

    /**
     * The id of the concernded user
     */
    id: number;
  }): Observable<any> {

    return this.getInvoicesByUser$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
