import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Profile } from '../index'
import Image from 'next/image';
import { useAccount } from 'wagmi'
import { useSignMessage } from 'wagmi'
import { useVerifyMessage } from 'wagmi'

import image from '@/assets/image';
import { useEffect } from 'react';
const User = ({ profile, openProfile }) => {
    const { address } = useAccount()
    const { signMessage } = useSignMessage()
    const login = false
    useEffect(() => {
        if (address) {
            // 通过签名和account 获取最新token
            const message = [
                'Welcome to NFTMarket!',
                'This request will not trigger a blockchain transaction or cost any gas fees.',
                `Wallet address: ${address}`,
                'Nonce: 932bad5a-9064-4e4e-8e1c-5f0de46d84f0'
            ].join('\r\n\r\n')
            signMessage({ message }, {
                onSuccess: (data) => {
                    const result = useVerifyMessage({
                        address,
                        message,
                        signature: data,
                    })

                    console.log("signature", data);
                    console.log("result", result);
                }, onError(data) { console.log('error', data); }
            })
        }
    }, [address])

    const handleLogin = ({ address, message, signature }) => {
        // 获取签名消息
        // 后端检验签名消息 成功则set cookie


    }
    return (
        <div className='flex mx-2 relative'>
            <ConnectButton modalSize='compact' label='登 陆' />
            {
                login && <div className='p-2 rounded-full bg-slate-200 hover:bg-slate-100 cursor-pointer'>
                    <Image src={image.user1} width='24' height='24' alt='USER ICON' onClick={openProfile} />
                </div>
            }

            {profile && <Profile />}
        </div>
    )
}

export default User