  <ParaProvider
    paraClientConfig={{
      env: Environment.BETA, //or Environment.PROD from production apps
      apiKey: YOUR_API_KEY,
    }}
      externalWalletConfig={{
      appName: YOUR_APP_NAME,
      wallets: ["METAMASK","PHANTOM","WALLETCONNECT"],
      walletConnect: { projectId: YOUR_WALLET_CONNECT_PROJECT_ID },
    }}
    paraModalConfig={{
      logo: "www.token.rubiconproject.com",
      theme: {"foregroundColor":"#894000","backgroundColor":"#228769","font":"Source Sans Pro","borderRadius":"none"},
      oAuthMethods: ["GOOGLE","TWITTER","FACEBOOK","TELEGRAM"],
      authLayout: ["AUTH:FULL","EXTERNAL:FULL"],
      twoFactorAuthEnabled: true,
      recoverySecretStepEnabled: true,
      onRampTestMode: true,
    }}
  >
    {REST_OF_APP}
  </ParaProvider>
