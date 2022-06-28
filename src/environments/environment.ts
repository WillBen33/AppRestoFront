// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backendUrl : "http://localhost:5000",
  checkoutUri: "/api/checkout/validatePayment",
  payzenUrl : "https://static.payzen.eu/",
  payzenPublicKey:"67953007:testpublickey_5U33XRhlq7USngQP0hmpn6Kw1jVL29VucW1xOTicQZdsT",
  refreshTokenUri:"/api/auth/refresh",
  signInUri:"/api/auth/sign-in",
  signUpUri:"/api/auth/sign-up",
  logoutUri:"/api/auth/logout",
  requestPasswordUri:"/api/auth/request-password",
  resetPasswordUri:"/api/auth/reset-password",
  loginRedirect:"/home",
  logoutRedirect:"/menu",
  registerRedirect:"/auth/register-success",
  ipnTargetUrl:"http://91.168.93.70:8081/checkout/ipn"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.kr-payment-form.min.js/plugins/zone-error';  // Included with Angular CLI.
