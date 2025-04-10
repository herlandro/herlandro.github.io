# Personal Portfolio

A modern and responsive personal portfolio website developed with pure HTML, CSS, and JavaScript.

## Features

- Modern and clean design
- Fully responsive layout
- Skill filtering by category
- Social media API integration
- Smooth animations and transitions
- Contact form
- Blog section
- Project showcase

## Project Structure

```
portfolio/
├── index.html
├── assets/
│   └── images/
│       ├── profile.jpg
│       ├── project1.jpg
│       ├── project2.jpg
│       └── project3.jpg
├── js/
│   └── main.js
├── styles/
│   ├── variables.css
│   ├── base.css
│   ├── components.css
│   └── animations.css
├── package.json
└── README.md
```

## Content

### Hero Section
- Profile photo
- Name and title
- Brief description
- Call-to-action buttons

### Skills
- Filterable skill cards
- Icons and categories
- Interactive hover effects

### Social Networks
- GitHub statistics
- LinkedIn profile
- Stack Overflow activity

### Projects
- Project cards with images
- Technology tags
- Links to live demos

### Blog
- Latest articles from different platforms
- Article summaries
- Publication dates

### Contact
- Contact form
- Social media links
- Location information

## Customization

### Skills
Edit the `skills` array in `js/main.js`:
```javascript
const skills = [
    { name: 'Skill Name', category: 'category', icon: 'icon-class' }
];
```

### Projects
Update the `projects` array in `js/main.js`:
```javascript
const projects = [
    {
        title: 'Project Title',
        description: 'Project description',
        image: 'path/to/image.jpg',
        technologies: ['Tech1', 'Tech2'],
        link: 'project-url'
    }
];
```

### Blog Posts
Modify the `blogPosts` array in `js/main.js`:
```javascript
const blogPosts = [
    {
        platform: 'Platform Name',
        title: 'Article Title',
        excerpt: 'Article summary...',
        date: 'YYYY-MM-DD',
        link: 'article-url'
    }
];
```

### Images
Replace the images in the `assets/images/` directory:
- `profile.jpg`: Your profile photo
- `project1.jpg`, `project2.jpg`, `project3.jpg`: Project screenshots

## Deployment

This site is configured for deployment on GitHub Pages. Simply push your changes to the main branch and the site will be automatically deployed.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 
