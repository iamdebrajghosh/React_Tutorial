import React from 'react'

function Container({ Children }) {
    return <div className='w-full max-w-7xl mx-auto p-4'>{Children}</div>;
}

export default Container
