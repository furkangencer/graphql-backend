import { Publisher } from '../../../db/models';

const publisherQueries = {
  publishers: async (_, args, { loaders }) => {
    const publishers = await Publisher.find();
    return loaders.publisher.many(publishers.map(({ id }) => id))
  },
  publisher: async (_, { id }, { loaders }) => loaders.publisher.one(id),
};


export default publisherQueries;