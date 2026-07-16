export const projects = [
  {
    title: 'AI Learning Coach',
    slug: 'ai-learning-coach',
    tagline:
      'An AI-powered learning platform for quizzes, flashcards, and study plans.',
    overview:
      'AI Learning Coach is an AI-powered learning platform built with React, Node.js, Express.js, MongoDB, and LangGraph. It generates quizzes, flashcards, summaries, and study plans, and uses automatic AI provider fallback across Gemini, Cohere, OpenRouter, and Mistral with caching and retry mechanisms. It is deployed on Vercel and Render with MongoDB Atlas and JWT-based authentication.',
    features: [
      'AI-powered quizzes, flashcards, summaries, and study plans using React, Node.js, Express.js, MongoDB, and LangGraph.',
      'Automatic AI provider fallback across Gemini, Cohere, OpenRouter, and Mistral with caching and retry mechanisms.',
      'JWT-based authentication and secure, scalable backend services.',
      'Deployed with Vercel, Render, and MongoDB Atlas.',
    ],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'LangGraph'],
    challenges: [
      'Orchestrating multi-step learning workflows with LangGraph.',
      'Building a reliable AI provider fallback layer with caching and retries.',
      'Designing secure JWT authentication for the learning platform.',
    ],
    learnings: [
      'Gained hands-on experience building AI-powered, LLM-driven applications.',
      'Learned to design resilient multi-provider AI integrations.',
      'Strengthened full-stack skills across React, Node.js, and MongoDB.',
    ],
    feedback: false,
    links: {
      live: 'https://ai-project-two-omega.vercel.app/',
      github: 'https://github.com/VishwaVikas2006/AI-PROJECT-',
    },
  },

  {
    title: 'GlobalPad | File and Note Sharing Platform',
    slug: 'globalpad',
    tagline:
      'A secure note and file sharing platform with access-code sessions.',
    overview:
      'GlobalPad is a secure note and file sharing platform built with Node.js, Express.js, and MongoDB Atlas. It exposes RESTful APIs and cloud-based file storage, and uses an access-code based sharing system that supports persistent storage of 50+ notes and uploaded documents via MongoDB GridFS.',
    features: [
      'Secure note sharing and file storage using Node.js, Express.js, and MongoDB Atlas.',
      'RESTful APIs to manage notes, file uploads, and access-code based sessions without user authentication.',
      'MongoDB GridFS for efficient cloud-based file storage of uploaded documents.',
      'Persistent storage for 50+ notes and documents with a simple, secure access-code flow.',
    ],
    techStack: ['Node.js', 'Express.js', 'MongoDB Atlas', 'MongoDB GridFS', 'REST APIs'],
    challenges: [
      'Designing a secure, authentication-free access model using access codes.',
      'Managing file uploads and storage efficiently with MongoDB GridFS.',
      'Building clean RESTful APIs for notes and sessions.',
    ],
    learnings: [
      'Strengthened full-stack skills with Node.js, Express.js, and MongoDB Atlas.',
      'Learned to design REST APIs for real-world sharing workflows.',
      'Improved understanding of cloud storage and session management.',
    ],
    feedback: false,
    links: {
      live: 'https://windpad.onrender.com/',
      github: 'https://github.com/VishwaVikas2006/WindPad',
    },
  },
   {
    title: 'AI Virtual Try-On System',
    slug: 'virtual-try-on-system',
    tagline:
      'AI-powered virtual clothing try-on system (currently under development).',
    overview:
      'An AI-based virtual try-on application using computer vision and deep learning for real-time garment visualization. GPU-intensive models are being developed and tested using Hugging Face GPU Spaces.',
    features: [
      'Real-time pose detection and garment overlay.',
      'AI-based clothing size recommendation.',
      'Streamlit interface for virtual try-on.',
      'Deep learning pipeline powered by Hugging Face GPU.',
    ],
    techStack: [
      'Python',
      'OpenCV',
      'MediaPipe',
      'PyTorch',
      'Streamlit',
      'Hugging Face',
    ],
    challenges: [
      'Optimizing deep learning inference.',
      'Aligning garments accurately using pose estimation.',
      'Managing GPU-based model execution.',
    ],
    learnings: [
      'Applied computer vision techniques.',
      'Worked with GPU-accelerated AI models.',
      'Improved understanding of deep learning deployment.',
    ],
    feedback: false,
    links: {
      live: '#',
      github: 'https://github.com/VishwaVikas2006/Virtual-Try-On-Sys',
    },
  },
  {
    title: 'Garden AI Agent',
    slug: 'garden-ai-agent',
    tagline:
      'AI chatbot providing organic gardening assistance for Indian climates.',
    overview:
      'A full-stack AI chatbot that delivers gardening advice using Groq Llama 3.1 while storing conversation history securely in MongoDB.',
    features: [
      'AI-powered conversational assistant.',
      'Persistent chat history.',
      'REST API backend with MongoDB.',
      'Responsive React interface.',
    ],
    techStack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Groq API',
      'Tailwind CSS',
    ],
    challenges: [
      'Managing AI conversations efficiently.',
      'Integrating LLM APIs with backend services.',
      'Designing a clean chat experience.',
    ],
    learnings: [
      'Built AI-powered full-stack applications.',
      'Worked with LLM API integration.',
      'Improved backend API development.',
    ],
    feedback: false,
    links: {
      live: 'https://garden-ai-agent.vercel.app/',
      github: 'https://github.com/VishwaVikas2006/garden-ai-agent',
    },
  },


];
