"use client";

import { Page } from "@/types/Page";

interface pageProps {
  data: Page;
}

const ReportPage: React.FC<pageProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center justify-center p-6 lg:px-4 mb-24">
      {data.report && (
        <div
          className="h-auto max-w-full flex flex-1 justify-center items-center w-full mx-auto"
          dangerouslySetInnerHTML={{ __html: data?.report }}
        />
      )}
    </div>
  );
};

export default ReportPage;
