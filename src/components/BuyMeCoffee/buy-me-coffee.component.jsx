import { ScreenEgg } from "../ScreenEgg/screen-egg.component";
import "./buy-me-coffee.styles.scss";

export const BuyMeCoffee = () => {
  return (
    <ScreenEgg type="right">
      <div className="buy-coffee">
        <a
          href="https://www.youtube.com/watch?v=SUiMr3h50_g&ab_channel=Pumers"
          className="buy-coffee__button"
        >
          Buy me a coffee
        </a>
      </div>
    </ScreenEgg>
  );
};
