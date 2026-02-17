import React, { useState } from "react";

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PaginationProps {
  posts: PostData[];
}

const Pagination = ({ posts }: PaginationProps) => {
  const [postPerPage, setPostPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentPosts = posts.slice(firstIndex, lastIndex);
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="relative flex flex-col w-full overflow-auto text-gray-700 bg-white shadow-md rounded-xl">
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th className="p-4 border-b bg-gray-100">Id</th>
              <th className="p-4 border-b bg-gray-100">Title</th>
              <th className="p-4 border-b bg-gray-100">Body</th>
            </tr>
          </thead>

          <tbody>
            {currentPosts.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center p-6">
                  No Data Found
                </td>
              </tr>
            ) : (
              currentPosts.map((item) => (
                <tr key={item.id}>
                  <td className="p-4 border-b">{item.id}</td>
                  <td className="p-4 border-b">{item.title}</td>
                  <td className="p-4 border-b">{item.body}</td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot className="bg-gray-100">
            <tr>
              <td colSpan={3} className="text-center p-6 flex gap-2 flex-row w-full">
                <button
                  disabled={currentPage === 1}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={() =>
                    setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)
                  }
                >
                  Previous
                </button>
                {Array.from({ length: Math.ceil(posts.length / postPerPage) }).map((_, index) => (
                  <button
                    key={index}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage === posts.length / postPerPage}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Pagination;
