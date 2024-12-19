import ListingItem from '@/components/ListingItem';
import Link from 'next/link';

export default async function Home() {
  let rentListings = null;
  try {
    const result = await fetch(process.env.URL + '/api/listing/get', {
      method: 'POST',
      body: JSON.stringify({
        type: 'rent',
        limit: 4,
        order: 'asc',
      }),
      cache: 'no-store',
    });
    const data = await result.json();
    rentListings = data;
  } catch (error) {
    rentListings = { title: 'Failed to load listing' };
  }
  let saleListings = null;
  try {
    const result = await fetch(process.env.URL + '/api/listing/get', {
      method: 'POST',
      body: JSON.stringify({
        type: 'sale',
        limit: 4,
        order: 'asc',
      }),
      cache: 'no-store',
    });
    const data = await result.json();
    saleListings = data;
  } catch (error) {
    saleListings = { title: 'Failed to load listing' };
  }
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Discover the <span className='text-slate-500'>perfect</span> place
          <br />
          to call home.
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          Whether you want to buy or rent,
          <br />
          We have a wide range of properties available for you.
        </div>
        <Link
          href={'/browse'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Let&apos;s get started...
        </Link>
      </div>
      <div className=' flex justify-center'>
        <img
          src='https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_640.jpg'
          className='w-full max-w-[1920px] h-[550px] object-cover'
        />
      </div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>
                Recent listings for rent
              </h2>
              {/* <Link
                className='text-sm text-blue-800 hover:underline'
                href={'/browse?type=rent&parking=true'}
              >
                Show more places for rent
              </Link> */}
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing.id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>
                Recent listings for sale
              </h2>
              {/* <Link
                className='text-sm text-blue-800 hover:underline'
                href={'/browse?type=sale&parking=true'}
              >
                Show more places for sale
              </Link> */}
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}