import { gql } from '@apollo/client';


export const QUERY_CATEGORY_IMAGES = gql`
  query CategoryImages($categoryId: ID!) {
    categoryImages(categoryId: $categoryId) {
      _id
      src
      artist
      category {
        name
        description
      }
    }
  }
`;

export const QUERY_CATEGORY = gql`
  query CategoryImages($id: ID) {
    category(_id: $id) {
      name
      description
      scoreCategory
      _id
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
      scoreCategory
      description
      image {
        _id
        src
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      userScore {
        abstract
        artDeco
        artNouveau
        conceptual
        constructivism
        expressionism
        gothic
        impressionism 
        midCentury
        minimalism
        modernism
        neoclassicism
        popArt
        postModern
        realism
        renaissance
        romanticism
        rustic
        streetSymbolism
        surrealism
      }
    }
  }
`;

export const QUERY_QUESTIONS = gql`
query Questions {
  questions {
    _id
    text
    image {
      _id
      src
    }
  }
}`

export const QUERY_IMAGES = gql `
query Images {
  images {
    src
    _id
    category {
      _id
      name
      description
      scoreCategory
    }
    
  }
}`