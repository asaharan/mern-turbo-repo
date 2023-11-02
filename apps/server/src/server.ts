import HealthCheckRoute from '@routes/health-check';
import App from '@app';
import AuthRoute from '@routes/admin/auth.route';

const app = new App([new HealthCheckRoute(), new AuthRoute()]);
app.listen();
