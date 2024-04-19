/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useSession } from "next-auth/react"
import { Button } from '@/components';

const AccountButton = ({ userIcon }) => {
    const session = useSession()
    console.log(session);
    return (
        <ConnectButton.Custom>
            {
                ({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    authenticationStatus,
                    mounted,
                }) => {
                    // Note: If your app doesn't use authentication, you
                    // can remove all 'authenticationStatus' checks
                    const ready = mounted && authenticationStatus !== 'loading';
                    console.log(authenticationStatus);
                    const connected =
                        ready &&
                        account &&
                        chain &&
                        (!authenticationStatus ||
                            authenticationStatus === 'authenticated');
                    return (
                        <div
                            {...(!ready && {
                                'aria-hidden': true,
                                'style': {
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                },
                            })}
                        >
                            {(() => {
                                if (!connected) {
                                    return (
                                        <Button onClick={openConnectModal}>
                                            登 陆
                                        </Button>
                                    );
                                }
                                if (chain.unsupported) {
                                    return (
                                        <button onClick={openChainModal} type="button">
                                            错误的网络
                                        </button>
                                    );
                                }
                                return (
                                    <div style={{ display: 'flex', gap: 12 }}>
                                        <button
                                            onClick={openChainModal}
                                            style={{ display: 'flex', alignItems: 'center' }}
                                            type="button"
                                        >
                                            {chain.hasIcon && (
                                                <div
                                                    style={{
                                                        background: chain.iconBackground,
                                                        width: 12,
                                                        height: 12,
                                                        borderRadius: 999,
                                                        overflow: 'hidden',
                                                        marginRight: 4,
                                                    }}
                                                >
                                                    {chain.iconUrl && (
                                                        <img
                                                            alt={chain.name ?? 'Chain icon'}
                                                            src={chain.iconUrl}
                                                            style={{ width: 12, height: 12 }}
                                                        />
                                                    )}
                                                </div>
                                            )}
                                            {chain.name}
                                        </button>
                                        <button className="primary-bth" onClick={openAccountModal} type="button">
                                            {account.displayName}
                                        </button>
                                        {userIcon}
                                    </div>
                                );
                            })()}
                        </div>
                    );
                }
            }
        </ConnectButton.Custom>
    )
}

export default AccountButton