import { Book } from '../../../db/models';

const bookQueries = {
  books: async (_, args, { loaders }) => {
    const books = await Book.find();
    return loaders.book.many(books.map(({ id }) => id));
  },
  book: async (_, { id }, { loaders }) => loaders.book.one(id),
};

export default bookQueries;