import React, { useEffect, useState } from "react";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import useAxiosPrivate from "../../../lib/hooks/useAxiosPrivate";
import { useMutation } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table/Table";

const TransactionPage = () => {
  // for pagination
  const [currPage, setCurrPage] = useState(1);
  const dataPerpage = 5;
  const lastIndex = currPage * dataPerpage;
  const firstIndex = lastIndex - dataPerpage;

  // transaction data state
  const [data, setData] = useState([]);
  // hook for getting a list of transactions
  const axiosPrivate = useAxiosPrivate();

  const useTransactionList = useMutation({
    mutationFn: () => {
      return axiosPrivate.post("transaction-manager/v1/admin/dashboard/search");
    },
  });

  useEffect(() => {
    useTransactionList.mutate("", {
      onSuccess: (data) => {
        setData([...data?.data?.data]);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }, []);

  const records = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / dataPerpage);
  const num = [...Array(nPage + 1).keys()].slice(1);

  // for going to previous page
  function previousPage() {
    if (currPage !== 1) {
      setCurrPage((curr) => curr - 1);
    }
  }

  // change by number
  function goToPage(id) {
    setCurrPage(id);
  }

  // for going to next page
  function nextPage() {
    if (currPage !== nPage) {
      setCurrPage((curr) => curr + 1);
    }
  }

  return (
    <>
      <section className="flex flex-row items-center w-full h-12 gap-4 px-10 text-sm font-medium rounded-md shrink-0 bg-background">
        <span className="text-gray-500">Dashboard</span>
        <FaAngleRight className="text-gray-500" />
        <button type="button">Transaction</button>
      </section>
      <section className="w-full bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">S.N.</TableHead>
              <TableHead>Full Name (Sender)</TableHead>
              <TableHead>Full Name (Receiver)</TableHead>
              <TableHead>Current Status</TableHead>
              <TableHead>Sent Amount</TableHead>
              <TableHead>Sent Country</TableHead>
              <TableHead>Received Amount</TableHead>
              <TableHead>Received Country</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records?.map((item, i) => (
              <TableRow key={item?.id}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell>{item["Sender Full Name"]}</TableCell>
                <TableCell>{item["Receiver Full Name"]}</TableCell>
                <TableCell>{item["Current Status"]}</TableCell>
                <TableCell>{item["Send Amount"]}</TableCell>
                <TableCell>{item["Send Country"]}</TableCell>
                <TableCell>{item["Receive Amount"]}</TableCell>
                <TableCell>{item["Receive Country"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex flex-row items-center justify-end gap-4 mt-3 text-gray-400">
          <button
            onClick={previousPage}
            className="flex flex-row gap-2 text-sm font-semibold items-center px-3 py-1.5 hover:bg-gray-100 rounded-md hover:text-gray-600"
          >
            prev
          </button>
          <div>
            {num?.map((n) => (
              <button
                key={n}
                onClick={() => goToPage(n)}
                className="p-2 text-sm font-semibold rounded-md hover:bg-gray-100 hover:text-gray-600"
              >
                {n}
              </button>
            ))}
          </div>
          <button
            onClick={nextPage}
            className="flex flex-row gap-2 text-sm font-semibold items-center px-3 py-1.5 hover:bg-gray-100 rounded-md hover:text-gray-600"
          >
            next
          </button>
        </div>
      </section>
    </>
  );
};

export default TransactionPage;
