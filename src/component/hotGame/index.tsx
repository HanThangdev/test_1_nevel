import { CardHotGame } from './card';

const HotGame = () => (
  <div>
    <h1 className="text-2xl font-semibold text-black">Hot Game</h1>
    <ul className="flex justify-between gap-4">
      <CardHotGame />
      <CardHotGame />
    </ul>
  </div>
);

export { HotGame };
