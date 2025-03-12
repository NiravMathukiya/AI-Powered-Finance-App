import React, { Suspense } from 'react'
import DashboardPage from './page'

const DashboardLayout = () => {
    return (
        <div className='px-5 py-8'>
            <h1 className='text-6xl font-bold tracking-tighter bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Dashboard
            </h1>
            <Suspense fallback={
                <div className="flex  justify-center items-center h-32"> 
                    <span className="animate-spin h-10 w-10 border-t-4 border-blue-600 rounded-full"></span>
                </div>
            }>
                <DashboardPage />
            </Suspense>
        </div>
    )
}

export default DashboardLayout