import React from 'react';
import { Bar } from 'react-chartjs-2';
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
const ReportDetailedView = () => {
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
    return (
        <div className='flex flex-col w-full gap-4 p-4'>
            <div className='w-full flex justify-center items-center '>
                <div className='w-14 h-14 bg-gray-200 rounded-lg flex justify-center items-center'>
                    <span className='material-symbols-outlined'>dashboard</span>
                </div>
            </div>
            <div className='w-full flex justify-center items-center gap-6 flex-col'>
                <div className='flex flex-col'>
                    <h2 className='text-4xl font-bold roboto-bold text-center flex gap-2 items-center justify-center'>
                        Q1 Sales Data
                        <span className='bg-gray-200 text-gray-500 text-sm py-1 px-2 rounded-md roboto-medium'>
                            Projection vs actual
                        </span>
                    </h2>
                    <p className='text-sm text-center text-gray-500'>
                        Key drivers included a successful product launch and
                        effective marketing campaigns that boosted customer
                        engagement.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-md text-center text-black'>
                        In Q1 2023, our sales team achieved a total revenue of
                        $500,000, marking a 15% increase compared to Q2 2023.
                        This growth was driven primarily by the successful
                        launch of our new product line, which accounted for 30%
                        of total sales.
                    </p>
                </div>
                <div className='flex flex-row gap-1'>
                    <span className='fle justify-center items-center border px-2 py-1 text-sm rounded-md bg-gray-200'>
                        #Comms
                    </span>
                    <span className='fle justify-center items-center border px-2 py-1 text-sm rounded-md bg-gray-200'>
                        #Coverage
                    </span>
                    <span className='fle justify-center items-center border px-2 py-1 text-sm rounded-md bg-gray-200'>
                        #Stakeholders
                    </span>
                    <span className='fle justify-center items-center border px-2 py-1 text-sm rounded-md bg-gray-200'>
                        #Sales
                    </span>
                    <span className='fle justify-center items-center border px-2 py-1 text-sm rounded-md bg-gray-200'>
                        #Growth
                    </span>
                    <span className='fle justify-center items-center border px-2 py-1 text-sm rounded-md bg-gray-200'>
                        #Revenue
                    </span>
                </div>
                <div className='flex flex-row gap-1 w-full my-4'>
                    <div className='flex flex-col py-4  border-r flex-1 w-full'>
                        <h4 className='text-lg font-bold roboto-bold text-center flex gap-2 items-center justify-center'>
                            2485
                        </h4>
                        <p className='text-sm text-center text-gray-500'>
                            Used
                        </p>
                    </div>
                    <div className='flex flex-col py-4  border-r flex-1 w-full'>
                        <h4 className='text-lg font-bold roboto-bold text-center flex gap-2 items-center justify-center'>
                            Universal
                        </h4>
                        <p className='text-sm text-center text-gray-500'>
                            Type
                        </p>
                    </div>
                    <div className='flex flex-col py-4  border-r flex-1 w-full'>
                        <h4 className='text-lg font-bold roboto-bold text-center flex gap-2 items-center justify-center'>
                            6
                        </h4>
                        <p className='text-sm text-center text-gray-500'>
                            Pages No.
                        </p>
                    </div>
                    <div className='flex flex-col py-4 flex-1 w-full'>
                        <h4 className='text-lg font-bold roboto-bold text-center flex gap-2 items-center justify-center'>
                            07/04/2023
                        </h4>
                        <p className='text-sm text-center text-gray-500'>
                            last Updated
                        </p>
                    </div>
                </div>
                <div className='flex w-full'>
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
                </div>
                <div className='w-full flex flex-col'>
                    <div className='text-xl font-bold roboto-bold'>
                        Business Question
                    </div>

                    <div className='cards-wrapper flex w-full'>
                        <div className='card flex flex-row bg-gray-100 rounded-lg overflow-hidden gap-2 p-2'>
                            <div className='flex flex-col w-full justify-center items-start'>
                                <div className='text-lg font-medium text-gray-900 '>
                                    What factors contribute to increased sales?
                                </div>
                                <div className='subtitle text-xs text-gray-500 turncate'>
                                    Answer: Increased sales can be attributed to
                                    effective marketing strategies, product
                                    quality, customer engagement, seasonal
                                    promotions, and competitive pricing.
                                </div>
                            </div>
                        </div>
                        <div className='card flex flex-row bg-gray-100 rounded-lg overflow-hidden gap-2 p-2'>
                            <div className='flex flex-col w-full justify-center items-start'>
                                <div className='text-lg font-medium text-gray-900 '>
                                    How can upselling and cross-selling impact
                                    sales?
                                </div>
                                <div className='subtitle text-xs text-gray-500 turncate'>
                                    Answer: Upselling and cross-selling can
                                    significantly boost sales by encouraging
                                    customers to purchase higher-value items or
                                    additional products, increasing overall
                                    transaction value and customer satisfaction.
                                </div>
                            </div>
                        </div>
                        <div className='card flex flex-row bg-gray-100 rounded-lg overflow-hidden gap-2 p-2'>
                            <div className='flex flex-col w-full justify-center items-start'>
                                <div className='text-lg font-medium text-gray-900 '>
                                    How can we improve customer retention?
                                </div>
                                <div className='subtitle text-xs text-gray-500 turncate'>
                                    Answer: Customer retention can be improved
                                    through personalized communication, loyalty
                                    programs, excellent customer service, and
                                    regular follow-ups to gather feedback and
                                    address concerns.
                                </div>
                            </div>
                        </div>
                        <div className='card flex flex-row bg-gray-100 rounded-lg overflow-hidden gap-2 p-2'>
                            <div className='flex flex-col w-full justify-center items-start'>
                                <div className='text-lg font-medium text-gray-900 '>
                                    What metrics should we track to measure
                                    sales performance?
                                </div>
                                <div className='subtitle text-xs text-gray-500 turncate'>
                                    Answer: Key metrics to track include total
                                    sales revenue, average order value,
                                    conversion rate, customer acquisition cost,
                                    and sales growth rate over specific periods.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row gap-2'>
                    <button className='flex justify-center items-center py-2 px-4 text-xs gap-1 bg-blue-600 text-white rounded-lg '>
                        Add to Favorites
                    </button>
                    <button className='flex justify-center items-center py-2 px-4 text-xs gap-1 bg-blue-600 text-white rounded-lg '>
                        Copy
                    </button>
                    <button className='flex justify-center items-center py-2 px-4 text-xs gap-1 bg-blue-600 text-white rounded-lg '>
                        Download
                    </button>
                   
                    <button className='flex justify-center items-center py-2 px-4 text-xs gap-1 bg-blue-600 text-white rounded-lg '>
                        Add to layout
                    </button>
                   
                </div>
            </div>
        </div>
    );
};

export default ReportDetailedView;
