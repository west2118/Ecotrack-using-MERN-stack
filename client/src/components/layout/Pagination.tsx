import React from "react";

type PaginationProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  totalPages: number;
};

const Pagination = ({
  setCurrentPage,
  currentPage,
  totalPages,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center mt-6 gap-1.5">
      <button
        className="flex items-center justify-center px-3 py-2 rounded-lg border border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Previous
      </button>

      {totalPages <= 7 ? (
        [...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`w-10 h-10 flex items-center justify-center rounded-lg border ${
              currentPage === index + 1
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-gray-200 bg-white text-gray-700 hover:bg-emerald-50"
            } transition-colors`}
            onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))
      ) : (
        <>
          {currentPage > 3 && (
            <button
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-emerald-50"
              onClick={() => setCurrentPage(1)}>
              1
            </button>
          )}
          {currentPage > 4 && <span className="px-2 text-gray-400">...</span>}

          {[
            Math.max(1, currentPage - 2),
            Math.max(2, currentPage - 1),
            currentPage,
            Math.min(totalPages - 1, currentPage + 1),
            Math.min(totalPages, currentPage + 2),
          ]
            .filter((page, index, array) => array.indexOf(page) === index)
            .map((page) => (
              <button
                key={page}
                className={`w-10 h-10 flex items-center justify-center rounded-lg border ${
                  currentPage === page
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-emerald-50"
                } transition-colors`}
                onClick={() => setCurrentPage(page)}>
                {page}
              </button>
            ))}

          {currentPage < totalPages - 3 && (
            <span className="px-2 text-gray-400">...</span>
          )}
          {currentPage < totalPages - 2 && (
            <button
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-emerald-50"
              onClick={() => setCurrentPage(totalPages)}>
              {totalPages}
            </button>
          )}
        </>
      )}

      <button
        className="flex items-center justify-center px-3 py-2 rounded-lg border border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}>
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
