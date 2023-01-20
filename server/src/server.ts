import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import ManufacturerRoute from './routes/manufacturer.route';
import CategoryRoute from './routes/category.route';
import ProductRoute from './routes/products.route';
import ReviewRoute from './routes/review.route';
import AttributeRoute from './routes/attribute.route';
import SearchRoute from './routes/search.route';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new ProductRoute(),
  new CategoryRoute(),
  new ManufacturerRoute(),
  new ReviewRoute(),
  new AttributeRoute(),
  new SearchRoute(),
]);

app.listen();
