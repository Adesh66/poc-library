'use client';
import CreateKPI from '@/components/CreateKPI';
import Modal from '@/components/Modal';
import React, { useState } from 'react';
import funnerImg from '../../assets/funnel.png';
import crosstab from '../../assets/crosstab.png';
import pathing from '../../assets/pathing.png';
import Image from 'next/image';
import { layoutTableRecords } from '@/constant';
const index = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className='flex flex-col'>
            <div className='layout-container my-4 flex flex-col w-full'>
                <article className='featured-article my-6'>
                    <h2 className='text-4xl font-bold roboto-black'>Explore</h2>
                    <p className='text-md'>Start a new exploration</p>
                </article>
                <div className='flex flex-row gap-4 justify-start items-start'>
                    <div
                        className='flex justify-center items-start cursor-pointer flex-1 flex-col'
                        onClick={openModal}
                    >
                        <div className='flex justify-center items-center border bg-white rounded-lg flex-col h-40 w-full mb-2'>
                            <span className='material-symbols-outlined'>
                                add
                            </span>
                        </div>
                        <div className='text-md font-medium text-gray-900 '>
                            Blank
                        </div>
                        <div className='text-xs text-gray-500 '>
                            Create a new exploration
                        </div>
                    </div>
                    <div
                        className='flex justify-center items-start cursor-pointer flex-1 flex-col'
                        onClick={openModal}
                    >
                        <div className='freeform flex justify-center items-center border bg-white rounded-lg flex-col h-40 w-full mb-2'>
                            <Image src={funnerImg} alt='funnerImg' />
                        </div>
                        <div className='text-md font-medium text-gray-900 '>
                            Free form
                        </div>
                        <div className='text-xs text-gray-500 '>
                            What insights can you uncover with custom charts and
                            tables?
                        </div>
                    </div>
                    <div
                        className='flex justify-center items-start cursor-pointer flex-1 flex-col'
                        onClick={openModal}
                    >
                        <div className='funnel flex justify-center items-center border bg-white rounded-lg flex-col h-40 w-full mb-2'>
                            <Image src={crosstab} alt='crosstab' />
                        </div>
                        <div className='text-md font-medium text-gray-900 '>
                            Funnel exploration
                        </div>
                        <div className='text-xs text-gray-500 '>
                            What user journeys can you analyze, segment, and
                            breakdown with multi-step funnels?
                        </div>
                    </div>
                    <div
                        className='flex justify-center items-start cursor-pointer flex-1 flex-col'
                        onClick={openModal}
                    >
                        <div className='path flex justify-center items-center border bg-white rounded-lg flex-col h-40 w-full mb-2'>
                            <Image src={pathing} alt='pathing' />
                        </div>
                        <div className='text-md font-medium text-gray-900 '>
                            Path exploration
                        </div>
                        <div className='text-xs text-gray-500 '>
                            What user journeys can you uncover with tree graphs?
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-8 layout-table'>
                    <table className='border  rounded-lg bg-white'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Type</th>
                                <th>Name</th>
                                <th>Owner</th>
                                <th>Last modified</th>
                                <th>Property</th>
                            </tr>
                        </thead>
                        <tbody>
                            {layoutTableRecords.map((item,index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <span className='material-symbols-outlined'>
                                                person
                                            </span>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.owner}</td>
                                        <td>
                                            {new Date(
                                                item.last_modified
                                            ).toISOString()}
                                        </td>
                                        <td>{item.property}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <CreateKPI onClose={closeModal} />
            </Modal>
        </div>
    );
};

export default index;
