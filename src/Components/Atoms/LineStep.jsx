import React from 'react';

export default function LineStep({ numberstep }) {
  return (
    <>
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
        {numberstep}
      </div>
    </>
  );
}
