import CreateAccountDrawer from '@/components/CreateAccountDrawer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
// import { Drawer } from '@/components/ui/drawer'
import React from 'react'

const DashboardPage = () => {
    return (
        <div className='px-5'>
            {/* Budget Progress */}

            {/* DashBoard OverView */}

            {/* Accounts Grid */}

            <div className='grid gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3'>
                <CreateAccountDrawer>

                    <Card className={"hover:shadow-md transition-shadow cursor-pointer border-dashed"}>
                        <CardContent className={"flex flex-col items-center justify-center text-muted-foreground h-full pt-5"}>
                            <Plus className='h-10 w-10 mb-2'/>
                            <p className='text-sm font-medium '>Add New Account</p>
                        </CardContent>
                    </Card>

                </CreateAccountDrawer>
            </div>
        </div>
    )
}

export default DashboardPage
