import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_CATEGORIES, QUERY_CATEGORY_IMAGES } from "../../utils/queries";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import ImageCarousel from "../ImageCarousel";
import { List, Container, Segment, Header, Button } from "semantic-ui-react";
import Jumbotron from "../Jumbotron";

function UserProfile() {
  const {loading: loadingUser, data: userData } = useQuery(QUERY_USER);
  const user = userData?.user || [];

  const { loading: categoryLoading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  const categoryMappings = {};

  console.log(categoryData)

  if (categoryData) {
    categoryData.categories.forEach(category => {
      categoryMappings[category.scoreCategory] = category._id;
    });
  }
  
  const [combinedImages, setCombinedImages] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const topCategoriesObj = user.userScore;
      console.log(topCategoriesObj);
      let sortable = [];
      for (var category in topCategoriesObj) {
        sortable.push([category, topCategoriesObj[category]]);
      }
      sortable.shift();
      const topCategoriesSorted = sortable.sort(function (a, b) {
        return b[1] - a[1];
      });

      const ids = topCategoriesSorted.slice(0, 3).map((entry) => entry[0]);
      setCategoryIds(ids);

      const names = topCategoriesSorted.slice(0, 3).map((entry) => entry[1]);
      setCategoryNames(names);

      const categoryImages = await Promise.all(
        ids.map(async (scoreCategory) => {
          
          const categoryId = categoryMappings[scoreCategory];

          console.log(categoryId);
          try {
            const response = await fetch(`/art/${categoryId}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                query: `
                  query {
                    categoryImages(categoryId: "${categoryId}") {
                      _id
                      src
                      artist
                      category {
                        name
                        description
                      }
                    }
                  }
                `,
              }),
            });

            const data = await response.json();
            return data.data.categoryImages;
          } catch (error) {
            console.error("Error fetching category images:", error);
            return [];
          }
        })
      );
      const combined = categoryImages.flat();
      setCombinedImages(combined);
    };

    if (!loadingUser) {
      fetchData();
    }
  }, [loadingUser, user]);

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      Auth.logout();
    } catch (e) {
      console.log(e);
    }
  };

  if(!loadingUser){
    if (Auth.loggedIn()){
      return (
        <Container >
          <Segment.Group horizontal>
            <Segment horizontal textAlign="center">
              <h1 font-size="50px">{user.firstName} {user.lastName}</h1>
              <Segment textAlign="center">
                <Button onClick={handleLogout}>Log Out</Button>
              </Segment>
            </Segment>
              
            <Segment textAlign="center">
              <Header>Top Art Styles</Header>
              <List>
                {combinedImages.slice(0, 3).map((image, index) => (
                  <List.Item key={index}>
                    <Link
                      to={`/art/${categoryIds[index]}`}
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {categoryNames[index]}
                    </Link>
                  </List.Item>
                ))}
              </List>
            </Segment>
          </Segment.Group>
          <Segment.Group >
            <Segment textAlign="center">
              <Header>Top Art Pieces</Header>
            </Segment>
            <Segment> 
              <ImageCarousel images={combinedImages.map((image) => image.src)} />
            </Segment>
          </Segment.Group>
        </Container>
      );
    } else {
      return (
        <Jumbotron>
          <h1>You Are Not Logged In!</h1>
          <Button
            className="primary"
            name="login"
            as={Link}
            to="/login"
          >
            Login Here
          </Button>
          <Button
            className="secondary"
            name="signup"
            as={Link}
            to="/signup"
          >
            Signup
          </Button>
        </Jumbotron>
      );
    }
  }
}

export default UserProfile;
