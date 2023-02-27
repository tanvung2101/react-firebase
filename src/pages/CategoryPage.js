import Heading from "components/layout/Heading";
import Layout from "components/layout/Layout";
import { db } from "firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import PostItem from "module/posts/PostItem";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const [posts, setPosts] = useState([]);
  const param = useParams();
  useEffect(() => {
    async function fetchData() {
      const docRef = query(
        collection(db, "posts"),
        where("category.slug", "==", param.slug)
      );
      onSnapshot(docRef, (snapshot) => {
        const result = [];
        snapshot.forEach((doc) => {
          result.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPosts(result);
      });
    }
    fetchData();
  }, [param.slug]);
  // if (posts.length <= 0) return null;
  console.log(posts);
  return (
    <Layout>
      <div className="container">
        <Heading>Danh mục {param.slug}</Heading>
        <div className="pt-20"></div>
        <div className="grid-layout grid-layout--primary">
          {posts.map((item) => (
            <PostItem key={item.id} data={item}></PostItem>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
