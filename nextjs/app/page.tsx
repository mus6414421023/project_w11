import Link from "next/link";
import TableData from "@/components/tabledata";
import TableDataBook from "@/components/tabledatabooks";
import { Suspense } from "react";
import { Spinner } from "@/components/spinner";

export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5 flex-col">
        <h1 className="text-4xl font-bold">Next.js 14 Laravel 11 CRUD Mysql</h1>
        <h3 className="text-4xl font-bold">6414421016 warathep tanyaruk</h3>
      </div>    
        <div className="overflow-x-auto">
          <div className="mb-2 w-full text-right">
            <Link
              href="/user/create"
              className="btn btn-primary mr-2">
              Create user
            </Link>
            <Link
             href="/book/create"
             className="btn btn-primary"
            >
              Create book
            </Link>
          </div>
          <div>
            <h1 className="text-4xl">User Data</h1>
          <Suspense fallback={<Spinner />}>
            <TableData/>
          </Suspense>
          </div>
          <div className="mt-5">
            <h1 className="text-4xl">Book Data</h1>
          <Suspense fallback={<Spinner />}>
            <TableDataBook/>
          </Suspense>
          </div>
      </div>  
    </div>
  );
}