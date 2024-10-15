import { FEATURED, LAYOUTS, STORYBOARDS, KPI } from './typecodes';

export const tabsList = [
    {
        id: '1',
        tab_name: FEATURED,
        label: 'Featured',
        description: 'A short description',
    },
    {
        id: '2',
        tab_name: KPI,
        label: 'KPI',
        description: 'A short description',
    },
    {
        id: '3',
        tab_name: LAYOUTS,
        label: 'Layouts',
        description: 'A short description',
    },
    {
        id: '4',
        tab_name: STORYBOARDS,
        label: 'Storyboards',
        description: 'A short description',
    },
];
export const featuredContent = [
    {
        id: '4',
        name: 'Total Sales',
        img_url:
            'https://master-vserve.s3.ap-south-1.amazonaws.com/hotel_services/1708513170-Wat%20Arun.jpg',
        description:
            'This figure represents the total revenue generated from all sales during the reporting period.',
        date: new Date(),
    },
    {
        id: '1',
        name: 'Weekly Sales',
        description: 'This is the average revenue generated per week.',
        img_url:
            'https://master-vserve.s3.ap-south-1.amazonaws.com/hotel_services/1689847071-IRD.png',
        date: new Date(),
    },
    {
        id: '2',
        name: 'Orders',
        description:
            'This number reflects the total count of orders processed within the reporting period.',
        img_url:
            'https://master-vserve.s3.ap-south-1.amazonaws.com/hotel_services/spa_demo.jpg',
        date: new Date(),
    },
    {
        id: '3',
        name: 'Total Customers',
        description:
            'This metric counts the unique customers who made purchases during the reporting period.',
        img_url:
            'https://master-vserve.s3.ap-south-1.amazonaws.com/hotel_services/1720466355-laundry1.jpeg',
        date: new Date(),
    },
];
export const trendingContent = [
    {
        id: '4',
        name: 'Impressions',
        img_url:
            'https://master-vserve.s3.ap-south-1.amazonaws.com/hotel_services/1708513170-Wat%20Arun.jpg',
        description:
            'This figure represents the total revenue generated from all sales during the reporting period.',
        date: new Date(),
    },
    {
        id: '1',
        name: 'Product pages views',
        description: 'This is the average revenue generated per week.',
        img_url:
            'https://master-vserve.s3.ap-south-1.amazonaws.com/hotel_services/1689847071-IRD.png',
        date: new Date(),
    },
    {
        id: '2',
        name: 'Coversion Rate',
        description:
            'This number reflects the total count of orders processed within the reporting period.',
        img_url:
            'https://master-vserve.s3.ap-south-1.amazonaws.com/hotel_services/spa_demo.jpg',
        date: new Date(),
    },
    {
        id: '3',
        name: 'Paying User',
        description:
            'This metric counts the unique customers who made purchases during the reporting period.',
        img_url:
            'https://master-vserve.s3.ap-south-1.amazonaws.com/hotel_services/1720466355-laundry1.jpeg',
        date: new Date(),
    },
];
export const kpiResult = [
    {
        id: 1,
        name: 'Total Sales',
        value: '$45K',
        inflated: '+4.5%',
        bgcolorClass: `bg-blue-200 `,
        colorClass:`text-blue-600 `
    },
    {
        id: 2,
        name: 'Weekly Sales',
        value: '$12K',
        inflated: '+3.5%',
        bgcolorClass: ' bg-green-200 ',
        colorClass:' text-green-600 '
    },
    {
        id: 3,
        name: 'Orders',
        value: '1,712',
        inflated: '-1.01%',
        bgcolorClass: ' bg-red-200 ',
        colorClass:' text-red-600 '
    },
    {
        id: 4,
        name: 'Total Customers',
        value: '11,712',
        inflated: '+1.5%',
        bgcolorClass: ' bg-yellow-200 ',
        colorClass:' text-yellow-600 '
    },
 
];


export const layoutTableRecords = [
    {
        name: 'Alice Johnson',
        owner: 'Path Exploration',
        last_modified: '10/10/2024',
        property: 'Salesforce'
    },
    {
        name: 'Bob Smith',
        owner: 'Market Analysis',
        last_modified: '10/09/2024',
        property: 'HubSpot'
    },
    {
        name: 'Carol White',
        owner: 'Product Development',
        last_modified: '10/08/2024',
        property: 'Zoho CRM'
    },
    {
        name: 'David Brown',
        owner: 'Customer Relations',
        last_modified: '10/07/2024',
        property: 'Pipedrive'
    },
    {
        name: 'Eva Green',
        owner: 'Data Insights',
        last_modified: '10/06/2024',
        property: 'Microsoft Dynamics'
    },
    {
        name: 'Frank Taylor',
        owner: 'Sales Strategy',
        last_modified: '10/05/2024',
        property: 'Oracle CRM'
    },
    {
        name: 'Grace Lee',
        owner: 'Operations Management',
        last_modified: '10/04/2024',
        property: 'SAP'
    },
    {
        name: 'Henry Wilson',
        owner: 'Financial Planning',
        last_modified: '10/03/2024',
        property: 'QuickBooks'
    },
    {
        name: 'Ivy Martinez',
        owner: 'E-commerce',
        last_modified: '10/02/2024',
        property: 'Shopify'
    },
    {
        name: 'Jack Robinson',
        owner: 'Digital Marketing',
        last_modified: '10/01/2024',
        property: 'Mailchimp'
    },
    {
        name: 'Kathy Garcia',
        owner: 'Market Research',
        last_modified: '09/30/2024',
        property: 'SurveyMonkey'
    },
    {
        name: 'Leo Hernandez',
        owner: 'Lead Generation',
        last_modified: '09/29/2024',
        property: 'LinkedIn Sales Navigator'
    },
    {
        name: 'Mia Scott',
        owner: 'Social Media',
        last_modified: '09/28/2024',
        property: 'Hootsuite'
    },
    {
        name: 'Noah Adams',
        owner: 'Customer Support',
        last_modified: '09/27/2024',
        property: 'Zendesk'
    },
    {
        name: 'Olivia Taylor',
        owner: 'Content Marketing',
        last_modified: '09/26/2024',
        property: 'WordPress'
    },
    {
        name: 'Paul King',
        owner: 'Inventory Management',
        last_modified: '09/25/2024',
        property: 'TradeGecko'
    },
    {
        name: 'Quinn Young',
        owner: 'Event Planning',
        last_modified: '09/24/2024',
        property: 'Eventbrite'
    },
    {
        name: 'Rita Evans',
        owner: 'Brand Development',
        last_modified: '09/23/2024',
        property: 'Canva'
    },
    {
        name: 'Steve Collins',
        owner: 'Human Resources',
        last_modified: '09/22/2024',
        property: 'BambooHR'
    },
    {
        name: 'Tina Carter',
        owner: 'Project Management',
        last_modified: '09/21/2024',
        property: 'Asana'
    },
    {
        name: 'Victor Phillips',
        owner: 'Business Development',
        last_modified: '09/20/2024',
        property: 'Salesforce Essentials'
    }
];
