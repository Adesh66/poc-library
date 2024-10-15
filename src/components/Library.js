'use client';
import React from 'react';
import { tabsList } from '@/constant';
import { useState } from 'react';
import KPIModule from '@/modules/KPI/index';
import Featured from '@/modules/Featured/index';
import Layouts from '@/modules/Layouts/index';
import Storyboards from '@/modules/Storyboards/index';
import { FEATURED, LAYOUTS, STORYBOARDS, KPI } from '@/constant/typecodes';

const Library = () => {
    const [activeTab, setActiveTab] = useState(FEATURED);

    const tabChangesHandler = (tab) => {
        setActiveTab(tab.toLowerCase());
    };
    return (
        <div className='tab-section w-full'>
            <div className='tabs w-full'>
                <div className='tabs-wrapper flex bg-gray-300 w-full rounded-xl gap-2'>
                    {tabsList.map((tab, index) => (
                        <div
                            key={tab.id}
                            className={
                                'tab px-4 py-2 rounded-lg flex-1 justify-center items-center text-center cursor-pointer font-medium text-lg hover:bg-gray-400 ' +
                                (activeTab.toLowerCase() ===
                                tab.tab_name.toLowerCase()
                                    ? ' bg-white text-black shadow-sm hover:bg-white'
                                    : ' text-gray-500')
                            }
                            onClick={() => tabChangesHandler(tab.tab_name)}
                        >
                            {tab.label}
                        </div>
                    ))}
                </div>
            </div>
            <div className='tab-content'>
                {activeTab === FEATURED && <Featured />}
                {activeTab === KPI && <KPIModule />}
                {activeTab === LAYOUTS && <Layouts />}
                {activeTab === STORYBOARDS && <Storyboards />}
            </div>
        </div>
    );
};

export default Library;
