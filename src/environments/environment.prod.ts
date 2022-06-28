export const environment = {
  production: true,
    backendUrl : "",
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
    ipnTargetUrl:"http://91.168.93.70:8081/api/checkout/ipn"
  };
  
};
