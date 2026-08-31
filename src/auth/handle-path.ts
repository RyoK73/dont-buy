// 相対Urlを絶対Urlへ変換する
const toAbsoluteUrl = (relativeUrl: string) => {
  const baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL!;
  return new URL(relativeUrl, baseUrl).href;
};

export { toAbsoluteUrl };
