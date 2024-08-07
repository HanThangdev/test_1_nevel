import { CardHottestCategory } from './card';

const HosttestGame = () => (
  <div>
    <h1 className="text-2xl font-semibold text-black">Hottest Category</h1>
    <ul className="flex  justify-between gap-4">
      <CardHottestCategory />
      <CardHottestCategory />
    </ul>
  </div>
);

export { HosttestGame };
