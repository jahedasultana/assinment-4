import React, { useState } from "react";
import {
  BookOpen,
  User,
  Tag,
  Hash,
  FileText,
  Copy,
} from "lucide-react";
import { useCreateBooksMutation } from "../redux/api/baseApi";
import type { IBook } from "../types";

const initialForm: IBook = {
  title: "",
  author: "",
  genre: "",
  isbn: "",
  description: "",
  copies: 1,
  available: true,
};

const AddBook = () => {
  const [form, setForm] = useState<IBook>(initialForm);
  const [createBook, { isLoading, isSuccess, isError, error }] =
    useCreateBooksMutation();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "copies" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createBook(form).unwrap();
      setForm(initialForm);
    } catch (err) {
      console.log("Failed to add book:", err);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="overflow-hidden">
        {/* Header */}
        <div className="text-center pb-8 pt-8 px-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-fuchsia-600 to-violet-800 rounded-full flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold font-primary mb-2">Add New Book</h1>
          <p className="text-lg text-gray-700">
            Fill in the details to add a new book to your library
          </p>
        </div>

        {/* Form Content */}
        <div className="px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="title"
                  className="text-sm font-semibold flex items-center gap-2 text-gray-800"
                >
                  <BookOpen className="w-4 h-4 text-fuchsia-500" />
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={form.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter book title"
                  className="w-full h-11 px-4 border-2 border-gray-300 rounded-lg focus:border-fuchsia-500 focus:outline-none transition-colors duration-200 bg-white"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="author"
                  className="text-sm font-semibold flex items-center gap-2 text-gray-800"
                >
                  <User className="w-4 h-4 text-violet-500" />
                  Author
                </label>
                <input
                  id="author"
                  name="author"
                  type="text"
                  value={form.author}
                  onChange={handleChange}
                  required
                  placeholder="Enter author name"
                  className="w-full h-11 px-4 border-2 border-gray-300 rounded-lg focus:border-violet-500 focus:outline-none transition-colors duration-200 bg-white"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="genre"
                  className="text-sm font-semibold flex items-center gap-2 text-gray-800"
                >
                  <Tag className="w-4 h-4 text-lime-500" />
                  Genre
                </label>
                <select
                  id="genre"
                  name="genre"
                  value={form.genre}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border-2 border-gray-300 rounded-lg focus:border-lime-500 focus:outline-none transition-colors duration-200 bg-white"
                >
                  <option value="">Select genre</option>
                  <option value="FICTION">Fiction</option>
                  <option value="NON_FICTION">Non-Fiction</option>
                  <option value="SCIENCE">Science</option>
                  <option value="HISTORY">History</option>
                  <option value="BIOGRAPHY">Biography</option>
                  <option value="FANTASY">Fantasy</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="isbn"
                  className="text-sm font-semibold flex items-center gap-2 text-gray-800"
                >
                  <Hash className="w-4 h-4 text-pink-500" />
                  ISBN
                </label>
                <input
                  id="isbn"
                  name="isbn"
                  type="text"
                  value={form.isbn}
                  onChange={handleChange}
                  required
                  placeholder="Enter ISBN"
                  className="w-full h-11 px-4 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-200 bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="description"
                className="text-sm font-semibold flex items-center gap-2 text-gray-800"
              >
                <FileText className="w-4 h-4 text-indigo-500" />
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                placeholder="Enter book description"
                className="w-full min-h-[100px] px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors duration-200 resize-none bg-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="copies"
                  className="text-sm font-semibold flex items-center gap-2 text-gray-800"
                >
                  <Copy className="w-4 h-4 text-teal-500" />
                  Number of Copies
                </label>
                <input
                  id="copies"
                  name="copies"
                  type="number"
                  value={form.copies}
                  min={0}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors duration-200 bg-white"
                />
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-fuchsia-600 to-violet-800 hover:from-violet-700 hover:to-fuchsia-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Adding Book...
                  </>
                ) : (
                  <>
                    <BookOpen className="w-5 h-5" />
                    Add Book to Library
                  </>
                )}
              </button>
              {isSuccess && (
                <div className="text-green-600 mt-2">
                  Book added successfully!
                </div>
              )}
              {isError && (
                <div className="text-red-600 mt-2">
                  Failed to add book.{" "}
                  {("data" in (error as { data?: { message?: string } })
                    ? (error as { data?: { message?: string } }).data?.message
                    : "") || ""}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
