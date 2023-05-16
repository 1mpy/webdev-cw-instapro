import {
  renderUploadImageComponent
} from "./upload-image-component.js";
import {
  uploadPost
} from "../api.js";
import {
  renderHeaderComponent
} from "./header-component.js";

export function renderAddPostPageComponent({
  appEl,
  redirectToPosts,
  getToken,
}) {
  let imageUrl = "";
  const render = () => {
    //   // TODO: Реализовать страницу добавления поста
    //   const appHtml = `
    //   <div class="page-container">
    //     <div class="header-container"></div>
    //     Cтраница добавления поста
    //     <label class="file-upload-label secondary-button">
    //       <input type="file" id="add-button" class="file-upload-input" style="display:none">
    //       Выберите фото
    //     </label>
    //     <button class="button" id="add-button">Добавить</button>
    //   </div>
    // `;

    //   appEl.innerHTML = appHtml;

    //   document.getElementById("add-button").addEventListener("click", () => {
    //     onAddPostClick({
    //       description: "Описание картинки", // нужно поле для описания ??
    //       imageUrl: "https://image.png",    // нужно поле для ссылки? сюда должна помещаться ссылка на файл? для чего ?

    //     });
    //   });

    const appHtml = `
      <div class="page-container">
        <div class="header-container"></div>
          <div class="form">
              <h3 class="form-title">
                Cтраница добавления поста
              </h3>
              <div class="form-inputs">
                  <div class="upload-image-container"></div>
                  <textarea id="image-text" name=""></textarea>          
              <div class="form-error"></div>              
              <button class="button" id="add-button">Добавить фото</button>
          </div>       
        </div>
      </div>`;
    appEl.innerHTML = appHtml;

    const setError = (message) => {
      appEl.querySelector(".form-error").textContent = message;
    };

    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });

    const uploadImageContainer = appEl.querySelector(".upload-image-container");

    if (uploadImageContainer) {
      renderUploadImageComponent({
        element: appEl.querySelector(".upload-image-container"),
        onImageUrlChange(newImageUrl) {
          imageUrl = newImageUrl;
        },
      });
    }
    document.getElementById("add-button").addEventListener("click", () => {
      setError("");
      const imageText = document.getElementById("image-text").value;

      if (!imageUrl) {
        alert("Не выбрана фотография");
        return;
      }

      if (!imageText) {
        alert("Нет описания к фотографии");
        return;
      }

      uploadPost({
          text: imageText,
          link: imageUrl,
          token: getToken()
        })
        .then(() => redirectToPosts()); //token: , text: , link: - просто ключи, могут быть рандомные имена (совпадают с теми что в api)

    });


  };

  render();
}

// 1. Сделать инпут на добавление файла с ПК, "кнопку добавления поста с файлом"
// (вероятно аналогично тому что в регистрации)
// 2. Скорее всего нужны какие-то преобразования для заливки файла на хост и что-то еще
// 3. По "кнопке добавления поста с файлом" и используя POST-запрос будет формировать новый пост
// 4. *тут что-то, что я упускаю наверняка* (описание мб)
// 5. Редирект на страницу с постами (по окончанию загрузки или как-то ещё)