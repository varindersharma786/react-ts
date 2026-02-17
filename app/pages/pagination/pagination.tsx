import React from "react";

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
            {posts.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center p-6">
                  No Data Found
                </td>
              </tr>
            ) : (
              posts.map((item) => (
                <tr key={item.id}>
                  <td className="p-4 border-b">{item.id}</td>
                  <td className="p-4 border-b">{item.title}</td>
                  <td className="p-4 border-b">{item.body}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pagination;
