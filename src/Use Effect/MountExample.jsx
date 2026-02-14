import React, { useEffect } from 'react'

const MountExample = () => {
    useEffect(()=> {
        console.log("Component Loaded")
    }, []);
  return (
    <div>
        Check the console for mount message

    </div>
  )
}

export default MountExample