import { useEffect, useState } from "react";
import ArticleType from "../../types/ArticleType";
import axios from "axios";
import { Link } from "react-router-dom";

function Articles() {
    const [articles, setArticles] = useState<ArticleType[]>([]);
    const [article, setArticle] = useState<ArticleType>({ id: 0, title: '', description: '', createDate: '', autherId: 0 });
    const [isEditing, setIsEditing] = useState(false);

    // Fetch all articles from the server
    async function getArticles() {
        try {
            const response = await axios.get("http://localhost:8081/articles");
            setArticles(response.data);
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    }

    // Add or update article
    async function saveArticle() {
        try {
            if (isEditing) {
                // Update the article
                await axios.put(`http://localhost:8081/articles/${article.id}`, article);
                setIsEditing(false);
            } else {
                // Create a new article
                await axios.post("http://localhost:8081/articles", article);
            }
            setArticle({ id: 0, title: '', description: '', createDate: '', autherId: 0 });
            getArticles(); // Refresh the article list
        } catch (error) {
            console.error("Error saving article:", error);
        }
    }

    // Edit an article (auto-fill the form)
    function editArticle(article: ArticleType) {
        setArticle(article);
        setIsEditing(true);
    }

    // Delete an article
    async function deleteArticle(id: number) {
        try {
            await axios.delete(`http://localhost:8081/articles/${id}`);
            getArticles(); // Refresh the article list
        } catch (error) {
            console.error("Error deleting article:", error);
        }
    }

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-semibold mb-5 text-slate-800">Articles</h1>

            {/* Add/Edit Article Form */}
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={article.title}
                    onChange={(e) => setArticle({ ...article, title: e.target.value })}
                    className="border p-2 m-2"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={article.description}
                    onChange={(e) => setArticle({ ...article, description: e.target.value })}
                    className="border p-2 m-2"
                />
                <input
                    type="number"
                    placeholder="Auther ID"
                    value={article.autherId || ''}
                    onChange={(e) => setArticle({ ...article, autherId: parseInt(e.target.value) })}
                    className="border p-2 m-2"
                />
                <button onClick={saveArticle} className="bg-blue-500 text-white p-2 m-2">
                    {isEditing ? 'Update Article' : 'Save Article'}
                </button>
            </div>

            {/* Articles Table */}
            <table className="min-w-full border-collapse">
                <thead>
                    <tr>
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Title</th>
                        <th className="p-2 border">Description</th>
                        <th className="p-2 border">Create Date</th>
                        <th className="p-2 border">Auther ID</th>
                        <th className="p-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article => (
                        <tr key={article.id}>
                            <td className="p-2 border">{article.id}</td>
                            <td className="p-2 border">{article.title}</td>
                            <td className="p-2 border">{article.description}</td>
                            <td className="p-2 border">{article.createDate}</td>
                            <td className="p-2 border">{article.autherId}</td>
                            <td className="p-2 border">
                                <button onClick={() => editArticle(article)} className="mr-2 bg-yellow-500 text-white p-2">Edit</button>
                                <button onClick={() => deleteArticle(article.id)} className="bg-red-500 text-white p-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />

            <div>
                <Link to="/" className="text-blue-500">Home</Link>
            </div>
        </div>
    );
}

export default Articles;
