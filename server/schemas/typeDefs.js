const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
    scoreCategory: String
    description: String
    images: [Image]
  }

  type Image {
    _id: ID
    src: String
    artist: String
    category: Category
  }

  type UserScore {
    _id: ID
    abstract: Int
    artDeco: Int
    artNouveau: Int
    conceptual: Int
    constructivism: Int
    expressionism: Int
    gothic: Int
    impressionism: Int
    midCentury: Int
    minimalism: Int
    modernism: Int
    neoclassicism: Int
    popArt: Int
    postModern: Int
    realism: Int
    renaissance: Int
    romanticism: Int
    rustic: Int
    streetSymbolism: Int
    surrealism: Int
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    userScore: UserScore
  }

  type Auth {
    token: ID
    user: User
  }

  input UserScoreInput {
    _id: ID
    abstract: Int
    artDeco: Int
    artNouveau: Int
    conceptual: Int
    constructivism: Int
    expressionism: Int
    gothic: Int
    impressionism: Int
    midCentury: Int
    minimalism: Int
    modernism: Int
    neoclassicism: Int
    popArt: Int
    postModern: Int
    realism: Int
    renaissance: Int
    romanticism: Int
    rustic: Int
    streetSymbolism: Int
    surrealism: Int
  }

  input CategoryImagesInput {
    _id: ID
    name: String
    scoreCategory: String
    description: String
    images: [ImageInput]
  }
  
  input ImageInput {
    src: String
    artist: String
  }

  type Query {
    categories: [Category]
    category(_id: ID): Category
    categoryImages(categoryId: ID!): Category
    images: [Image]
    image(_id: ID): Image
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, userScore: UserScoreInput ): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateUserScore(rating: Int, category: String): User
    updateCategory(category: CategoryImagesInput, images: [ImageInput]): Category
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

