import Library from '@/components/Library';
import Search from '@/components/Search';

export default function Home() {
    return (
        <div className='flex items-center flex-col justify-items-center min-h-screen pt-6'>
            <div className='container'>
                <div className='flex items-center flex-col justify-items-center pt-6 max-w-screen-lg m-auto'>
                    <h1 className='text-5xl font-bold mb-2 roboto-black'>
                        Library
                    </h1>
                    <p className='text-xl font-regular '>
                        Browse for assets needed to report and present analysis.
                    </p>
                    <Search />
                    <Library />
                </div>
            </div>
        </div>
    );
}
