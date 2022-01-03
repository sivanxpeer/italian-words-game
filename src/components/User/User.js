import { Button, ButtonGroup } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './User.css'

const User = () => {
    const [resourceType, setResourceType] = useState("dashboard")

    useEffect(() => { }, [resourceType])

    return (
        <div className="resources" style={{ height: '100vh', width: '40%', backgroundColor: 'black', color: 'white' }}>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button onClick={() => setResourceType('dashboard')}>{"dashboard"}</Button>
                <Button onClick={() => setResourceType('leadership')}>{"Leadership"}</Button>
                <Button onClick={() => setResourceType('xp')}>{"XP"}</Button>
            </ButtonGroup>
            {/* <button className="dashboard" onClick={() => setResourceType('dashboard')}>{"dashboard"}</button> */}
            {/* <button onClick={() => setResourceType('leadership')}>{"Leadership"}</button> */}
            {/* <button onClick={() => setResourceType('xp')}>{"XP"}</button> */}
            <h1>
                {resourceType}
            </h1>
        </div>
    )
}

export default User
