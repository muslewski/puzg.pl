This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Examples

- https://github.com/amannn/next-intl/tree/main/examples/example-app-router
  https://next-intl-example-app-router.vercel.app/en
  - https://mikebifulco.com/posts/self-healing-urls-nextjs-seo

## TODO:

- [ ] Delete eslintrc rules:
  - "@typescript-eslint/no-unused-vars": "off", // Disable unused variable rule for all files
  - "@typescript-eslint/no-explicit-any": "off", // Disable no-explicit-any rule for all files
- [ ] Define classes for h1-h5 in global.css
- [ ] Change HeroImage to [obraz](https://stock.adobe.com/pl/search?k=grudziadz&asset_id=65177066)
- [ ] Change metaDescription of news to something shorter
- [ ] Add Self-Healing Urls for news
- [ ] Add alt images to oUczelniPage Carousel
- [ ] Add pagination to News when the news will be stored in database
- [ ] Add PDF Reader https://react-pdf-viewer.dev/
- [ ] Replace my email to sekretariat in contact form route.tsx
