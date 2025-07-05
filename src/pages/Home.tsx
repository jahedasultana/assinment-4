import { Link } from "react-router";
import { useGetBooksQuery } from "../redux/api/baseApi";
import type { IBook } from "../types";
import Loading from "../components/Loading";

const placeholderImg =
  "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=30&auto=format&w=600&h=400&fit=crop&dpr=2";

const Home = () => {
  const { data, isLoading, isError } = useGetBooksQuery({ limit: 50 });
  const books = data?.data || [];

  if (isLoading) return <Loading />;

  if (isError) {
    return (
      <div className="text-center text-red-600 mt-8">Failed to load books.</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center font-primary text-gray-900">
        Library Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books && books.length > 0 ? (
          books.map((book: IBook) => (
            <Link
              to={`/book/${book._id}`}
              key={book._id}
              className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition p-3 flex flex-col"
            >
              <div className="relative h-36 w-full rounded-md overflow-hidden mb-3">
                <img
                  src={placeholderImg}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = placeholderImg;
                  }}
                />
                <span
                  className={`absolute top-2 right-2 text-xs font-semibold px-2 py-0.5 rounded-full text-white select-none ${book.genre === "FICTION"
                    ? "bg-blue-600"
                    : book.genre === "NON_FICTION"
                      ? "bg-gray-700"
                      : book.genre === "SCIENCE"
                        ? "bg-violet-600"
                        : book.genre === "HISTORY"
                          ? "bg-yellow-600"
                          : book.genre === "BIOGRAPHY"
                            ? "bg-pink-600"
                            : book.genre === "FANTASY"
                              ? "bg-purple-600"
                              : "bg-gray-500"
                    }`}
                >
                  {book.genre}
                </span>
              </div>
              <h2 className="text-lg font-semibold font-primary text-gray-900 mb-1 truncate">
                {book.title}
              </h2>
              <p className="text-sm text-gray-700 mb-1 truncate">
                <span className="font-semibold">Author:</span> {book.author}
              </p>
              <p className="text-sm text-gray-600 mb-2 truncate">
                <span className="font-semibold">ISBN:</span> {book.isbn}
              </p>
              <div className="flex justify-between items-center text-xs font-semibold text-gray-600 mt-auto pt-2 border-t border-gray-200">
                <span>Copies: {book.copies}</span>
                <span
                  className={`${book.available && book.copies > 0
                    ? "text-green-600"
                    : "text-red-600"
                    }`}
                >
                  {book.available && book.copies > 0 ? "Available" : "Unavailable"}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            No books found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
