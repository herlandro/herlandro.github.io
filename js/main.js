// Skills Data
const skills = [
    { name: 'HTML5', category: 'frontend', icon: 'fab fa-html5' },
    { name: 'CSS3', category: 'frontend', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', category: 'frontend', icon: 'fab fa-js' },
    { name: 'React', category: 'frontend', icon: 'fab fa-react' },
    { name: 'Node.js', category: 'backend', icon: 'fab fa-node-js' },
    { name: 'Python', category: 'backend', icon: 'fab fa-python' },
    { name: 'Swift', category: 'mobile', icon: 'fab fa-swift' },
    { name: 'Android', category: 'mobile', icon: 'fab fa-android' },
    { name: 'iOS', category: 'mobile', icon: 'fab fa-apple' },
    { name: 'Git', category: 'backend', icon: 'fab fa-git-alt' },
    { name: 'Docker', category: 'backend', icon: 'fab fa-docker' },
    { name: 'AWS', category: 'backend', icon: 'fab fa-aws' }
];

// Projects Data
const projects = [
    {
        title: 'Mobile App 1',
        description: 'Description of mobile app 1',
        image: 'assets/images/project1.jpg',
        technologies: ['Swift', 'iOS'],
        link: '#'
    },
    {
        title: 'Mobile App 2',
        description: 'Description of mobile app 2',
        image: 'assets/images/project2.jpg',
        technologies: ['Android', 'Kotlin'],
        link: '#'
    },
    {
        title: 'Mobile App 3',
        description: 'Description of mobile app 3',
        image: 'assets/images/project3.jpg',
        technologies: ['React Native'],
        link: '#'
    }
];

// Blog Posts Data
const blogPosts = [
    {
        platform: 'Medium',
        title: 'Latest Medium Article',
        excerpt: 'Article summary...',
        date: '2024-03-15',
        link: '#'
    },
    {
        platform: 'Hackermoon',
        title: 'Latest Hackermoon Article',
        excerpt: 'Article summary...',
        date: '2024-03-10',
        link: '#'
    },
    {
        platform: 'iMasters',
        title: 'Latest iMasters Article',
        excerpt: 'Article summary...',
        date: '2024-03-05',
        link: '#'
    },
    {
        platform: 'LinkedIn',
        title: 'Latest LinkedIn Post',
        excerpt: 'Post summary...',
        date: '2024-03-01',
        link: '#'
    }
];

// Function to create skill cards
function createSkillCard(skill) {
    return `
        <div class="skill-card" data-category="${skill.category}">
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
        </div>
    `;
}

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="card project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="card-body">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="badge badge-primary">${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" class="btn btn-outline">View Project</a>
            </div>
        </div>
    `;
}

// Function to create blog cards
function createBlogCard(post) {
    return `
        <div class="card blog-card">
            <div class="card-header">
                <span class="badge badge-secondary">${post.platform}</span>
                <h3>${post.title}</h3>
            </div>
            <div class="card-body">
                <p>${post.excerpt}</p>
                <div class="blog-meta">
                    <span class="date">${new Date(post.date).toLocaleDateString()}</span>
                    <a href="${post.link}" class="btn btn-outline">Read More</a>
                </div>
            </div>
        </div>
    `;
}

// Function to filter skills
function filterSkills(category) {
    const skillsGrid = document.querySelector('.skills-grid');
    const filteredSkills = category === 'all' 
        ? skills 
        : skills.filter(skill => skill.category === category);
    
    skillsGrid.innerHTML = filteredSkills.map(createSkillCard).join('');
}

// Function to load social network stats
async function loadSocialStats() {
    try {
        // GitHub Stats
        const githubStats = await fetch('https://api.github.com/users/seu-usuario');
        const githubData = await githubStats.json();
        
        document.getElementById('github-repos').textContent = githubData.public_repos;
        document.getElementById('github-followers').textContent = githubData.followers;
        
        // LinkedIn Stats (example - you'll need to implement your own API)
        document.getElementById('linkedin-connections').textContent = '500+';
        document.getElementById('linkedin-posts').textContent = '50+';
        document.getElementById('linkedin-views').textContent = '10k+';
        
        // Stack Overflow Stats (example - you'll need to implement your own API)
        document.getElementById('stack-reputation').textContent = '1k+';
        document.getElementById('stack-answers').textContent = '100+';
        document.getElementById('stack-questions').textContent = '20+';
    } catch (error) {
        console.error('Error loading statistics:', error);
    }
}

// Function to initialize the site
function initializeSite() {
    // Load skills
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = skills.map(createSkillCard).join('');
    
    // Load projects
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = projects.map(createProjectCard).join('');
    
    // Load blog posts
    const blogGrid = document.querySelector('.blog-grid');
    blogGrid.innerHTML = blogPosts.map(createBlogCard).join('');
    
    // Load social network stats
    loadSocialStats();
    
    // Add event listeners
    document.querySelectorAll('.skills-filter button').forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            document.querySelectorAll('.skills-filter button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            e.target.classList.add('active');
            
            // Filter skills
            filterSkills(e.target.dataset.filter);
        });
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you can implement the form submission logic
        alert('Message sent successfully!');
        contactForm.reset();
    });
}

// Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Initialize the site when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSite);

function initializeSkills() {
    const skillsContainer = document.getElementById('skills-grid');
    const skillCards = document.querySelectorAll('.skill-card');
    let selectedSkills = new Set();

    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            const skillName = card.querySelector('h3').textContent.toLowerCase();
            
            // Toggle selection
            if (selectedSkills.has(skillName)) {
                selectedSkills.delete(skillName);
                card.classList.remove('selected');
            } else {
                selectedSkills.add(skillName);
                card.classList.add('selected');
            }

            // Filter projects based on selected skills
            const projectCards = document.querySelectorAll('.app-card');
            projectCards.forEach(projectCard => {
                if (selectedSkills.size === 0) {
                    // If no skills selected, show all projects
                    projectCard.style.display = 'flex';
                } else {
                    // Get project's tech tags
                    const projectTags = Array.from(projectCard.querySelectorAll('.tech-tag'))
                        .map(tag => tag.textContent.toLowerCase());
                    
                    // Check if project has any of the selected skills
                    const hasSelectedSkill = Array.from(selectedSkills)
                        .some(skill => projectTags.includes(skill));
                    
                    projectCard.style.display = hasSelectedSkill ? 'flex' : 'none';
                }
            });
        });
    });
}

// Call initializeSkills when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeSkills();
    
    // Handle "All" technology click
    const allTechIcon = document.querySelector('.all-tech');
    if (allTechIcon) {
        allTechIcon.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove selected class from all tech icons
            document.querySelectorAll('.tech-icon').forEach(icon => {
                icon.classList.remove('selected');
            });
            
            // Add selected class to "All" icon
            allTechIcon.classList.add('selected');
            
            // Show all app cards
            document.querySelectorAll('.app-card').forEach(card => {
                card.style.display = 'flex';
            });
        });
    }
    
    // Handle other technology clicks
    document.querySelectorAll('.tech-icon:not(.all-tech)').forEach(icon => {
        icon.addEventListener('click', (e) => {
            // Remove selected class from "All" icon
            const allTechIcon = document.querySelector('.all-tech');
            allTechIcon.classList.remove('selected');
            
            // Toggle selected class on clicked icon
            icon.classList.toggle('selected');
            
            // Get all selected technologies
            const selectedTechs = Array.from(document.querySelectorAll('.tech-icon.selected:not(.all-tech)'))
                .map(tech => tech.querySelector('i').className.split(' ').pop());
            
            // Filter app cards based on selected technologies
            document.querySelectorAll('.app-card').forEach(card => {
                if (selectedTechs.length === 0) {
                    // If no technologies selected, show all cards
                    card.style.display = 'flex';
                } else {
                    // Get card's tech tags
                    const cardTags = Array.from(card.querySelectorAll('.tech-tag'))
                        .map(tag => tag.className.split(' ').pop());
                    
                    // Check if card has any of the selected technologies
                    const hasSelectedTech = selectedTechs.some(tech => {
                        // Convert tech class to match tag class (e.g., fa-react -> react)
                        const techClass = tech.replace('fa-', '');
                        return cardTags.includes(techClass);
                    });
                    
                    card.style.display = hasSelectedTech ? 'flex' : 'none';
                }
            });
        });
    });
    
    // ... rest of your initialization code ...
}); 