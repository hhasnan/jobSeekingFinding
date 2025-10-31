import React from 'react'
import { RotateLoader } from 'react-spinners'

const Spinner = ( { loading } ) => {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "#432dd7",
    }
    return (
        <>
            <RotateLoader
                color="#432dd7"
                loading={loading}
                cssOverride={override}
                size={100}
            />
        </>
    )
}

export default Spinner