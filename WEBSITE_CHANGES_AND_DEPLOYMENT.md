# Website Changes and Deployment Guide

This document explains how to update, test, deploy, verify, and maintain the Risaa Home website.

## 1. Current hosting setup

- Framework: Next.js 16
- Deployment type: Static export
- Live domains:
  - <https://risaahome.com>
  - <https://www.risaahome.com>
- Web server: cPanel/Apache
- Server IP: `204.11.59.150`
- cPanel document root: `/home1/risaahome/public_html`
- Build output: `out/`

The live website does not require a continuously running Node.js process. Next.js generates static HTML, CSS, JavaScript, fonts, and images, which Apache serves from `public_html`.

Never save cPanel passwords, domain transfer codes, API keys, or other secrets in this repository.

## 2. Important project files

| Website area | File |
| --- | --- |
| Homepage | `src/app/page.tsx` |
| Products, prices, descriptions, and image paths | `src/lib/products.ts` |
| Product listing page | `src/app/products/page.tsx` |
| Individual product page | `src/app/products/[slug]/page.tsx` |
| Product detail interface | `src/components/ProductDetail.tsx` |
| Product cards | `src/components/ProductCard.tsx` |
| Navigation/header | `src/components/Navbar.tsx` |
| Footer | `src/components/Footer.tsx` |
| About page | `src/app/about/page.tsx` |
| Contact page | `src/app/contact/page.tsx` |
| Care page | `src/app/care/page.tsx` |
| Global styling | `src/app/globals.css` |
| Public images and files | `public/` |
| Static deployment configuration | `next.config.ts` |
| Apache redirects and caching | `public/.htaccess` |

## 3. Make and test a change locally

Open a terminal in the project root:

```bash
cd /Users/parthsharma/projects/Risaa-homes
npm install
npm run dev
```

Open <http://localhost:3000> and check the change on desktop and mobile.

Before creating a deployment, run:

```bash
npm run lint
npm run build
```

Do not deploy if either command reports an error. A successful production build creates the static site in `out/`.

The build downloads Google Fonts. If it fails with a font download/network error, restore the internet connection and rerun `npm run build`.

## 4. Common changes

### Change a product price or description

1. Open `src/lib/products.ts`.
2. Find the product by its `slug`, `id`, or `name`.
3. Update fields such as `price`, `mrp`, `shortDescription`, `description`, `sizes`, or `colors`.
4. Run the local server and inspect the product listing and product detail page.
5. Run lint and the production build.

### Add a product

1. Add its optimized images under `public/`.
2. Add a new product object to the `products` array in `src/lib/products.ts`.
3. Give it a unique `id` and `slug`.
4. Add every required size, color, care instruction, and image path.
5. If it should appear in the featured bedding section, add its ID to `featuredBeddingProductIds`.
6. Run the site locally and test its listing card and detail page.
7. Run lint and the production build.

### Replace a product image

1. Prepare the image before adding it to `public/`.
2. Prefer WebP for photographs.
3. Keep the longest side around 1600–2200 pixels.
4. Aim for approximately 200–800 KB per image.
5. Update the path in `src/lib/products.ts` if the filename changed.
6. Use a new filename when an immediate cache refresh is important.

Avoid photographic PNG files and very large camera-original JPEGs. Hosting storage is limited.

### Change navigation, contact details, or page content

Edit the corresponding component or page from the table above, then test all affected links on desktop and mobile.

## 5. Critical hosting-size constraint

The cPanel account has a 180 MB storage limit. A normal `npm run build` copies every file from `public/`, so the complete raw `out/` directory can be approximately 300 MB and must not be uploaded directly.

The deployed release must be optimized before upload:

1. Include all generated HTML, CSS, JavaScript, fonts, route files, and `.htaccess`.
2. Include only public images referenced by the generated pages.
3. Resize oversized JPEGs to a maximum of approximately 2200 pixels.
4. Recompress photographs at reasonable web quality.
5. Check that the extracted release is around 60 MB.
6. Keep the ZIP near or below 50–55 MB.

Until this packaging process is automated, do not ZIP and upload the raw `out/` directory. Ask the project maintainer or Codex to prepare the optimized cPanel release.

## 6. Back up the live website

Create a backup before every deployment:

1. Sign in to cPanel.
2. Open **File Manager**.
3. Open `public_html`.
4. Compress or download the current website to your computer.
5. Confirm that the downloaded backup is readable.

Do not keep several full backups on the hosting account. Download them to another safe location because server storage is limited.

## 7. Upload and deploy through cPanel

1. Build and verify the site locally.
2. Create the optimized release folder described above.
3. Confirm that these items are at the release folder's top level:

   ```text
   index.html
   .htaccess
   _next/
   products/
   about/
   contact/
   care/
   ```

4. ZIP the **contents** of the release folder. Do not place everything inside an additional enclosing directory.
5. In cPanel File Manager, go to `/home1/risaahome`, one level above `public_html`.
6. Upload the release ZIP there.
7. Select the ZIP and click **Extract**.
8. Extract it into:

   ```text
   /home1/risaahome/public_html
   ```

9. Allow matching deployment files to be replaced.
10. Verify the live site before deleting anything else.
11. Delete the uploaded ZIP after successful verification to recover server space.

Uploading the ZIP above `public_html` prevents the archive itself from being publicly accessible.

## 8. Verify every deployment

Test these URLs in a private/incognito window:

- <https://risaahome.com/>
- <https://www.risaahome.com/>
- <https://risaahome.com/products/>
- <https://risaahome.com/about/>
- <https://risaahome.com/contact/>
- <https://risaahome.com/care/>
- At least three individual product pages

Confirm that:

- HTTPS loads without a certificate warning.
- Desktop and mobile navigation work.
- Product images and prices are correct.
- Product color/image selection works.
- Search works.
- The browser console does not show important errors.
- The old Royal Feather URL redirects correctly.
- cPanel still has at least 20–30 MB free.

If an image was replaced at the same URL, browsers may show the previous version for up to one day because of caching.

## 9. Roll back a bad deployment

If the new version is broken:

1. Do not delete the local source or the pre-deployment backup.
2. Open cPanel File Manager.
3. Upload the last known-good optimized release or backup.
4. Extract it into `/home1/risaahome/public_html` and replace matching files.
5. Delete the temporary ZIP after confirming recovery.
6. Recheck the homepage, product listing, product pages, images, and HTTPS.

Do not solve a deployment problem by deleting the entire `public_html` directory unless a verified full backup is available.

## 10. DNS rules

The current website records resolve to `204.11.59.150`. Do not change the website DNS records unless the site moves to a different server.

Never remove or overwrite MX, SPF, DKIM, or DMARC records while changing website DNS. Those records control domain email.

The domain transfer/EPP secret is not needed for normal website deployment.

## 11. Form limitation

The contact and newsletter forms currently show a success message only in the browser. They do not send email or save submissions.

Before using them to collect real enquiries, connect them to a backend or form service and add spam protection. Suitable options include a cPanel PHP endpoint, Formspree, Resend, or Supabase.

## 12. Maintenance schedule

### Before every deployment

- Back up `public_html`.
- Test changes locally.
- Run `npm run lint`.
- Run `npm run build`.
- Prepare an optimized release rather than uploading raw `out/`.
- Verify the ZIP structure and size.
- Verify the live website after extraction.
- Delete the deployment ZIP from the server.

### Monthly

- Check cPanel disk usage.
- Test the homepage, navigation, contact links, and several products.
- Check for broken images and links.
- Confirm AutoSSL is active.
- Run `npm outdated` and `npm audit`.
- Review dependency updates instead of installing major upgrades blindly.

### Quarterly

- Download and test a full hosting backup.
- Review product pricing and contact information.
- Remove obsolete images only after confirming they are unused and backed up.
- Review cPanel users and security settings.
- Check domain and hosting renewal dates.

### Annually

- Renew the domain and hosting plan.
- Confirm the domain registrar lock and two-factor authentication are enabled.
- Confirm HTTPS is renewing correctly.
- Review whether the 180 MB hosting plan is still sufficient.

## 13. Security checklist

- Use a unique cPanel password.
- Enable cPanel two-factor authentication.
- Enable registrar two-factor authentication.
- Keep the registrar/domain lock enabled.
- Regenerate any password or domain transfer secret that appears in a screenshot or chat.
- Never commit `.env` files, passwords, private keys, or API credentials.
- Give cPanel access only to people who need it.

