import React from "react";
import Article from "./Article.js"


function ArticleList({posts}){

    const postElements = posts.map((post) => {
      return <main>
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
      </main>
    
    })
      return(
        <main>{postElements}</main>
      )
    }

    export default ArticleList;