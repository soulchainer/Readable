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
    path: '/#new',
  },
  {
    component: PostEditorScreen,
    path: '/:category/:postId#edit',
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
