'use client';
import React, { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import Modal from '@/components/Modal';
import ReportDetailedView from '@/components/ReportDetailedView';
import { useDispatch, useSelector } from 'react-redux';
import {
    commonSelector,
    fetchFeaturedContent,
} from '@/store/slices/commonSlice';
import CreateKPI from '@/components/CreateKPI';

const index = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [createNewOpen, setCreateNewOpen] = useState(false);

    const dispatch = useDispatch();
    const { loading, error, featuredList } = useSelector(commonSelector);

    useEffect(() => {
        dispatch(fetchFeaturedContent());
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className='featured-container my-4 flex flex-col w-full'>
            <article className='featured-article my-6'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-col'>
                        <h2 className='text-4xl font-bold roboto-black'>
                            Featured
                        </h2>
                        <p className='text-md'>
                            Curated top picks of this week
                        </p>
                    </div>
                    <button
                        className='flex justify-center items-center py-2 px-4 text-xs gap-1 bg-black text-white rounded-lg '
                        onClick={() => setCreateNewOpen(true)}
                    >
                        Request
                    </button>
                </div>

                <div className='cards-wrapper'>
                    {loading ? (
                        <Loader count={4} />
                    ) : error ? (
                        <p>{error}</p>
                    ) : featuredList.featuredContent?.length === 0 ? (
                        <p>No Data Found!</p>
                    ) : (
                        featuredList.featuredContent?.map((item, index) => (
                            <DisplayCardforFeatured
                                key={item.id}
                                item={item}
                                openModal={openModal}
                            />
                        ))
                    )}
                </div>
            </article>
            <article className='featured-article my-6'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-col'>
                        <h2 className='text-4xl font-bold roboto-black'>
                            Trending
                        </h2>
                        <p className='text-md'>Most popular by community</p>
                    </div>
                    <button
                        className='flex justify-center items-center py-2 px-4 text-xs gap-1 bg-black text-white rounded-lg '
                        onClick={() => setCreateNewOpen(true)}
                    >
                        Request
                    </button>
                </div>
                <div className='cards-wrapper'>
                    {loading ? (
                        <Loader count={4} />
                    ) : error ? (
                        <p>{error}</p>
                    ) : featuredList.trendingContent?.length === 0 ? (
                        <p>No Data Found!</p>
                    ) : (
                        featuredList.trendingContent?.map((item, index) => (
                            <DisplayCardforFeatured
                                key={item.id}
                                item={item}
                                openModal={openModal}
                            />
                        ))
                    )}
                </div>
            </article>
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

export const DisplayCardforFeatured = (props) => {
    const { item = {}, openModal } = props;
    return (
        <div className='card flex flex-row bg-white border rounded-lg overflow-hidden gap-2 p-2'>
            <div className='w-32 h-24 bg-gray-300 rounded-lg flex justify-center items-center'>
                <span className='material-symbols-outlined'>dashboard</span>
            </div>
            <div className='flex flex-col w-full justify-center items-start'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <div className='text-lg font-medium text-gray-900 '>
                        {item.name}
                    </div>
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
                </div>
                <div className='subtitle text-xs text-gray-500 turncate'>
                    {item.description}
                </div>
                <div className='subtitle text-xs text-gray-900 roboto-bold'>
                    {new Date().toDateString()}
                </div>
            </div>
        </div>
    );
};
