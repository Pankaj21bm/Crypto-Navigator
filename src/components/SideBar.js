import React from 'react'
import GetStartedCard from './GetStartedCard'
import SideTrendingCoins from './SideTrendingCoins'

function SideBar({ trendingData }) {
    return (
        <>
            <GetStartedCard />
            <SideTrendingCoins trendingData={trendingData} />
        </>
    )
}

export default SideBar