
import React from 'react';
import { Calendar } from 'lucide-react';

interface Article {
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
}

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <a 
      href={article.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <span>{article.readTime}</span>
        </div>
        
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{article.description}</p>
      </div>
    </a>
  );
};

const ArticlesSection: React.FC = () => {
  const articles: Article[] = [
    {
      title: "How to Build a React Application with TypeScript",
      description: "Learn how to build a React application with TypeScript from scratch. This tutorial covers everything you need to know to get started.",
      date: "April 5, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "https://medium.com/@yourusername/article1"
    },
    {
      title: "The Future of Web Development: What to Expect in 2026",
      description: "Web development is constantly evolving. In this article, we'll explore what trends to expect in 2026 and how to prepare for them.",
      date: "March 22, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "https://medium.com/@yourusername/article2"
    },
    {
      title: "Design Systems: Why Every Team Needs One",
      description: "Design systems are essential for maintaining consistency across products. Learn why your team needs one and how to get started.",
      date: "March 10, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80",
      link: "https://medium.com/@yourusername/article3"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
