import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleType from '../../types/ArticleType'; 
import { Link } from 'react-router-dom';

function Read() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [readArticles, setReadArticles] = useState<ArticleType[]>([]);

  // Fetch articles from the backend
  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get("http://localhost:8081/articles"); 
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }

    fetchArticles();
  }, []);

  // Add an article to the read list
  const markAsRead = (article: ArticleType) => {
    setReadArticles((prevReadArticles) => [...prevReadArticles, article]);
  };

  // Remove an article from the read list
  const deleteArticle = (id: number) => {
    setReadArticles((prevReadArticles) => prevReadArticles.filter(article => article.id !== id));

  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold mb-5 text-slate-800">Read Articles</h1>

      {/* Display all available articles */}
      <div className="mb-8">
        <h2 className="text-2xl mb-3">All Articles</h2>
        <div className="grid grid-cols-1 gap-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="p-4 border border-slate-200 rounded-lg hover:bg-gray-100 cursor-pointer"
              onClick={() => markAsRead(article)}
            >
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-500">{article.description}</p>
              <p className="text-sm text-right text-gray-500">{new Date(article.createDate).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Display read articles */}
      <div className="mb-8">
        <h2 className="text-2xl mb-3">Read Articles</h2>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-slate-200 text-sm font-medium text-slate-600">
              <th className="p-2 w-[50px] text-left">#</th>
              <th className="p-2 w-[300px] text-left">Article</th>
              <th className="p-2 text-left w-[300px] text-left">Date</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {readArticles.map((article) => (
              <tr key={article.id}>
                <td>{article.id}</td>
                <td>{article.title}</td>
                <td>{new Date(article.createDate).toLocaleDateString()}</td>
                <td>
                  <button
                    onClick={() => deleteArticle(article.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/" style={{ marginRight: '250px', color: '#00e4ff'}}>Home</Link>
    </div>
  );
}

export default Read;
