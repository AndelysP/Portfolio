import React from 'react'

import AnimatedCursor from 'react-animated-cursor'

const Cursor = () => {
    return (
        <AnimatedCursor
            color='91, 232, 201'
            innerSize={10}
            outerSize={8}
            outerStyle={{
                boxShadow: '0 0 8px #5BE8C9'
            }}
        />
    )
}

export default Cursor