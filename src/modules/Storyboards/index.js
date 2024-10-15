'use client';
import CreateKPI from '@/components/CreateKPI';
import Modal from '@/components/Modal';
import ReportDetailedView from '@/components/ReportDetailedView';
import { layoutTableRecords } from '@/constant';
import React, { useState } from 'react';

const index = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [createNewOpen, setCreateNewOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const download = () => {
        var content = 'This is a  dummy text file';
        var file = new File(['\ufeff' + content], `${Date.now()}.txt`, {
            type: 'text/plain:charset=UTF-8',
        });
        let url = window.URL.createObjectURL(file);
        var a = document.createElement('a');
        a.style = 'display: none';
        a.href = url;
        a.download = file.name;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    return (
        <div className='flex flex-col'>
            <div className='layout-container my-4 flex flex-col w-full gap-6'>
                <article className='featured-article my-6'>
                    <h2 className='text-4xl font-bold roboto-black'>
                        From Revenue Team
                    </h2>
                    <p className='text-md'>
                        General reports and created by you
                    </p>
                </article>
                <div className='flex flex-row gap-6 justify-start items-start'>
                    <div className='flex justify-center items-start border bg-white rounded-lg flex-col w-full mb-2 p-4 gap-1'>
                        <div className='icon bg-gray-100 rounded-full p-2 w-10 h-10 '>
                            <span className='material-symbols-outlined '>
                                calendar_month
                            </span>
                        </div>
                        <p className='text-md  text-gray-900  roboto-black '>
                            Q1 Sales Data
                        </p>
                        <p className='text-xs'>
                            Your storage will be running out soon. Get more
                            space and powerful productivity features.
                        </p>
                        <p className='text-xs'>
                            Shared By:{' '}
                            <b>Adesh Kumar - (General Manager Sales)</b>
                        </p>
                        <p className='text-xs'>
                            Date: <b>24/12/2024</b>
                        </p>
                        <div className='flex flex-row gap-2 mt-2'>
                            <div
                                className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-blue-600 text-white cursor-pointer'
                                onClick={openModal}
                            >
                                <span
                                    className='material-symbols-outlined text-sm'
                                    style={{ fontSize: '14px' }}
                                >
                                    visibility
                                </span>
                                View
                            </div>
                            <div
                                className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-black text-white cursor-pointer'
                                onClick={download}
                            >
                                <span
                                    className='material-symbols-outlined'
                                    style={{ fontSize: '14px' }}
                                >
                                    download
                                </span>
                                Download
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-start border bg-white rounded-lg flex-col w-full mb-2 p-4 gap-1'>
                        <div className='icon bg-gray-100 rounded-full p-2 w-10 h-10 '>
                            <span className='material-symbols-outlined '>
                                calendar_month
                            </span>
                        </div>
                        <p className='text-md  text-gray-900  roboto-black '>
                            Q2 Sales Data
                        </p>
                        <p className='text-xs'>
                            Your storage will be running out soon. Get more
                            space and powerful productivity features.
                        </p>
                        <p className='text-xs'>
                            Shared By:{' '}
                            <b>Adesh Kumar - (General Manager Sales)</b>
                        </p>
                        <p className='text-xs'>
                            Date: <b>24/12/2024</b>
                        </p>
                        <div className='flex flex-row gap-2 mt-2'>
                            <div
                                className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-blue-600 text-white cursor-pointer'
                                onClick={openModal}
                            >
                                <span
                                    className='material-symbols-outlined text-sm'
                                    style={{ fontSize: '14px' }}
                                >
                                    visibility
                                </span>
                                View
                            </div>
                            <div
                                className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-black text-white cursor-pointer'
                                onClick={download}
                                
                            >
                                <span
                                    className='material-symbols-outlined'
                                    style={{ fontSize: '14px' }}
                                >
                                    download
                                </span>
                                Download
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-start border bg-white rounded-lg flex-col w-full mb-2 p-4 gap-1'>
                        <div className='icon bg-gray-100 rounded-full p-2 w-10 h-10 '>
                            <span className='material-symbols-outlined '>
                                calendar_month
                            </span>
                        </div>
                        <p className='text-md  text-gray-900  roboto-black '>
                            Q3 Sales Data
                        </p>
                        <p className='text-xs'>
                            Your storage will be running out soon. Get more
                            space and powerful productivity features.
                        </p>
                        <p className='text-xs'>
                            Shared By:{' '}
                            <b>Adesh Kumar - (General Manager Sales)</b>
                        </p>
                        <p className='text-xs'>
                            Date: <b>24/12/2024</b>
                        </p>
                        <div className='flex flex-row gap-2 mt-2'>
                            <div
                                className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-blue-600 text-white cursor-pointer'
                                onClick={openModal}
                            >
                                <span
                                    className='material-symbols-outlined text-sm'
                                    style={{ fontSize: '14px' }}
                                >
                                    visibility
                                </span>
                                View
                            </div>
                            <div
                                className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-black text-white cursor-pointer'
                                onClick={download}
                            >
                                <span
                                    className='material-symbols-outlined'
                                    style={{ fontSize: '14px' }}
                                >
                                    download
                                </span>
                                Download
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-6 justify-start items-start'>
                    <div className='flex justify-center items-start border bg-white rounded-lg flex-col w-full mb-2 p-4 gap-1'>
                        <div className='icon bg-gray-100 rounded-full p-2 w-10 h-10 '>
                            <span className='material-symbols-outlined '>
                                calendar_month
                            </span>
                        </div>
                        <p className='text-md  text-gray-900  roboto-black '>
                            Q1 Revenue Data
                        </p>
                        <p className='text-xs'>
                            Your storage will be running out soon. Get more
                            space and powerful productivity features.
                        </p>
                        <p className='text-xs'>
                            Shared By:{' '}
                            <b>Adesh Kumar - (General Manager Sales)</b>
                        </p>
                        <p className='text-xs'>
                            Date: <b>24/12/2024</b>
                        </p>
                        <div className='flex flex-row gap-2 mt-2'>
                            <div
                                className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-blue-600 text-white cursor-pointer'
                                onClick={openModal}
                            >
                                <span
                                    className='material-symbols-outlined text-sm'
                                    style={{ fontSize: '14px' }}
                                >
                                    visibility
                                </span>
                                View
                            </div>
                            <div
                                className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-black text-white cursor-pointer'
                                onClick={download}
                            >
                                <span
                                    className='material-symbols-outlined'
                                    style={{ fontSize: '14px' }}
                                >
                                    download
                                </span>
                                Download
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-start border bg-white rounded-lg flex-col w-full mb-2 p-4 gap-1'>
                        <div className='icon bg-gray-100 rounded-full p-2 w-10 h-10 '>
                            <span className='material-symbols-outlined '>
                                calendar_month
                            </span>
                        </div>
                        <p className='text-md  text-gray-900  roboto-black '>
                            Q2 Revenue Data
                        </p>
                        <p className='text-xs'>
                            Your storage will be running out soon. Get more
                            space and powerful productivity features.
                        </p>
                        <p className='text-xs'>
                            Shared By:{' '}
                            <b>Adesh Kumar - (General Manager Sales)</b>
                        </p>
                        <p className='text-xs'>
                            Date: <b>24/12/2024</b>
                        </p>
                        <div className='flex flex-row gap-2 mt-2'>
                            <div
                                className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-blue-600 text-white cursor-pointer'
                                onClick={openModal}
                            >
                                <span
                                    className='material-symbols-outlined text-sm'
                                    style={{ fontSize: '14px' }}
                                >
                                    visibility
                                </span>
                                View
                            </div>
                            <div
                                className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-black text-white cursor-pointer'
                                onClick={download}
                            >
                                <span
                                    className='material-symbols-outlined'
                                    style={{ fontSize: '14px' }}
                                >
                                    download
                                </span>
                                Download
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-start border bg-white rounded-lg flex-col w-full mb-2 p-4 gap-1'>
                        <div className='icon bg-gray-100 rounded-full p-2 w-10 h-10 '>
                            <span className='material-symbols-outlined '>
                                calendar_month
                            </span>
                        </div>
                        <p className='text-md  text-gray-900  roboto-black '>
                            Q3 Revenue Data
                        </p>
                        <p className='text-xs'>
                            Your storage will be running out soon. Get more
                            space and powerful productivity features.
                        </p>
                        <p className='text-xs'>
                            Shared By:{' '}
                            <b>Adesh Kumar - (General Manager Sales)</b>
                        </p>
                        <p className='text-xs'>
                            Date: <b>24/12/2024</b>
                        </p>
                        <div className='flex flex-row gap-2 mt-2'>
                            <div
                                className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-blue-600 text-white cursor-pointer'
                                onClick={openModal}
                            >
                                <span
                                    className='material-symbols-outlined text-sm'
                                    style={{ fontSize: '14px' }}
                                >
                                    visibility
                                </span>
                                View
                            </div>
                            <div
                                className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-black text-white cursor-pointer'
                                onClick={download}
                                
                            >
                                <span
                                    className='material-symbols-outlined'
                                    style={{ fontSize: '14px' }}
                                >
                                    download
                                </span>
                                Download
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='layout-container my-4 flex flex-col w-full gap-6'>
                <article className='featured-article my-6'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <h2 className='text-4xl font-bold roboto-black'>
                                Custom Reports
                            </h2>
                            <p className='text-md'>Created by Adesh Kumar</p>
                        </div>
                        <button
                            className='flex justify-center items-center py-2 px-4 text-xs gap-1 bg-black text-white rounded-lg '
                            onClick={() => setCreateNewOpen(true)}
                        >
                            Create custom
                        </button>
                    </div>
                </article>
                <div className='flex flex-row gap-6 justify-start items-start'>
                    <div className='flex justify-center items-start border bg-white rounded-lg flex-col w-full mb-2 gap-1'>
                        <div className='flex flex-col layout-table w-full'>
                            <table className=' rounded-lg bg-white'>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th>Type</th>
                                        <th>Name</th>
                                        <th>Type of Report</th>
                                        <th>Created at</th>
                                        <th>Duration</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {layoutTableRecords.map((item) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <span className='material-symbols-outlined'>
                                                        person
                                                    </span>
                                                </td>
                                                <td>Adesh Kumar</td>
                                                <td>Funnel exploration</td>
                                                <td>
                                                    {new Date().toISOString()}
                                                </td>
                                                <td>
                                                    {new Date().toLocaleDateString()}{' '}
                                                    -{' '}
                                                    {new Date().toLocaleDateString()}{' '}
                                                </td>
                                                <td>
                                                    <div className='flex flex-row gap-2 mt-2'>
                                                        <div
                                                            className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-blue-600 text-white cursor-pointer w-6 h-6'
                                                            onClick={openModal}
                                                        >
                                                            <span
                                                                className='material-symbols-outlined text-sm'
                                                                style={{
                                                                    fontSize:
                                                                        '14px',
                                                                }}
                                                            >
                                                                visibility
                                                            </span>
                                                        </div>
                                                        <div className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-black text-white cursor-pointer w-6 h-6'>
                                                            <span
                                                                className='material-symbols-outlined'
                                                                style={{
                                                                    fontSize:
                                                                        '14px',
                                                                }}
                                                            >
                                                                download
                                                            </span>
                                                        </div>
                                                        <div className='flex justify-center items-center icon  rounded-full py-1 px-2 text-xs gap-1 bg-red-700 text-white w-6 h-6'>
                                                            <span
                                                                className='material-symbols-outlined'
                                                                style={{
                                                                    fontSize:
                                                                        '14px',
                                                                }}
                                                            >
                                                                delete
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ReportDetailedView />
            </Modal>
            <Modal
                isOpen={createNewOpen}
                onClose={() => setCreateNewOpen(false)}
            >
                <CreateKPI />
            </Modal>
        </div>
    );
};

export default index;
