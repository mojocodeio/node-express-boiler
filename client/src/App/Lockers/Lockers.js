import React, { useEffect } from 'react'
import { connect } from 'react-redux';

/** actions */
import { fetchLockers } from './actions'

function Lockers() {
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

}

export default connect()(Lockers)
