export type PlanPaymentOption = "yearly" | "monthly";

interface Plan {
  id: string;
  title: string;
  description?: string;
  type: PlanPaymentOption;
  price: number;
}

interface SiteConfig {
  title: string;
  description: string;
  lang: string;
  currency: string;
  plans: Plan[];
}

const siteConfig: SiteConfig = {
  title: "My Site",
  description: "My site description",
  lang: "en",
  currency: "DKK",
  plans: [
    {
      id: "price_1P9Co6KzUpKZ2LMF96KrPTsX",
      title: "Freelancer",
      description: "1 seat. For freelancers and solo runners.",
      type: "monthly",
      price: 59,
    },
    {
      id: "price_1P9CogKzUpKZ2LMFjCQ1gCqM",
      title: "Freelancer",
      description: "For freelancers and solo runners.",
      type: "yearly",
      price: 599,
    },
    {
      id: "price_1P9Ct8KzUpKZ2LMF4DgVBGdb",
      title: "Teams",
      description: "For teams and organizations",
      type: "monthly",
      price: 89,
    },
    {
      id: "price_1P9CtjKzUpKZ2LMF02PMCszD",
      title: "Teams",
      description: "For freelancers and small teams",
      type: "yearly",
      price: 889,
    },
  ],
};

export default siteConfig;
