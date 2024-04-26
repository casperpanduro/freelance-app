import siteConfig from "../../site.config";

const useMoneyFormat = () => {
  const toMoney = (value: number) => {
    return value.toLocaleString(siteConfig.lang, {
      style: "currency",
      currency: siteConfig.currency,
    });
  };

  return { toMoney };
};

export default useMoneyFormat;
