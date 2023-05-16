import {
    USER_POSTS_PAGE
  } from "../routes.js";
  import {
    renderHeaderComponent
  } from "./header-component.js";
  import {
    posts,
    goToPage,
    renewPosts,
    getToken,
    protectHtml,
  } from "../index.js";
  import { dislikeFunc, likeFunc } from "../api.js";

  export function renderUserPostsPageComponent({ appEl, selectedUser }) {
  
    /**
     * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
     * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
     */
    console.log(posts);
    const checkUser = posts.filter(post =>  post.user.id === selectedUser );
 
    let postsHtml = checkUser
      .map((post) => {
        return `
          <li class="post">
            <div class="post-header" data-user-id="${post.user.id}">
                <img src="${post.user.imageUrl}" class="post-header__user-image">
                <p class="post-header__user-name">${post.user.name}</p>
            </div>
            <div class="post-image-container">
              <img class="post-image" src="${post.imageUrl}">
            </div>
            <div class="post-likes">
              <button data-post-id="${post.id}" data-liked="${post.isLiked}" class="like-button">
              ${
                post.isLiked
                  ? `<img src="./assets/images/like-active.svg">`
                  : `<img src="./assets/images/like-not-active.svg">`
              }
              </button>
              <p class="post-likes-text">
                Нравится: <strong>${post.likes}</strong>
              </p>
            </div>
            <p class="post-text">
              <span class="user-name">${post.user.name}</span>
              ${protectHtml(post.description)}
            </p>
            <p class="post-date">
              19 минут назад
            </p>
          </li>
          `;
      }).join("");
    const appHtml = `
      <div class="page-container">
        <div class="header-container"></div>
          <ul class="posts">
            ${postsHtml}
          </ul>
      </div>`;
  
    appEl.innerHTML = appHtml;
  
    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });
  
    for (let userEl of document.querySelectorAll(".post-header")) {
      userEl.addEventListener("click", () => {
        goToPage(USER_POSTS_PAGE, {
          userId: userEl.dataset.userId,
        });
      });
    }

    for (let likeButton of document.querySelectorAll(".like-button")) {
      likeButton.addEventListener("click", () => {
          if (likeButton.dataset.liked === "true" )
          { dislikeFunc({token:getToken(), id:likeButton.dataset.postId}).then (() => renewPosts());}  // датасет из кнопки лайка  "post-id пприводить к виду postId"
          else {
            likeFunc({token:getToken(), id:likeButton.dataset.postId}).then (() => renewPosts());
          }
      });
    }
  }