import React from 'react';
import { motion } from 'motion/react';

export default function SkeletonLoader() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 sm:py-20 min-h-[60vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      {/* Title & Subtitle Skeleton */}
      <div className="space-y-4 mb-12 sm:mb-16">
        <div className="h-4 w-28 bg-gray-900 border border-gray-800/60 rounded-full animate-pulse flex items-center px-3">
          <div className="h-1.5 w-1.5 rounded-full bg-primary/50 mr-2 animate-ping" />
          <div className="h-2 w-16 bg-gray-800 rounded" />
        </div>
        <div className="h-10 sm:h-12 w-2/3 max-w-md bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl animate-pulse" />
        <div className="h-4 w-full max-w-xl bg-gray-900/80 rounded-xl animate-pulse" />
      </div>

      {/* Grid Content Skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div 
            key={item} 
            className="rounded-2xl border border-gray-900 bg-surface/20 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden"
          >
            {/* Shimmer absolute bar */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center">
                  <div className="h-4 w-4 bg-gray-800 rounded" />
                </div>
                <div className="h-3 w-12 bg-gray-900 rounded" />
              </div>

              <div className="space-y-3">
                <div className="h-5 w-3/4 bg-gray-900 rounded-lg" />
                <div className="h-3 w-full bg-gray-900/60 rounded" />
                <div className="h-3 w-5/6 bg-gray-900/60 rounded" />
              </div>

              <div className="h-8 w-24 bg-gray-900/80 rounded-xl border border-gray-800/40 mt-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
