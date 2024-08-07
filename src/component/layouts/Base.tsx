import { AppConfig } from '../../utils/AppConfig';
import { Meta } from '../layout/Meta';
import { Features } from './Features';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <Hero />
    <Features />
    <Footer />
  </div>
);

export { Base };
