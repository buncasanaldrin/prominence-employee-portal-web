import React from "react";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";

type Props = {
  limit?: number;
  currentPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<Props> = ({
  limit = 5,
  currentPage,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / limit);
  const maxPagesToShow = 5;

  let startPage: number, endPage;

  if (totalPages <= maxPagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    // When in the first 3 pages
    if (currentPage <= 3) {
      startPage = 1;
      endPage = maxPagesToShow;
    }
    // When in the last 3 pages
    else if (currentPage >= totalPages - 2) {
      startPage = totalPages - 4;
      endPage = totalPages;
    }
    // All other cases
    else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  const startItem = (currentPage - 1) * limit + 1;
  const endItem =
    currentPage === Math.ceil(totalItems / limit)
      ? totalItems
      : currentPage * limit;

  return (
    <div className="mt-[30px] flex items-center justify-between">
      <h5 className="text-[14px] font-[400] leading-[22px] text-[#808191]">
        Showing {startItem} to {endItem}
      </h5>

      <div className="max-w-[295px]">
        <div className="flex items-center">
          <button
            className="text-[#808191]"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <CaretLeftIcon height={25} width={25} />
          </button>
          {[...Array(endPage - startPage + 1).keys()].map((i) => {
            const pageNumber = startPage + i;
            return (
              <button
                key={pageNumber}
                className={`flex h-[36px] w-[35px] cursor-pointer items-center justify-center rounded-[5px] ${
                  pageNumber === currentPage
                    ? "bg-[#475BE8] text-[#FCFCFC]"
                    : "text-[#808191]"
                }`}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            className="text-[#808191]"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <CaretRightIcon height={25} width={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
