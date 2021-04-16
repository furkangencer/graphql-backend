import { connection } from 'mongoose';
import connectDB from '../';
import { Author, Book, WorksAt, Publisher } from '../models';

const seed = async () => {
  console.log('Cleanning database');

  await connectDB();
  await connection.dropDatabase();

  console.log('Database clean');

  const publishers = [
    new Publisher({ name: 'Publisher 1' }),
    new Publisher({ name: 'Publisher 2' }),
  ];

  const authors = [
    new Author({ name: 'Julia' }),
    new Author({ name: 'Alexander' }),
    new Author({ name: 'Jacob' }),
    new Author({ name: 'Cynthia' }),
  ];

  // Obviously fake names
  const books = [
    new Book({ name: 'GraphQL', author: authors[0]._id }),
    new Book({ name: 'Node.js', author: authors[1]._id }),
    new Book({ name: 'Javascript', author: authors[2]._id }),
    new Book({ name: 'Building APIs with GraphQL', author: authors[3]._id }),
    new Book({ name: 'Callback hell', author: authors[0]._id }),
    new Book({ name: 'Async and await', author: authors[1]._id }),
    new Book({ name: 'Event loop', author: authors[2]._id }),
    new Book({ name: 'Typescript', author: authors[3]._id }),
  ];

  const worksAts = [
    new WorksAt({ author: authors[0]._id, publisher: publishers[0]._id }),
    new WorksAt({ author: authors[0]._id, publisher: publishers[1]._id }),
    new WorksAt({ author: authors[1]._id, publisher: publishers[1]._id }),
    new WorksAt({ author: authors[1]._id, publisher: publishers[0]._id }),
    new WorksAt({ author: authors[2]._id, publisher: publishers[0]._id }),
    new WorksAt({ author: authors[3]._id, publisher: publishers[1]._id }),
  ];

  const savings = [
    ...publishers.map((publisher) => publisher.save()),
    ...authors.map((author) => author.save()),
    ...books.map((book) => book.save()),
    ...worksAts.map((worksAt) => worksAt.save()),
  ];

  await Promise.all(savings);

  console.log('Database seeded');

  connection.close();
};

seed();