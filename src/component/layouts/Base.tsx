import { AppConfig } from '../../utils/AppConfig';
import { Features } from '../features';
import { TopBanners } from '../topBanners';
import { Footer } from './Footer';
import { Header } from './Header';
import { Meta } from './Meta';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <TopBanners />
    <Features />
    <Footer />
  </div>
);

export { Base };
