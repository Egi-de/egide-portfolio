# Quick Setup Guide 🚀

Follow these steps to get your portfolio up and running!

## Step 1: Install Dependencies ✅

Already done! All packages are installed.

## Step 2: Database Setup (Optional)

You have two options:

### Option A: Skip Database (Recommended for now)
The portfolio works without a database! The contact form will log messages to the console.

### Option B: Set up Database (For production)

1. **Get a free PostgreSQL database**:
   - Go to https://neon.tech
   - Sign up (it's free!)
   - Create a new project
   - Copy the connection string

2. **Add to .env file**:
   ```bash
   # Create .env file
   copy .env.example .env
   
   # Edit .env and paste your database URL
   DATABASE_URL="your-connection-string-here"
   ```

3. **Initialize database**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

## Step 3: Customize Your Content

### 1. Update Personal Info

Edit these files:
- `src/components/sections/Hero.tsx` - Your name and intro
- `src/components/sections/About.tsx` - Your bio and skills
- `src/components/sections/Experience.tsx` - Your work history
- `src/components/sections/Projects.tsx` - Your projects
- `src/components/ui/SocialLinks.tsx` - Your social media links

### 2. Add Your Profile Picture

Replace `public/images/egide.png` with your photo.

### 3. Update Email

In `src/app/page.tsx`, change:
```typescript
your.email@example.com
```

## Step 4: Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser!

## Step 5: Deploy to Vercel (When Ready)

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! 🎉

## Need Help?

- Check the main README.md for detailed documentation
- All components are in `src/components/`
- Styles are in `src/app/globals.css`

## Next Steps

1. ✅ Customize your content
2. ✅ Add your projects
3. ✅ Test on mobile
4. ✅ Deploy to Vercel
5. ✅ Share with the world!

---

**Happy coding! 🚀**
