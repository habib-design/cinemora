# 🎬 Cinemora

Cinemora is a modern React movie discovery app that helps users search, explore, and browse trending films using the **TMDB API** and **Appwrite**.

## ✨ What it does

- Search movies by title
- Display movie posters, ratings, and release dates
- Show trending movies based on search popularity
- Track movie search counts through Appwrite
- Fetch popular and search results with TMDB

## 🚀 Features

- 🔍 Movie search powered by TMDB
- 📈 Trending movies derived from Appwrite metrics
- 🖼 Movie poster previews
- ⚡ Fast client-side UI with Vite
- ⏳ Loading spinner during requests
- ❌ Error handling for failed API calls
- 🔐 Environment-based API configuration

## 🧩 Tech Stack

- React 19
- Vite
- Appwrite
- TMDB API
- JavaScript (ES6+)
- CSS

## 🖼 Screenshots

> Replace these placeholders with actual screenshot files in the repository.

![Home Screen](screenshots/home-page.png)
*Home page with hero banner, search input, and trending movies.*

![Trending Movies](screenshots/trending.png)
*Trending movies shown from Appwrite analytics.*

![Search Results](screenshots/search-results.png)
*TMDB-powered search results with movie cards.*

## ⚙️ Setup

1. Clone the repository

```bash
git clone https://github.com/habib-design/cinemora.git
cd cinemora
```

2. Install dependencies

```bash
npm install
```

3. Add environment variables

Create a `.env` file in the project root with:

```env
VITE_TMDB_API_KEY=your_tmdb_bearer_token
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

4. Run the app

```bash
npm run dev
```

## 🔧 Appwrite Integration

The app uses Appwrite to store and retrieve trending movie metrics.

- `src/appwrite.js` sets up the Appwrite client
- `updateSearchCount()` increments counts by `movie_id`
- `getTrendingMovies()` returns unique top trending items

## 🔐 TMDB Integration

TMDB is used for movie discovery and search.

- Search endpoint: `/search/movie`
- Discover endpoint: `/discover/movie?sort_by=popularity.desc`
- Poster base URL: `https://image.tmdb.org/t/p/w500`

## 📁 Project structure

- `src/App.jsx` — main app logic
- `src/appwrite.js` — Appwrite helper methods
- `src/components/` — UI components
- `public/` — static assets
- `.env` — local environment variables (not committed)

## 💡 Notes

- Do not commit `.env` to GitHub.
- Add screenshot images under a `screenshots/` folder and update the markdown paths as needed.

## 🤝 Contributing

1. Fork the repo
2. Create a branch
3. Make changes
4. Open a pull request

## 📄 License

This repository is for learning and demo purposes.
