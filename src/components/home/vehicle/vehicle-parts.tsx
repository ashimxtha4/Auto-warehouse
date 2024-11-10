'use client'

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useVehicleParts } from '@/hooks/vehicle-parts.hook';
import VehiclePartsList from './vehicle-parts-list';
import { useGetProductList } from '@/services/api/api-service/product/product-list';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import AutoGlassPagination from '@/utils/autoglass-pagination';

const VehicleParts = () => {
  const { setShowFilterProduct, showFilterProduct } = useVehicleParts();
  const { data, isLoading } = useGetProductList();
  const productList = data?.data;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { vehicleBodyData, vehicleGroupData, vehicle } = useSearchVehicles();
  const filteredVehicleBodyData = vehicleBodyData?.filter(
    item => item.name !== '#N/A'
  );

  const handleSearchFilter = (id: number) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set('position', id.toString());

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
  };

  const handlePageChange = (page: number) => {
    updateQueryParams('page', page.toString());
  };

  return (
    <section className='my-4 flex gap-5 border-t pt-4'>
      {isLoading && <LoadingSpinner />}
      {vehicle && (
        <aside className='hidden max-w-[120px] flex-1 md:block'>
          <Card className='bg-white shadow-lg rounded-lg'>
            <CardHeader
              className='cursor-pointer border-b py-2 font-medium text-green-700 bg-gray-100 hover:bg-gray-200 transition-colors'
              onClick={() => setShowFilterProduct(prev => !prev)}
            >
              Filter Products
            </CardHeader>
            {showFilterProduct && (
              <CardContent className='flex flex-col gap-1 p-3'>
                {vehicleGroupData?.map(item => (
                  <button
                    onClick={() => handleSearchFilter(item.id)}
                    key={item.id}
                    className='p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-green-700 transition-colors'
                  >
                    {item.name}
                  </button>
                ))}
              </CardContent>
            )}
          </Card>

          <Card className='mt-4 bg-white shadow-lg rounded-lg'>
            <CardHeader className='border-b py-2 font-medium text-green-700 bg-gray-100'>
              Categories
            </CardHeader>
            <CardContent className='flex flex-col gap-2 p-3'>
              {filteredVehicleBodyData?.map(item => (
                <Link
                  key={item.id}
                  href={`/shop?type=${item.id}`}
                  className='block p-2 text-center rounded-md text-gray-700 hover:bg-gray-100 hover:text-green-700 transition-colors'
                >
                  {item.name}
                </Link>
              ))}
            </CardContent>
          </Card>
        </aside>
      )}

      <div className='flex-1'>
        <VehiclePartsList productList={productList} />
        <div className='my-4'>
          {data?.data.length ? (
            <AutoGlassPagination
              currentPage={data?.meta?.current_page || 1}
              itemsPerPage={data?.meta.per_page as number}
              totalItems={data?.meta.total as number}
              onPageChange={handlePageChange}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
};

export default VehicleParts;
