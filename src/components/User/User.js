import React, { useEffect, useState } from 'react'
import './User.css'

const User = ({userName}) => {

    const [resourceType, setResourceType] = useState("dashboard")
    useEffect(() => { 
    }, [resourceType])

    return (
        <div className="dash">
            <div className="resources">
            <div className="user-name">{`User`}</div>
                <div className="buttons">
                    <button className="btn dashborad" onClick={() => setResourceType('dashboard')}>{"dashboard"}</button>
                    <button className="btn leadership" onClick={() => setResourceType('leadership')}>{"Leadership"}</button>
                    <button className="btn xp" onClick={() => setResourceType('xp')}>{"XP"}</button>
                </div>
                <h1>
                    {resourceType}
                </h1>
            </div>
        </div>
    )
}

export default User
