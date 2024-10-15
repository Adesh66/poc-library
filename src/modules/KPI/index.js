'use clinet';
import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    LineElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { getKPIResult } from '@/services/apiservices';
import Loader from '@/components/Loader';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
ChartJS.register(
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const labels = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug'];
const data = {
    labels: labels,
    datasets: [
        {
            // Title of Graph
            label: 'Projected Revenue',
            data: [38991, 29442, 23423, 76529, 24231, 46434, 134234, 23423],
            backgroundColor: ['#3774ff'],
            barPercentage: 0.5,
        },
        {
            // Title of Graph
            label: 'Actual Revenue',
            data: [34534, 45345, 142367, 67657, 45645, 78977, 78676, 12322],
            backgroundColor: ['#c7ebff'],
            borderWidth: 1,
            barPercentage: 0.5,
        },
        // insert similar in dataset object for making multi bar chart
    ],
};
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};
const index = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [kpiResult, setKpiResult] = useState([]);

    useEffect(() => {
        fetchFeaturedContent();
    }, []);

    const fetchFeaturedContent = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await getKPIResult();
            setKpiResult(response);
        } catch (error) {
            setError('Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col'>
            <p className='d-none text-red-600 text-green-600  bg-green-200 bg-blue-200  text-blue-600 bg-yellow-200   text-yellow-600'></p>
            <div className='layout-container my-4 flex flex-col w-full gap-6'>
                <article className='featured-article my-6'>
                    <h2 className='text-4xl font-bold roboto-black'>
                        Dashboard
                    </h2>
                    <p className='text-md'>Start a new exploration</p>
                </article>
                <div className='flex flex-row gap-6 justify-start items-start'>
                    {loading ? (
                        <Loader count={4} />
                    ) : error ? (
                        <p>{error}</p>
                    ) : kpiResult?.length === 0 ? (
                        <p>No Data Found!</p>
                    ) : (
                        kpiResult.map((item) => {
                            return (
                                <div
                                    className='flex justify-center items-start border bg-white rounded-lg flex-col w-full mb-2 p-4 gap-1'
                                    key={item.id}
                                >
                                    <p className='text-sm  text-gray-900 '>
                                        {item.name}
                                    </p>
                                    <p className='text-3xl font-bold roboto-black'>
                                        {item.value}
                                    </p>
                                    <div className='flex flex-row gap-2 justify-start items-center'>
                                        <p
                                            className={`${item.bgcolorClass} ${item.colorClass} text-xs px-3 rounded-full py-1`}
                                        >
                                            {item.inflated}
                                        </p>
                                        <p className='text-xs text-gray-500 '>
                                            Since last month
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
                <div className='chats-container flex flex-row gap-6 justify-start items-start'>
                    <div className='chart-card flex justify-center items-start border bg-white rounded-lg flex-col w-full mb-2 p-4 gap-1'>
                        <div className='text-xl font-bold roboto-bold'>
                            Projection vs actual
                        </div>
                        <p className='text-sm'>
                            Actual earnings vs projected earnings
                        </p>
                        <div className='w-full  mt-4'>
                            <Bar data={data} options={options} />
                        </div>
                    </div>
                    <div className='chart-card flex justify-center items-start border bg-white rounded-lg flex-col w-full mb-2 p-4 gap-1'>
                        <div className='text-xl font-bold roboto-bold'>
                            Returning customer rate
                        </div>
                        <p className='text-sm'>
                            Rate of customers returning to your shop over time
                        </p>
                        <div className='w-full mt-4'>
                            <LineChart data={data} options={options} />
                        </div>
                    </div>
                </div>
                <div className='chats-container flex flex-row gap-6 justify-start items-start'>
                    <div className='chart-card flex justify-center items-start border bg-white rounded-lg flex-col w-full mb-2 p-4 gap-1'>
                        <div className='text-xl font-bold roboto-bold'>
                            Total Sales
                        </div>
                        <p className='text-sm'>
                            A big overview about your monthly sales
                        </p>
                        <div className='w-full mt-4'>
                            <TotalSales data={data} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;

const LineChart = () => {
    // X - axis lable
    const labels = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug'];

    // Data want to show on chart
    const datasets = [0, 45, 67, 43, 89, 34, 67, 43];

    const data = {
        labels: labels,
        datasets: [
            {
                // Title of Graph
                label: 'Fourth Time',
                data: datasets,
                fill: false,
                borderColor: '#3774ff',
                tension: 0.1,
            },
            {
                // Title of Graph
                label: 'Third Time',
                data: [10, 15, 37, 53, 39, 44, 37, 53],
                fill: false,
                borderColor: '#c7ebff',
                tension: 0.1,
            },
            {
                // Title of Graph
                label: 'Second Time',
                data: [4, 35, 27, 23, 79, 24, 27, 23],
                fill: false,
                borderColor: '#0097eb',
                tension: 0.1,
            },
            // insert similar in dataset object for making multi line chart
        ],
    };

    // To make configuration
    const options = {
        scales: {
            y: {
                title: {
                    display: true,
                },
                display: true,
                min: 10,
            },
            x: {
                title: {
                    display: true,
                },
                display: true,
            },
        },
    };

    return (
        <div className='w-full'>
            <Line data={data} options={options} />
        </div>
    );
};
const TotalSales = () => {
    // X - axis lable
    const labels = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug'];

    // Data want to show on chart

    const data = {
        labels: labels,
        datasets: [
            {
                // Title of Graph
                label: 'Total sales',
                data: [
                    18991, 129442, 223423, 176529, 124231, 246434, 134234,
                    123423,
                ],
                borderColor: '#3774ff',
                tension: 0.1,
                fill: true,
            },

            // insert similar in dataset object for making multi line chart
        ],
    };

    // To make configuration
    const options = {
        scales: {
            y: {
                title: {
                    display: true,
                },
                display: true,
                min: 10,
            },
            x: {
                title: {
                    display: true,
                },
                display: true,
            },
        },
    };

    return (
        <div className='w-full'>
            <Line data={data} options={options} />
        </div>
    );
};
