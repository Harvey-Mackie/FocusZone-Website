import React from 'react';

function BrandLogo() {
  return (
    <svg className="brand-logo" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 22c2-4 6-6 8-6s6 2 8 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="14" r="2" fill="currentColor" />
    </svg>
  );
}

export default BrandLogo;
