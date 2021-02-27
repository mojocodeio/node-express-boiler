import React, { useEffect } from 'react'
import { connect } from 'react-redux';

/** actions */
import { fetchLockers } from './actions'

function Lockers({
    fetchLockers,
}) {
    useEffect(() => {
        fetchLockers()
    }, [])
    return (
        <div>
            hello
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         isLoading: state.lockers.isLoading,

//     }
// }

const mapDispatchToProps = {
    fetchLockers,
}

export default connect(null, mapDispatchToProps)(Lockers)
