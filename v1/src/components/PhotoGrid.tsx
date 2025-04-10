
import React from 'react';
import { Instagram } from 'lucide-react';

interface Photo {
  image: string;
  link: string;
  likes: number;
}

const PhotoItem: React.FC<{ photo: Photo }> = ({ photo }) => {
  return (
    <a 
      href={photo.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group relative block overflow-hidden rounded-lg aspect-square"
    >
      <img 
        src={photo.image} 
        alt="Instagram post" 
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 opacity-0 transition-all duration-300 group-hover:bg-opacity-50 group-hover:opacity-100">
        <div className="flex items-center text-white">
          <span className="mr-2">♥</span>
          <span>{photo.likes}</span>
        </div>
      </div>
    </a>
  );
};

const PhotoGrid: React.FC = () => {
  const photos: Photo[] = [
    {
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      link: "https://instagram.com/p/photo1",
      likes: 247
    },
    {
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80",
      link: "https://instagram.com/p/photo2",
      likes: 184
    },
    {
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "https://instagram.com/p/photo3",
      likes: 315
    },
    {
      image: "https://images.unsplash.com/photo-1541185934-01b600ea069c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1542&q=80",
      link: "https://instagram.com/p/photo4",
      likes: 129
    },
    {
      image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "https://instagram.com/p/photo5",
      likes: 220
    },
    {
      image: "https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      link: "https://instagram.com/p/photo6",
      likes: 198
    }
  ];

  return (
    <div className="mb-16">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-2xl font-bold text-center">Instagram Feed</h2>
        <a 
          href="https://instagram.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-3"
        >
          <Instagram className="text-[#E1306C]" />
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <PhotoItem key={index} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
