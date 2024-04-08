'use client'
import { createContext, useContext, useState, useMemo } from 'react'
// RAINBOW START
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultConfig,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    polygon,
    localhost
} from 'wagmi/chains';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
    projectId:'test',
    chains: [polygon, localhost],
    ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();
// RAINBOW END

const defaultContext = {
    theme: 'dark'
}
const BaseContext = createContext(null)

export const useBaseContext = () => (useContext(BaseContext))

export const Providers = ({ children }) => {
    const [state, setState] = useState(defaultContext)
    const contextValue = useMemo(() => ({ state, setState }), [state, setState])
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    <BaseContext.Provider value={contextValue}>{children}</BaseContext.Provider>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>

    )
}