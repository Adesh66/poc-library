import { useToast } from '@/context/ToastContext';
import React from 'react';

const CreateKPI = ({ onClose }) => {
    const addToast = useToast();

    const submitClickHandler = () => {
        addToast( {message:'Thank you for submitting! Our team will review your submissions.'})
        onClose()
    }
    return (
        <div className='bg-white rounded-lg px-4 w-full py-4'>
            <h2 className='text-2xl font-semibold mb-6 text-left'>
                Add KPI to your dashboard
            </h2>

            <form>
                <div className='mb-4'>
                    <label
                        className='block text-sm font-medium text-gray-700'
                        for='creatorName'
                    >
                        Creator Name
                    </label>
                    <input
                        type='text'
                        id='creatorName'
                        className='border rounded-lg px-4 py-3 w-full'
                        placeholder='Enter your name'
                        required
                    />
                </div>
                <div className='flex flex-row gap-2'>
                    <div className='mb-4 w-full'>
                        <label
                            className='block text-sm font-medium text-gray-700'
                            for='creatorEmail'
                        >
                            Creator Email
                        </label>
                        <input
                            type='email'
                            id='creatorEmail'
                            className='border rounded-lg px-4 py-3 w-full'
                            placeholder='Enter your email'
                            required
                        />
                    </div>

                    <div className='mb-4 w-full'>
                        <label
                            className='block text-sm font-medium text-gray-700'
                            for='reportName'
                        >
                            Report Name
                        </label>
                        <input
                            type='text'
                            id='reportName'
                            className='border rounded-lg px-4 py-3 w-full'
                            placeholder='Enter report name'
                            required
                        />
                    </div>
                </div>
                <div className='flex flex-row gap-2'>
                    <div className='mb-4 w-full'>
                        <label
                            className='block text-sm font-medium text-gray-700'
                            for='reportType'
                        >
                            Report Type
                        </label>
                        <select
                            id='reportType'
                            className='border rounded-lg px-4 py-3 w-full'
                            required
                        >
                            <option value=''>Select report type</option>
                            <option value='type1'>Type 1</option>
                            <option value='type2'>Type 2</option>
                        </select>
                    </div>

                    <div className='mb-4 w-full'>
                        <label
                            className='block text-sm font-medium text-gray-700'
                            for='chartType'
                        >
                            Chart Type
                        </label>
                        <select
                            id='chartType'
                            className='border rounded-lg px-4 py-3 w-full'
                            required
                        >
                            <option value=''>Select chart type</option>
                            <option value='bar'>Bar</option>
                            <option value='line'>Line</option>
                        </select>
                    </div>
                </div>

                <div className='mb-4'>
                    <label
                        className='block text-sm font-medium text-gray-700'
                        for='jsonFile'
                    >
                        Upload JSON Input File
                    </label>
                    <input
                        type='file'
                        id='jsonFile'
                        className='mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600'
                        accept='.json'
                        required
                    />
                </div>

                <div className='mb-4'>
                    <label
                        className='block text-sm font-medium text-gray-700'
                        for='note'
                    >
                        Add a Note
                    </label>
                    <textarea
                        id='note'
                        rows='3'
                        className='border rounded-lg px-4 py-3 w-full'
                        placeholder='Add any additional notes...'
                    ></textarea>
                </div>

                <div className='flex justify-end gap-2 mt-6'>
                    <button
                        type='submit'
                        className='flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700'
                        onClick={submitClickHandler}
                    >
                        Submit
                    </button>
                    <button
                        type='button'
                        className='flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 '
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateKPI;
