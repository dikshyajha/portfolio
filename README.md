# Dikshya K. Jha — Portfolio

My personal portfolio site: about me, skills, projects, experience, and contact.

**Stack:** Next.js 15 (App Router) · TypeScript · Mantine 7 · Tailwind CSS · GSAP

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

```
app/                    layout, page, global styles
components/
  common/               Logo, animated star background
  partials/             top navigation
  modules/Landing/      Hero, About, Skills, Projects, Experience, Contact, Footer
public/images/          logos and project screenshots
```

To add a project, add an entry to the `projects` array in
`components/modules/Landing/Projects.tsx` and put its screenshots in
`public/images/<ProjectName>/`.

## Deploy

Deployed on Vercel. The contact form posts to Formspree.
