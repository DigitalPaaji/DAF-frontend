import React, { Suspense } from "react";
import ProductCompo from "./ProductCompo";

const ProductsPageSkeleton = () => {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#312A26]">
      {/* Banner Skeleton */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#E8E3DF] px-4 py-20 md:min-h-[390px]">
        <div className="flex flex-col items-center">
          <div className="mb-4 h-10 w-56 animate-pulse rounded bg-[#D8D0CA] md:h-14 md:w-80" />
          <div className="h-3 w-32 animate-pulse rounded bg-[#D8D0CA]" />
        </div>
      </section>

      <section className="px-4 py-12 md:px-12 md:py-16 xl:px-72">
        {/* Category Tabs Skeleton */}
        <div className="mb-9 flex gap-7 overflow-hidden border-b border-[#DDD4C8] pb-4">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="h-3 min-w-20 animate-pulse rounded bg-[#E8E3DF]"
            />
          ))}
        </div>

        {/* Toolbar Skeleton */}
        <div className="mb-8 flex items-center justify-between border-b border-[#DDD4C8] pb-6">
          <div className="h-4 w-40 animate-pulse rounded bg-[#E8E3DF]" />

          <div className="h-9 w-36 animate-pulse rounded bg-[#E8E3DF]" />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] xl:grid-cols-[250px_1fr]">
          {/* Filters Skeleton */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              <div>
                <div className="mb-5 h-4 w-24 animate-pulse rounded bg-[#D8D0CA]" />

                <div className="space-y-4">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <div className="h-4 w-4 animate-pulse rounded-full bg-[#E8E3DF]" />
                      <div className="h-3 w-28 animate-pulse rounded bg-[#E8E3DF]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#DDD4C8] pt-8">
                <div className="mb-5 h-4 w-20 animate-pulse rounded bg-[#D8D0CA]" />

                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-9 w-14 animate-pulse rounded bg-[#E8E3DF]"
                    />
                  ))}
                </div>
              </div>

              <div className="border-t border-[#DDD4C8] pt-8">
                <div className="mb-5 h-4 w-24 animate-pulse rounded bg-[#D8D0CA]" />

                <div className="grid grid-cols-2 gap-3">
                  <div className="h-10 animate-pulse rounded bg-[#E8E3DF]" />
                  <div className="h-10 animate-pulse rounded bg-[#E8E3DF]" />
                </div>

                <div className="mt-3 h-10 w-full animate-pulse rounded bg-[#D8D0CA]" />
              </div>
            </div>
          </aside>

          {/* Products Skeleton */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-2.5 sm:p-4"
              >
                <div className="mb-4 aspect-square animate-pulse rounded-lg bg-[#E8E3DF]" />

                <div className="mb-3 h-4 w-3/4 animate-pulse rounded bg-[#E8E3DF]" />

                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="h-5 w-16 animate-pulse rounded bg-[#E8E3DF]" />
                  <div className="h-8 w-16 animate-pulse rounded bg-[#E8E3DF]" />
                </div>

                <div className="h-10 w-full animate-pulse rounded bg-[#D8D0CA]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const ProductsPage = () => {
  return (
    <Suspense fallback={<ProductsPageSkeleton />}>
      <ProductCompo />
    </Suspense>
  );
};

export default ProductsPage;