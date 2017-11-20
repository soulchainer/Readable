import {
  /* CategoryScreen, */
  HomeScreen,
  /* PostEditor,
  PostScreen, */
} from 'views/screens';

const routes = [
  {
    component: HomeScreen,
    exact: true,
    path: '/',
  },
  /* {
    component: PostEditor,
    path: '/#new',
  },
  {
    component: PostEditor,
    path: '/:category/:post_id#edit',
  },
  {
    component: PostScreen,
    path: '/:category/:post_id',
  },
  {
    component: CategoryScreen,
    path: '/:category',
  }, */
];

export default routes;
