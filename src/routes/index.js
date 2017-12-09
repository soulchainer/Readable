import {
  CategoryScreen,
  HomeScreen,
  PostEditorScreen,
  PostScreen,
} from 'views/screens';

const routes = [
  {
    component: HomeScreen,
    exact: true,
    path: '/',
  },
  {
    component: PostEditorScreen,
    exact: true,
    path: '/#addPost',
  },
  {
    component: PostEditorScreen,
    path: '/:category#addPost',
  },
  {
    component: PostEditorScreen,
    path: '/:category/:postId#editPost',
  },
  {
    component: PostScreen,
    path: '/:category/:postId',
  },
  {
    component: CategoryScreen,
    path: '/:category',
  },
];

export default routes;
