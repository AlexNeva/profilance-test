import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid';

const articles = [
  {
    id: uniqid(),
    createDate: '2022-04-21T13:36:13.543Z',
    title: 'Статья 1',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis rem, magnam ad quos corrupti tempora? Temporibus sequi earum magni saepe vel hic blanditiis voluptatibus impedit. Ratione porro facere laboriosam rerum odio similique dolorem ex doloribus enim. Totam tempore qui accusantium impedit dolor doloremque doloribus quasi, aliquid nesciunt veniam nobis quia, ipsum possimus quis eaque. Suscipit culpa saepe excepturi vel aut? Nostrum minus earum vel enim asperiores sint obcaecati impedit, at quidem, velit, excepturi esse error ea fugiat. Omnis autem repudiandae ea harum! Animi architecto commodi numquam fugiat mollitia officiis, voluptates tempora quod quas, in natus hic esse, rerum inventore enim?',
    confirm: true,
  },
  {
    id: uniqid(),
    createDate: '2022-04-21T11:36:13.543Z',
    title: 'Статья 2',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis rem, magnam ad quos corrupti tempora? Temporibus sequi earum magni saepe vel hic blanditiis voluptatibus impedit. Ratione porro facere laboriosam rerum odio similique dolorem ex doloribus enim. Totam tempore qui accusantium impedit dolor doloremque doloribus quasi, aliquid nesciunt veniam nobis quia, ipsum possimus quis eaque. Suscipit culpa saepe excepturi vel aut?',
    confirm: true,
  },
  {
    id: uniqid(),
    createDate: '2022-03-21T15:40:13.543Z',
    title: 'Статья 3',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis rem, magnam ad quos corrupti tempora? Temporibus sequi earum magni saepe vel hic blanditiis voluptatibus impedit. Ratione porro facere laboriosam rerum odio similique dolorem ex doloribus enim. Totam tempore qui accusantium impedit dolor doloremque doloribus quasi, aliquid nesciunt veniam nobis quia, ipsum possimus quis eaque. Suscipit culpa saepe excepturi vel aut? Nostrum minus earum vel enim asperiores sint obcaecati impedit, at quidem, velit, excepturi esse error ea fugiat. Omnis autem repudiandae ea harum! Animi architecto commodi numquam fugiat mollitia officiis, voluptates tempora quod quas, in natus hic esse, rerum inventore enim?',
    confirm: true,
  },
  {
    id: uniqid(),
    createDate: '2022-01-21T20:36:13.543Z',
    title: 'Статья 4',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis rem, magnam ad quos corrupti tempora? Temporibus sequi earum magni saepe vel hic blanditiis voluptatibus impedit. Ratione porro facere laboriosam rerum odio similique dolorem ex doloribus enim. Totam tempore qui accusantium impedit dolor doloremque doloribus quasi, aliquid nesciunt veniam nobis quia, ipsum possimus quis eaque. Suscipit culpa saepe excepturi vel aut? Nostrum minus earum vel enim asperiores sint obcaecati impedit, at quidem, velit, excepturi esse error ea fugiat. ',
    confirm: true,
  },
  {
    id: uniqid(),
    createDate: '2022-04-21T13:36:13.543Z',
    title: 'Статья 1',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis rem, magnam ad quos corrupti tempora? Temporibus sequi earum magni saepe vel hic blanditiis voluptatibus impedit. Ratione porro facere laboriosam rerum odio similique dolorem ex doloribus enim. Totam tempore qui accusantium impedit dolor doloremque doloribus quasi, aliquid nesciunt veniam nobis quia, ipsum possimus quis eaque. Suscipit culpa saepe excepturi vel aut? Nostrum minus earum vel enim asperiores sint obcaecati impedit, at quidem, velit, excepturi esse error ea fugiat. Omnis autem repudiandae ea harum! Animi architecto commodi numquam fugiat mollitia officiis, voluptates tempora quod quas, in natus hic esse, rerum inventore enim?',
    confirm: true,
  },
  {
    id: uniqid(),
    createDate: '2022-04-21T11:36:13.543Z',
    title: 'Статья 2',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis rem, magnam ad quos corrupti tempora? Temporibus sequi earum magni saepe vel hic blanditiis voluptatibus impedit. Ratione porro facere laboriosam rerum odio similique dolorem ex doloribus enim. Totam tempore qui accusantium impedit dolor doloremque doloribus quasi, aliquid nesciunt veniam nobis quia, ipsum possimus quis eaque. Suscipit culpa saepe excepturi vel aut?',
    confirm: true,
  },
  {
    id: uniqid(),
    createDate: '2022-03-21T15:40:13.543Z',
    title: 'Статья 3',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis rem, magnam ad quos corrupti tempora? Temporibus sequi earum magni saepe vel hic blanditiis voluptatibus impedit. Ratione porro facere laboriosam rerum odio similique dolorem ex doloribus enim. Totam tempore qui accusantium impedit dolor doloremque doloribus quasi, aliquid nesciunt veniam nobis quia, ipsum possimus quis eaque. Suscipit culpa saepe excepturi vel aut? Nostrum minus earum vel enim asperiores sint obcaecati impedit, at quidem, velit, excepturi esse error ea fugiat. Omnis autem repudiandae ea harum! Animi architecto commodi numquam fugiat mollitia officiis, voluptates tempora quod quas, in natus hic esse, rerum inventore enim?',
    confirm: true,
  },
  {
    id: uniqid(),
    createDate: '2022-01-21T20:36:13.543Z',
    title: 'Статья 4',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis rem, magnam ad quos corrupti tempora? Temporibus sequi earum magni saepe vel hic blanditiis voluptatibus impedit. Ratione porro facere laboriosam rerum odio similique dolorem ex doloribus enim. Totam tempore qui accusantium impedit dolor doloremque doloribus quasi, aliquid nesciunt veniam nobis quia, ipsum possimus quis eaque. Suscipit culpa saepe excepturi vel aut? Nostrum minus earum vel enim asperiores sint obcaecati impedit, at quidem, velit, excepturi esse error ea fugiat. ',
    confirm: true,
  }
]

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles
  },
  reducers: {
    addArticle(state, action) {
      state.articles.unshift({
        id: uniqid(),
        createDate: new Date().toISOString(),
        title: action.payload.title,
        body: action.payload.body,
        confirm: false,
      })
    },
    removeArticle(state, action) {
      state.articles = state.articles.filter(article => article.id !== action.payload);
    },
    confirmArticle(state, action) {
      state.articles = state.articles.map(article => article.id === action.payload ? {...article, confirm: true} : article)
    },
  }
})

export const {addArticle, removeArticle, confirmArticle} = articlesSlice.actions;
export default articlesSlice.reducer;