import { usePathname, useRouter } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { startTransition, useEffect, useState } from 'react';
export default function Pagination({
  total,
  limit,
  currentPage,
  totalPage
}: {
  total: number;
  limit: number;
  currentPage: number;
  totalPage: number;
}) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const [page, setPage] = useState(0);

  const from = (currentPage - 1) * limit + 1;
  const to = currentPage * limit;
  const items = Array(totalPage).fill(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (page) {
      params.set('page', page.toString());
    } else {
      params.delete('page');
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  }, [pathname, page, replace]);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{from}</span> to{' '}
            <span className="font-medium">{to}</span> of{' '}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {items.map((item, index) => (
              <a
                key={index}
                onClick={() => setPage(index + 1)}
                className={`relative items-center px-4 py-2 text-sm  font-semibold cursor-pointer ${
                  currentPage - 1 === index
                    ? 'z-10 inline-flex bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    : 'hidden text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'
                } `}
              >
                {index + 1}
              </a>
            ))}
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

Pagination.defaultProps = {
  total: 1,
  limit: 1,
  currentPage: 1,
  totalPage: 1
};
