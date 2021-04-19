import { Author } from '../../../db/models';

const authorQueries = {
  authors: async (_, args, { loaders }) => {
    const authors = await Author.find();
    return loaders.author.many(authors.map(({ id }) => id));
  },
  author: async (_, { id }, { loaders }) => loaders.author.one(id),
};

export default authorQueries;