import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
export default function Distribution() {
  return (
    <div className="s-w px-4 max-md:px-8 ">
      {/* left */}
      <div className="flex max-md:block justify-between items-start gap-5 relative">
        <div className="w-1/2 max-md:w-full">
          <Image
            src={basePath + '/step-1.png'}
            alt="image"
            width={596}
            height={652}
            className=" md:absolute left-0 top-0"
            priority // 高优先级,预加载
          />
        </div>
        <div className="w-1/2 max-md:w-full">
          <div className="max-md:pb-4">
            <span className="bg-blue-50 text-[#2468f2] border-blue-200 rounded-xl inline-block px-2 py-0.5 leading-tight text-xs lg:text-sm font-medium border">
              Data for leads, contacts, and accounts
            </span>
            <h3 className="mt-4 text-foreground text-2xl font-bold leading-[32px] max-md:text-lg max-md:leading-8">
              Enrich your data with company details
            </h3>
            <p className="mt-4 text-muted-foreground text-lg leading-[28px] max-md:text-sm max-md:leading-6">
              Clearbits APIs provide you with the data you need to close more
              deals, faster.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-[28px] max-md:text-sm max-md:leading-6">
              Starting with the most precise data sources, we then incorporate
              all other available sources to offer you the optimal combination
              of accuracy and coverage.
            </p>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex max-md:block flex-row-reverse justify-between items-start gap-5 relative">
        <div className="w-1/2 max-md:w-full">
          <Image
            src={basePath + '/step-1.png'}
            alt="image"
            width={596}
            height={652}
            className=" md:absolute"
            priority // 高优先级,预加载
          />
        </div>
        <div className="w-1/2 max-md:w-full md:mt-[30%]">
          <div className="max-md:pb-4">
            <span className="bg-blue-50 text-[#2468f2] border-blue-200 rounded-xl inline-block px-2 py-0.5 leading-tight text-xs lg:text-sm font-medium border">
              Data for leads, contacts, and accounts
            </span>
            <h3 className="mt-4 text-foreground text-2xl font-bold leading-[32px] max-md:text-lg max-md:leading-8">
              Enrich your data with company details
            </h3>
            <p className="mt-4 text-muted-foreground text-lg leading-[28px] max-md:text-sm max-md:leading-6">
              Clearbits APIs provide you with the data you need to close more
              deals, faster.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-[28px] max-md:text-sm max-md:leading-6">
              Starting with the most precise data sources, we then incorporate
              all other available sources to offer you the optimal combination
              of accuracy and coverage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
