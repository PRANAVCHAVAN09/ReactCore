import React, { ComponentType, useState } from 'react'
import Profile from './Profile'
import Intrest from './Intrest'
import Settings from './Settings'

import { TabsType, TabProps, FormData } from "../interfaces/ProjectTypes"

const Maintab = () => {

    const [tabIndex, SetTabIndex] = useState<number>(0)

    const [userData, setUserData] = useState<FormData>({
        name: "",
        email: "",
        age: 0,
        intrestArray: ['Cricket', 'Football'],
        settings: 'dark'
    })

    const tabs: TabsType[] = [
        {
            name: "Profile",
            component: Profile
        },
        {
            name: "Intrest",
            component: Intrest
        },
        {
            name: "Settings",
            component: Settings
        }

    ]

    const ActiveTabRender: ComponentType<TabProps> = tabs[tabIndex]?.component

    const handelTabChnage = (index: number, e: React.MouseEvent<HTMLDivElement>): void => {
        SetTabIndex(index);
    }

    const HandlePreviousTab = (): void => {
        SetTabIndex((prev) => (prev > 0 ? prev - 1 : prev));

    }

    const HandleNextTab = (): void => {
        SetTabIndex((prev) => (prev < tabs.length - 1 ? prev + 1 : prev));
    }

    return (
        <>
            <div className='Container'>
                <h1>MainTAB</h1>
                <div className='InnterDiv'>
                    <div className='Tabs'>
                        {
                            tabs.map((item, index) => (
                                <>
                                    <div className='TabOptions' onClick={(e) => handelTabChnage(index, e)}>
                                        {item?.name}
                                    </div>

                                </>
                            ))
                        }
                    </div>
                    <div >
                        {ActiveTabRender && <ActiveTabRender userData={userData} setUserData={setUserData} />}
                    </div>
                    <div className='ButtonSection'>
                        {tabIndex != 0 ? <button onClick={HandlePreviousTab} >Previous</button> : ""}
                        <button onClick={HandleNextTab}>Next</button>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Maintab