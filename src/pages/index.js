import "../styles/reset.scss";
import "../styles/global.scss";
import {
  Section,
  Cover,
  SocialNetworks,
  BuyMeCoffee,
  Title,
} from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Section>
        <Cover title="Nikita Lebowski" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
      </Section>
    </div>
  );
}
