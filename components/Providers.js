'use client'
import { createContext, useContext, useState, useMemo } from 'react'
import { useSession } from "next-auth/react"

// RAINBOW START
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultConfig,
    RainbowKitProvider,
    RainbowKitAuthenticationProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    polygon,
    // localhost
} from 'wagmi/chains';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import AuthAdapter from './AuthAdapter';

const config = getDefaultConfig({
    projectId: '2d954ad196c41b904bcbc44cf927c396',
    chains: [polygon],
    ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();
// RAINBOW END

const defaultContext = {
    theme: 'dark',
    AUTHENTICATION_STATUS: 'unauthenticated'
}
const BaseContext = createContext(null)

export const useBaseContext = () => (useContext(BaseContext))

export const Providers = ({ children }) => {
    const session = useSession()
    const AUTHENTICATION_STATUS = session.status
    const [state, setState] = useState(defaultContext)
    const contextValue = useMemo(() => ({ state, setState }), [state, setState])
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitAuthenticationProvider
                    adapter={AuthAdapter}
                    status={AUTHENTICATION_STATUS}
                >
                    <RainbowKitProvider modalSize="compact">
                        <BaseContext.Provider value={contextValue}>{children}</BaseContext.Provider>
                    </RainbowKitProvider>
                </RainbowKitAuthenticationProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}