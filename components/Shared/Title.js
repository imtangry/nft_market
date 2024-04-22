import React from 'react'

function Title({ children, title = '', subTitle = '', button }) {
    return (
        <div className='text-slate-900 dark:text-slate-50 my-14 px-4 flex items-center justify-between'>
            <div>
                <h1 className='text-3xl font-bold mb-2'>{title || children}</h1>
                {subTitle && <p>{subTitle}</p>}
            </div>
            <div className='text-lg'>
                {button}
            </div>
        </div>
    )
}

export default Title