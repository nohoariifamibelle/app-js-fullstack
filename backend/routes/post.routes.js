const express = require("express");
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost } = require("../controllers/post.controller");
const router = express.Router();

//Récupérer tous les posts
router.get("/", getPosts);
//Créer un post
router.post("/", setPosts);
//Récupérer un post
router.put("/:id", editPost);
//Supprimer un post
router.delete("/:id", deletePost);
//Liker un post
router.patch("/like-post/:id", likePost);
//Disliker un post
router.patch("/dislike-post/:id", dislikePost);


module.exports = router