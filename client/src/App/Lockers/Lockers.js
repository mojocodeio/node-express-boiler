import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

/** actions */
import { fetchLockers } from './actions'

function Lockers({
    fetchLockers,
    lockers = [],
    limit = 3,
    isLoading,
    activePage = 0,
}) {
    const [page, setActivePage] = useState(activePage)
    useEffect(() => {
        fetchLockers(page, limit)
    }, [page, limit])

    if(isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div>
            {lockers.slice((page * limit), page*limit+limit).map(locker => {
                return (
                    <div key={locker._id} id={locker._id}>
                        <h4>{locker.number}</h4>
                        <button>Rent</button>
                    </div>
                )
            })}
            <div>
                <button
                    onClick={() => setActivePage(page - 1)}
                    disabled={page === 0}
                >
                    Prev
                </button>
                <span>{activePage}</span>
                <button
                    onClick={() => setActivePage(page + 1)}
                >
                    Prev
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.lockers.isLoading,
        lockers: state?.lockers?.lockerData?.docs,
        activePage: state?.lockers?.lockerData?.offset,
        limit: state?.lockers?.lockerData?.limit,
    }
}

const mapDispatchToProps = {
    fetchLockers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Lockers)
