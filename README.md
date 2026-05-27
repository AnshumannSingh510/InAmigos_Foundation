# InAmigos Foundation – Awareness Webpage

A static awareness webpage for InAmigos Foundation built with HTML, CSS, and vanilla JavaScript.

## 📁 Project Structure

```
inamigos/
├── index.html        ← Main webpage
├── css/
│   └── style.css     ← All styles
├── js/
│   └── main.js       ← Scroll, nav, animations
├── vercel.json       ← Vercel deployment config
├── .gitignore
└── README.md
```

---

## 🚀 Deploy on Vercel (Step-by-Step)

### Step 1 – Push to GitHub

1. Go to [github.com](https://github.com) → sign in → click **New repository**
2. Name it `inamigos-foundation` → click **Create repository**
3. Open terminal/command prompt on your computer and run:

```bash
# Navigate into the project folder
cd inamigos

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit – InAmigos Foundation webpage"

# Link to your GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/inamigos-foundation.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### Step 2 – Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → **Sign up / Log in** (use your GitHub account)
2. Click **"Add New Project"**
3. Click **"Import"** next to your `inamigos-foundation` repository
4. Vercel will auto-detect it as a static site
5. Leave all settings as default → click **"Deploy"**
6. ✅ Done! You'll get a live URL like `https://inamigos-foundation.vercel.app`

---

### Step 3 – Update & Redeploy

Every time you make changes:

```bash
git add .
git commit -m "Update: describe your change"
git push
```

Vercel auto-redeploys on every push to `main`. No extra steps needed.

---

## 🌐 Links

- Official Website: https://inamigosfoundation.org.in
- Donate: https://rzp.io/l/kWQ87HP
- Volunteer Form: https://forms.gle/AB4c1hLaDDmtrKGU7
- Instagram: https://www.instagram.com/inamigos/
- Facebook: https://www.facebook.com/inamigos.inamigos
