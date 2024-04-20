import React from 'react'

function Title({ children, title = '', subTitle = '' }) {
    return (
        <div className='text-slate-900 dark:text-slate-50 my-14 px-4'>
            <h1 className='text-3xl font-bold mb-2'>{title || children}</h1>
            {subTitle && <p>{subTitle}</p>}
        </div>
    )
}

export default Title