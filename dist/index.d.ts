import React from 'react';

interface HelloProps {
  children: React.ReactNode;
}
declare const Hello: React.FC<HelloProps>;

interface HiProps {
  children: React.ReactNode;
}
declare const Hi: React.FC<HiProps>;

declare const index_d_Hello: typeof Hello;
declare const index_d_Hi: typeof Hi;
declare namespace index_d {
  export { index_d_Hello as Hello, index_d_Hi as Hi };
}

export { index_d as Components };
