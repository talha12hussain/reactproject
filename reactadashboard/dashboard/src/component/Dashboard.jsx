import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from '../component/TransactionChart'
import BuyerProfilePieChart from '../component/BuyerProfilePieChart'
import RecentOrders from '../component/RecentOrders'
import PopularProducts from '../component/PopularProducts'


export default function Dashboard() {
  return (
    <div className=' flex flex-col gap-4'>
      
      <DashboardStatsGrid/>
      <div className='flex flex-row gap-4 w-full'>
        <TransactionChart/>
        <BuyerProfilePieChart/>
      </div>
     
		
    </div>
  )
}

