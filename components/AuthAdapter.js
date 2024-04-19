import { getCsrfToken, signIn, signOut } from "next-auth/react"
import { createAuthenticationAdapter } from '@rainbow-me/rainbowkit';
import { SiweMessage } from 'siwe';
const AuthAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    console.log('Get Nonce');
    return await getCsrfToken();
  },
  createMessage: ({ nonce, address, chainId }) => {
    return new SiweMessage({
      domain: window.location.host,
      address,
      statement: 'Sign in with Ethereum',
      uri: window.location.origin,
      version: '1',
      chainId,
      nonce,
    });
  },
  getMessageBody: ({ message }) => {
    return message.prepareMessage();
  },
  verify: async ({ message, signature }) => {
    const verifyRes = await signIn("credentials", {
      message: JSON.stringify(message),
      redirect: false,
      signature,
      callbackUrl: '/test'
    })
    console.log('verifyRes---------', verifyRes);
    return Boolean(verifyRes.ok);
  },
  signOut: async () => {
    await signOut();
  },
});

export default AuthAdapter