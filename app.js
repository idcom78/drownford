// Course data - embedded JSON to avoid external file dependency
const COURSES_DATA = {
  "courses": [
    {
      "id": "math-reasoning-101",
      "title": "Maths & Reasoning Foundations",
      "category": "Reasoning",
      "difficulty": "Beginner",
      "duration": "6h",
      "rating": 4.8,
      "description": "Master fundamental mathematical concepts and logical reasoning skills through structured text-based lessons with interactive quizzes.",
      "lessons": [
        {
          "id": "l1",
          "title": "Number Sense and Patterns",
          "duration": "25m",
          "content": "# Number Sense and Patterns\n\nUnderstanding numbers is the foundation of all mathematics. In this lesson, we'll explore how numbers work and the patterns they create.\n\n## What is Number Sense?\n\nNumber sense refers to a person's understanding of numbers and their relationships. It includes:\n\n- Understanding quantity and magnitude\n- Recognizing number patterns\n- Mental math abilities\n- Estimation skills\n\n## Common Number Patterns\n\n### Arithmetic Sequences\nThese are sequences where each term increases by the same amount:\n- 2, 4, 6, 8, 10... (adding 2)\n- 5, 10, 15, 20, 25... (adding 5)\n\n### Geometric Sequences  \nThese are sequences where each term is multiplied by the same number:\n- 2, 4, 8, 16, 32... (multiplying by 2)\n- 3, 9, 27, 81, 243... (multiplying by 3)\n\n## Practice Exercise\n\nLook at these sequences and identify the pattern:\n1. 1, 4, 7, 10, 13, ___\n2. 2, 6, 18, 54, ___\n\nRemember: Practice makes perfect! The more you work with numbers, the stronger your number sense becomes.",
          "quiz": [
            {
              "question": "What is the next number in the sequence: 3, 6, 9, 12, ___?",
              "options": ["13", "15", "14", "16"],
              "correct": 1
            },
            {
              "question": "In a geometric sequence, each term is:",
              "options": ["Added to the same number", "Multiplied by the same number", "Subtracted by the same number", "Divided by different numbers"],
              "correct": 1
            }
          ]
        },
        {
          "id": "l2", 
          "title": "Logical Reasoning Fundamentals",
          "duration": "30m",
          "content": "# Logical Reasoning Fundamentals\n\nLogical reasoning is the process of using rational thinking to reach a conclusion. It's essential for problem-solving and critical thinking.\n\n## Types of Logical Reasoning\n\n### Deductive Reasoning\nStarts with a general premise and reaches a specific conclusion:\n- All birds have feathers\n- A robin is a bird\n- Therefore, a robin has feathers\n\n### Inductive Reasoning\nStarts with specific observations and reaches a general conclusion:\n- The sun has risen every day for the past year\n- Therefore, the sun will rise tomorrow\n\n### Abductive Reasoning\nFinding the most likely explanation for an observation:\n- The grass is wet\n- It probably rained last night\n\n## Logic Puzzles\n\nLogic puzzles help develop reasoning skills. Here's a simple example:\n\n**Puzzle:** Three friends - Alice, Bob, and Charlie - have different pets: a cat, a dog, and a fish. \n- Alice doesn't have a cat\n- Bob is allergic to dogs\n- Who has which pet?\n\n**Solution:** Since Bob can't have a dog and Alice can't have a cat, Alice must have the dog, Bob has the fish, and Charlie has the cat.\n\n## Key Strategies\n\n1. **Break down complex problems** into smaller parts\n2. **Look for patterns** and relationships\n3. **Consider all possibilities** systematically\n4. **Check your reasoning** by working backwards",
          "quiz": [
            {
              "question": "Which type of reasoning goes from general to specific?",
              "options": ["Inductive", "Deductive", "Abductive", "Reductive"],
              "correct": 1
            },
            {
              "question": "If all squares are rectangles, and ABCD is a square, then ABCD is:",
              "options": ["A triangle", "A rectangle", "A circle", "Cannot be determined"],
              "correct": 1
            }
          ]
        }
      ]
    },
    {
      "id": "english-speed-read",
      "title": "English Speed Reading Mastery",
      "category": "English",
      "difficulty": "Intermediate", 
      "duration": "4h",
      "rating": 4.6,
      "description": "Improve your reading speed and comprehension through proven techniques and guided practice exercises.",
      "lessons": [
        {
          "id": "l1",
          "title": "Reading Fundamentals",
          "duration": "20m",
          "content": "# Reading Fundamentals\n\nEffective reading is more than just recognizing words. It involves comprehension, speed, and retention.\n\n## The Reading Process\n\nReading involves several cognitive processes working together:\n\n1. **Word Recognition** - Identifying individual words\n2. **Comprehension** - Understanding meaning\n3. **Integration** - Connecting new information with existing knowledge\n4. **Retention** - Remembering what you've read\n\n## Common Reading Habits to Overcome\n\n### Subvocalization\nThis is the habit of 'hearing' words in your head as you read. While natural, it can slow down reading speed significantly.\n\n### Regression\nGoing back to reread words or sentences frequently disrupts reading flow and reduces comprehension.\n\n### Narrow Eye Span\nReading one word at a time instead of taking in groups of words or whole phrases.\n\n## Building Better Reading Habits\n\n### Preview the Text\nBefore diving in, spend a minute scanning:\n- Headlines and subheadings\n- First and last paragraphs\n- Any bold or italicized text\n- Graphs, charts, or images\n\n### Set a Purpose\nAsk yourself: What do I want to learn from this text? Having a clear purpose guides your attention and improves retention.\n\n### Create the Right Environment\n- Good lighting\n- Comfortable seating\n- Minimal distractions\n- Proper distance from the text\n\nRemember: Reading is a skill that improves with practice. Be patient with yourself as you develop these new habits.",
          "quiz": [
            {
              "question": "What is subvocalization?",
              "options": ["Reading out loud", "Hearing words in your head while reading", "Skipping words while reading", "Reading backwards"],
              "correct": 1
            },
            {
              "question": "Which of these should you do BEFORE reading a text?",
              "options": ["Take notes", "Preview headings and structure", "Read the conclusion first", "Memorize key terms"],
              "correct": 1
            }
          ]
        }
      ]
    },
    {
      "id": "critical-thinking",
      "title": "Critical Thinking Skills",
      "category": "Reasoning", 
      "difficulty": "Advanced",
      "duration": "8h",
      "rating": 4.9,
      "description": "Develop advanced critical thinking abilities to analyze information, evaluate arguments, and make sound decisions.",
      "lessons": [
        {
          "id": "l1",
          "title": "Introduction to Critical Thinking",
          "duration": "35m",
          "content": "# Introduction to Critical Thinking\n\nCritical thinking is the objective analysis and evaluation of an issue to form a judgment. It's about being an active learner rather than a passive recipient of information.\n\n## What is Critical Thinking?\n\nCritical thinking involves:\n- **Analysis** - Breaking down complex information into parts\n- **Evaluation** - Judging the credibility and worth of information\n- **Inference** - Drawing logical conclusions from evidence\n- **Explanation** - Articulating your reasoning clearly\n- **Self-regulation** - Monitoring and correcting your own thinking\n\n## The Critical Thinking Process\n\n### 1. Identify the Problem or Question\nWhat exactly are you trying to figure out? Be specific and clear about the issue at hand.\n\n### 2. Gather Information\nCollect relevant facts, data, and perspectives. Consider multiple sources and viewpoints.\n\n### 3. Analyze the Information\n- What are the key facts?\n- What assumptions are being made?\n- What evidence supports different positions?\n\n### 4. Consider Multiple Perspectives\nTry to understand different viewpoints, even those you disagree with. This helps you see the full picture.\n\n### 5. Draw Conclusions\nBased on your analysis, what can you reasonably conclude? Be prepared to change your mind if new evidence emerges.\n\n## Common Thinking Errors to Avoid\n\n### Confirmation Bias\nSeeking out only information that confirms what you already believe.\n\n### Overgeneralization\nMaking broad conclusions based on limited evidence.\n\n### False Dichotomy\nAssuming there are only two options when there may be many.\n\n### Ad Hominem\nAttacking the person making an argument rather than the argument itself.\n\n## Developing Critical Thinking Skills\n\n1. **Question Everything** - Don't accept information at face value\n2. **Seek Multiple Sources** - Get different perspectives on issues\n3. **Practice Active Listening** - Truly understand others' viewpoints\n4. **Reflect on Your Thinking** - Be aware of your own biases and assumptions\n5. **Embrace Uncertainty** - It's okay not to have all the answers immediately",
          "quiz": [
            {
              "question": "What is confirmation bias?",
              "options": ["Seeking information that confirms existing beliefs", "Confirming facts with multiple sources", "Being confident in your conclusions", "Asking for confirmation from others"],
              "correct": 0
            },
            {
              "question": "Which is NOT a component of critical thinking?",
              "options": ["Analysis", "Memorization", "Evaluation", "Inference"],
              "correct": 1
            }
          ]
        }
      ]
    },
    {
      "id": "data-analysis",
      "title": "Data Analysis Basics",
      "category": "Math",
      "difficulty": "Intermediate",
      "duration": "5h",
      "rating": 4.7,
      "description": "Learn to collect, analyze, and interpret data to make informed decisions and draw meaningful conclusions.",
      "lessons": [
        {
          "id": "l1",
          "title": "Understanding Data Types",
          "duration": "25m",
          "content": "# Understanding Data Types\n\nBefore analyzing data, it's crucial to understand what types of data exist and how they can be used.\n\n## Categories of Data\n\n### Quantitative Data\nNumerical data that can be measured and counted.\n\n**Discrete Data:** Can only take specific values (usually whole numbers)\n- Number of students in a class\n- Number of cars in a parking lot\n- Number of books on a shelf\n\n**Continuous Data:** Can take any value within a range\n- Height and weight measurements\n- Temperature readings\n- Time durations\n\n### Qualitative Data\nNon-numerical data that describes qualities or characteristics.\n\n**Nominal Data:** Categories with no natural order\n- Colors (red, blue, green)\n- Gender (male, female, other)\n- Types of cuisine (Italian, Chinese, Mexican)\n\n**Ordinal Data:** Categories with a natural order\n- Education levels (elementary, high school, college)\n- Customer satisfaction (poor, fair, good, excellent)\n- Movie ratings (1 star, 2 stars, 3 stars, etc.)\n\n## Data Collection Methods\n\n### Primary Data\nData you collect yourself through:\n- Surveys and questionnaires\n- Experiments\n- Observations\n- Interviews\n\n### Secondary Data\nData collected by others that you use for your analysis:\n- Government statistics\n- Published research studies\n- Company reports\n- Online databases\n\n## Data Quality Considerations\n\nWhen working with data, always consider:\n\n**Accuracy:** Is the data correct and free from errors?\n**Completeness:** Is all necessary data present?\n**Consistency:** Is the data formatted uniformly?\n**Relevance:** Does the data relate to your research question?\n**Timeliness:** Is the data current enough for your purposes?\n\n## Getting Started with Data Analysis\n\n1. **Define your question** - What do you want to learn?\n2. **Identify data needs** - What data will help answer your question?\n3. **Collect or find data** - Gather the information you need\n4. **Clean and organize** - Prepare data for analysis\n5. **Analyze and interpret** - Look for patterns and insights\n6. **Communicate findings** - Share your discoveries clearly\n\nRemember: Good data analysis starts with good questions and quality data!",
          "quiz": [
            {
              "question": "Which is an example of discrete quantitative data?",
              "options": ["Temperature", "Number of siblings", "Height", "Weight"],
              "correct": 1
            },
            {
              "question": "What type of data is 'customer satisfaction rating (1-5 stars)'?",
              "options": ["Nominal", "Ordinal", "Discrete", "Continuous"],
              "correct": 1
            }
          ]
        }
      ]
    },
    {
      "id": "creative-writing",
      "title": "Creative Writing Essentials", 
      "category": "English",
      "difficulty": "Beginner",
      "duration": "7h",
      "rating": 4.5,
      "description": "Unlock your creativity and learn the fundamentals of storytelling, character development, and compelling narrative techniques.",
      "lessons": [
        {
          "id": "l1",
          "title": "Elements of Storytelling",
          "duration": "30m",
          "content": "# Elements of Storytelling\n\nEvery great story shares certain fundamental elements. Understanding these building blocks will help you craft compelling narratives.\n\n## The Five Essential Elements\n\n### 1. Character\nCharacters are the heart of any story. They drive the plot and connect with readers emotionally.\n\n**Types of Characters:**\n- **Protagonist:** The main character or hero\n- **Antagonist:** The character who opposes the protagonist\n- **Supporting Characters:** Friends, family, mentors who help or hinder the protagonist\n- **Minor Characters:** Background characters who add depth to the story world\n\n**Character Development Tips:**\n- Give characters clear motivations and goals\n- Create flaws and strengths that feel realistic\n- Show character growth throughout the story\n- Make dialogue sound natural to each character\n\n### 2. Setting\nThe time and place where your story occurs. Setting can influence mood, conflict, and character behavior.\n\n**Consider:**\n- Time period (historical, contemporary, futuristic)\n- Geographic location (city, countryside, fictional world)\n- Social environment (school, workplace, family)\n- Physical environment (weather, seasons, buildings)\n\n### 3. Plot\nThe sequence of events that make up your story. A strong plot keeps readers engaged and turning pages.\n\n**Basic Plot Structure:**\n1. **Exposition:** Introduce characters and setting\n2. **Rising Action:** Build tension and develop conflict\n3. **Climax:** The turning point or most intense moment\n4. **Falling Action:** Events that happen as a result of the climax\n5. **Resolution:** How the story concludes\n\n### 4. Conflict\nThe central problem or struggle in your story. Conflict creates tension and drives the narrative forward.\n\n**Types of Conflict:**\n- **Person vs. Person:** Character against another character\n- **Person vs. Self:** Internal struggle within a character\n- **Person vs. Society:** Character against social norms or systems\n- **Person vs. Nature:** Character against natural forces\n- **Person vs. Technology:** Character against technological forces\n\n### 5. Theme\nThe underlying message or meaning of your story. What do you want readers to think about after they finish reading?\n\n**Common Themes:**\n- Love and relationships\n- Coming of age and growth\n- Good versus evil\n- The nature of family\n- Overcoming challenges\n- Social justice and equality\n\n## Bringing It All Together\n\nRemember, these elements work together to create a cohesive story. Strong characters facing meaningful conflicts in vivid settings will engage your readers and convey your themes effectively.\n\n## Writing Exercise\n\nTry this: Create a character, place them in a specific setting, and give them a problem to solve. Write just one paragraph describing this scenario. Notice how all five elements naturally come into play!",
          "quiz": [
            {
              "question": "What is the climax of a story?",
              "options": ["The beginning where characters are introduced", "The turning point or most intense moment", "The final resolution of conflicts", "The background information about the setting"],
              "correct": 1
            },
            {
              "question": "Which type of conflict involves a character struggling with their own thoughts and feelings?",
              "options": ["Person vs. Person", "Person vs. Society", "Person vs. Self", "Person vs. Nature"],
              "correct": 2
            }
          ]
        }
      ]
    },
    {
      "id": "basic-algebra",
      "title": "Algebra Fundamentals",
      "category": "Math",
      "difficulty": "Beginner", 
      "duration": "6h",
      "rating": 4.8,
      "description": "Master the basics of algebra including variables, equations, and linear functions through clear explanations and practice.",
      "lessons": [
        {
          "id": "l1",
          "title": "Introduction to Variables",
          "duration": "25m",
          "content": "# Introduction to Variables\n\nAlgebra introduces us to variables - letters that represent unknown numbers. This opens up a whole new world of mathematical problem-solving.\n\n## What Are Variables?\n\nA variable is a symbol (usually a letter) that represents an unknown value. The most common variables are x, y, and z, but you can use any letter.\n\n**Examples:**\n- x = 5 (x represents the number 5)\n- y + 3 = 10 (y represents some number that, when added to 3, equals 10)\n- 2a = 12 (a represents some number that, when multiplied by 2, equals 12)\n\n## Why Use Variables?\n\nVariables allow us to:\n- Represent unknown quantities\n- Write general rules and formulas\n- Solve problems systematically\n- Express relationships between quantities\n\n## Algebraic Expressions\n\nAn algebraic expression is a mathematical phrase that contains variables, numbers, and operations.\n\n**Examples:**\n- x + 5\n- 3y - 2\n- 2a + 4b\n- x² + 3x + 7\n\n**Key Terms:**\n- **Term:** A single mathematical expression (like 3x or -7)\n- **Coefficient:** The number multiplied by a variable (in 3x, the coefficient is 3)\n- **Constant:** A number without a variable (like 5 or -2)\n\n## Evaluating Expressions\n\nTo evaluate an algebraic expression means to find its value when the variable has a specific value.\n\n**Example:** Evaluate 2x + 3 when x = 4\n- Substitute 4 for x: 2(4) + 3\n- Calculate: 8 + 3 = 11\n\n**Practice Problems:**\n1. Evaluate 3y - 5 when y = 2\n2. Evaluate x² + 4x when x = 3\n3. Evaluate 2a + b when a = 1 and b = 6\n\n**Solutions:**\n1. 3(2) - 5 = 6 - 5 = 1\n2. (3)² + 4(3) = 9 + 12 = 21\n3. 2(1) + 6 = 2 + 6 = 8\n\n## Combining Like Terms\n\nLike terms are terms that have the same variable raised to the same power.\n\n**Examples of like terms:**\n- 3x and 5x (both have x)\n- 2y² and -7y² (both have y²)\n- 4 and 9 (both are constants)\n\n**Combining like terms:** Add or subtract the coefficients\n- 3x + 5x = 8x\n- 7y - 2y = 5y\n- 4a² + 3a² - a² = 6a²\n\n## The Foundation of Algebra\n\nUnderstanding variables and expressions is crucial because they form the foundation for:\n- Solving equations\n- Working with functions\n- Graphing relationships\n- Advanced mathematical concepts\n\nTake time to practice these basics - they'll serve you well as you progress in algebra!",
          "quiz": [
            {
              "question": "What is the coefficient in the term -5x?",
              "options": ["5", "-5", "x", "-5x"],
              "correct": 1
            },
            {
              "question": "If you combine the like terms 4x + 7x - 2x, what do you get?",
              "options": ["9x", "11x", "5x", "x"],
              "correct": 0
            }
          ]
        }
      ]
    }
  ],
  "testimonials": [
    {
      "name": "Sarah Johnson",
      "role": "Student",
      "content": "Drownford's text-based approach helped me focus better than any video course. The progress tracking kept me motivated!",
      "avatar": "SJ"
    },
    {
      "name": "Mark Chen",  
      "role": "Professional",
      "content": "Perfect for learning during commutes. The offline capability and clean design make studying so much easier.",
      "avatar": "MC"
    },
    {
      "name": "Lisa Rodriguez",
      "role": "Teacher", 
      "content": "I love the distraction-free reading environment. Finally, a platform that prioritizes actual learning over flashy features.",
      "avatar": "LR"
    }
  ]
};

// Application State
class DrownfordApp {
  constructor() {
    this.currentPage = 'home';
    this.currentCourse = null;
    this.currentLesson = null;
    this.filteredCourses = [...COURSES_DATA.courses];
    this.focusMode = false;
    this.fontSize = 'medium';
    this.quizState = {
      currentQuiz: null,
      currentQuestion: 0,
      answers: [],
      score: 0
    };
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadTheme();
    this.loadFontSize();
    this.loadUserProgress();
    this.renderCurrentPage();
    this.loadFeaturedCourses();
    this.loadTestimonials();
  }

  // Theme Management
  loadTheme() {
    const savedTheme = localStorage.getItem('drownford:theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeIcon(savedTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('drownford:theme', newTheme);
    this.updateThemeIcon(newTheme);
    
    this.showToast(`Switched to ${newTheme} mode`);
  }

  updateThemeIcon(theme) {
    const lightIcon = document.querySelector('.theme-icon--light');
    const darkIcon = document.querySelector('.theme-icon--dark');
    
    if (theme === 'dark') {
      lightIcon?.classList.add('hidden');
      darkIcon?.classList.remove('hidden');
    } else {
      lightIcon?.classList.remove('hidden');
      darkIcon?.classList.add('hidden');
    }
  }

  // Font Size Management
  loadFontSize() {
    const savedFontSize = localStorage.getItem('drownford:fontSize') || 'medium';
    this.fontSize = savedFontSize;
    this.applyFontSize(savedFontSize);
  }

  toggleFontSize() {
    const sizes = ['small', 'medium', 'large'];
    const currentIndex = sizes.indexOf(this.fontSize);
    const newIndex = (currentIndex + 1) % sizes.length;
    const newSize = sizes[newIndex];
    
    this.fontSize = newSize;
    this.applyFontSize(newSize);
    localStorage.setItem('drownford:fontSize', newSize);
    
    this.showToast(`Font size: ${newSize}`);
  }

  applyFontSize(size) {
    const readerMain = document.querySelector('.reader-main');
    if (readerMain) {
      readerMain.classList.remove('font-small', 'font-medium', 'font-large');
      readerMain.classList.add(`font-${size}`);
    }
    
    // Add CSS for font sizes
    if (!document.getElementById('font-size-styles')) {
      const style = document.createElement('style');
      style.id = 'font-size-styles';
      style.textContent = `
        .font-small .lesson-content { font-size: 14px; line-height: 1.6; }
        .font-medium .lesson-content { font-size: 16px; line-height: 1.7; }
        .font-large .lesson-content { font-size: 18px; line-height: 1.8; }
      `;
      document.head.appendChild(style);
    }
  }

  // Progress Management
  loadUserProgress() {
    const progress = localStorage.getItem('drownford:progress');
    this.userProgress = progress ? JSON.parse(progress) : {};
  }

  saveUserProgress() {
    localStorage.setItem('drownford:progress', JSON.stringify(this.userProgress));
  }

  updateLessonProgress(courseId, lessonId, completed = true) {
    if (!this.userProgress[courseId]) {
      this.userProgress[courseId] = { lessons: {}, notes: {} };
    }
    
    this.userProgress[courseId].lessons[lessonId] = {
      completed,
      completedAt: new Date().toISOString()
    };
    
    this.saveUserProgress();
    this.updateProgressDisplay();
  }

  // Notes Management
  loadNotes(courseId, lessonId) {
    if (!this.userProgress[courseId] || !this.userProgress[courseId].notes) {
      return '';
    }
    return this.userProgress[courseId].notes[lessonId] || '';
  }

  saveNotes(courseId, lessonId, notes) {
    if (!this.userProgress[courseId]) {
      this.userProgress[courseId] = { lessons: {}, notes: {} };
    }
    
    this.userProgress[courseId].notes[lessonId] = notes;
    this.saveUserProgress();
    this.showToast('Notes saved successfully');
  }

  // Event Listeners
  setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleTheme();
      });
    }

    // Navigation - Use event delegation for better reliability
    document.addEventListener('click', (e) => {
      // Handle navigation links
      const navLink = e.target.closest('[data-page]');
      if (navLink) {
        e.preventDefault();
        const page = navLink.getAttribute('data-page');
        this.navigateToPage(page);
        return;
      }

      // Handle course card clicks
      const courseCard = e.target.closest('.course-card');
      if (courseCard) {
        e.preventDefault();
        const courseId = courseCard.getAttribute('data-course-id');
        if (courseId) {
          this.openCourse(courseId);
        }
        return;
      }
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleMobileMenu();
      });
    }

    // Course filters
    const courseSearch = document.getElementById('courseSearch');
    if (courseSearch) {
      courseSearch.addEventListener('input', () => this.filterCourses());
    }

    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
      categoryFilter.addEventListener('change', () => this.filterCourses());
    }

    const difficultyFilter = document.getElementById('difficultyFilter');
    if (difficultyFilter) {
      difficultyFilter.addEventListener('change', () => this.filterCourses());
    }

    const sortFilter = document.getElementById('sortFilter');
    if (sortFilter) {
      sortFilter.addEventListener('change', () => this.filterCourses());
    }

    const clearFilters = document.getElementById('clearFilters');
    if (clearFilters) {
      clearFilters.addEventListener('click', () => this.clearFilters());
    }

    // Reader controls
    const fontSizeBtn = document.getElementById('fontSizeBtn');
    if (fontSizeBtn) {
      fontSizeBtn.addEventListener('click', () => this.toggleFontSize());
    }

    const focusModeBtn = document.getElementById('focusModeBtn');
    if (focusModeBtn) {
      focusModeBtn.addEventListener('click', () => this.toggleFocusMode());
    }

    const notesToggleBtn = document.getElementById('notesToggleBtn');
    if (notesToggleBtn) {
      notesToggleBtn.addEventListener('click', () => this.toggleNotes());
    }

    const saveNotesBtn = document.getElementById('saveNotesBtn');
    if (saveNotesBtn) {
      saveNotesBtn.addEventListener('click', () => this.saveCurrentNotes());
    }

    const prevLessonBtn = document.getElementById('prevLessonBtn');
    if (prevLessonBtn) {
      prevLessonBtn.addEventListener('click', () => this.navigateToPreviousLesson());
    }

    const nextLessonBtn = document.getElementById('nextLessonBtn');
    if (nextLessonBtn) {
      nextLessonBtn.addEventListener('click', () => this.navigateToNextLesson());
    }

    // Quiz controls
    const closeQuizBtn = document.getElementById('closeQuizBtn');
    if (closeQuizBtn) {
      closeQuizBtn.addEventListener('click', () => this.closeQuiz());
    }

    // Modal backdrop clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('.modal__backdrop')) {
        this.closeQuiz();
      }
    });

    // Forms
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => this.handleNewsletterSubmit(e));
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));
    }

    // Toast close
    const toastClose = document.getElementById('toastClose');
    if (toastClose) {
      toastClose.addEventListener('click', () => this.hideToast());
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      this.handleKeyboardShortcuts(e);
    });
  }

  // Navigation
  navigateToPage(page) {
    // Update nav links
    document.querySelectorAll('.nav__link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === page) {
        link.classList.add('active');
      }
    });

    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
      p.classList.add('hidden');
    });

    // Show target page
    const targetPage = document.getElementById(page + 'Page');
    if (targetPage) {
      targetPage.classList.remove('hidden');
      this.currentPage = page;
    }

    // Load page-specific content
    if (page === 'courses') {
      this.renderCourseCatalog();
    }

    // Close mobile menu if open
    this.closeMobileMenu();
  }

  toggleMobileMenu() {
    const nav = document.getElementById('nav');
    if (nav) {
      nav.classList.toggle('open');
    }
  }

  closeMobileMenu() {
    const nav = document.getElementById('nav');
    if (nav) {
      nav.classList.remove('open');
    }
  }

  // Course Management
  loadFeaturedCourses() {
    const grid = document.getElementById('featuredCoursesGrid');
    if (!grid) return;

    const featuredCourses = COURSES_DATA.courses.slice(0, 6);
    grid.innerHTML = featuredCourses.map(course => this.createCourseCard(course)).join('');
  }

  createCourseCard(course) {
    const difficultyClass = course.difficulty.toLowerCase();
    const categoryIcon = this.getCategoryIcon(course.category);
    const stars = this.generateStars(course.rating);
    
    return `
      <div class="course-card" data-course-id="${course.id}">
        <div class="course-card__header">
          <div class="course-card__icon">
            ${categoryIcon}
          </div>
        </div>
        <div class="course-card__body">
          <div class="course-card__meta">
            <span class="badge badge--info">${course.category}</span>
            <span class="badge badge--${difficultyClass === 'beginner' ? 'success' : difficultyClass === 'intermediate' ? 'warning' : 'info'}">${course.difficulty}</span>
          </div>
          <h3 class="course-card__title">${course.title}</h3>
          <p class="course-card__description">${course.description}</p>
          <div class="course-card__footer">
            <div class="course-rating">
              <div class="stars">${stars}</div>
              <span>${course.rating}</span>
            </div>
            <span class="course-duration">${course.duration}</span>
          </div>
        </div>
      </div>
    `;
  }

  getCategoryIcon(category) {
    const icons = {
      'Math': '∑',
      'Reasoning': '◇',
      'English': 'A'
    };
    return icons[category] || '●';
  }

  generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
      stars += '★';
    }
    
    if (hasHalfStar) {
      stars += '☆';
    }
    
    return stars;
  }

  // Course Catalog
  renderCourseCatalog() {
    this.filterCourses();
  }

  filterCourses() {
    const searchTerm = document.getElementById('courseSearch')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    const difficultyFilter = document.getElementById('difficultyFilter')?.value || '';
    const sortFilter = document.getElementById('sortFilter')?.value || 'newest';

    let filtered = COURSES_DATA.courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm) ||
                          course.description.toLowerCase().includes(searchTerm);
      const matchesCategory = !categoryFilter || course.category === categoryFilter;
      const matchesDifficulty = !difficultyFilter || course.difficulty === difficultyFilter;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });

    // Sort courses
    filtered.sort((a, b) => {
      switch (sortFilter) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
          return b.rating - a.rating; // Using rating as popularity proxy
        case 'newest':
        default:
          return 0; // Keep original order for newest
      }
    });

    this.filteredCourses = filtered;
    this.renderCoursesGrid();
  }

  renderCoursesGrid() {
    const grid = document.getElementById('coursesGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (!grid || !emptyState) return;

    if (this.filteredCourses.length === 0) {
      grid.classList.add('hidden');
      emptyState.classList.remove('hidden');
    } else {
      grid.classList.remove('hidden');
      emptyState.classList.add('hidden');
      grid.innerHTML = this.filteredCourses.map(course => this.createCourseCard(course)).join('');
    }
  }

  clearFilters() {
    const courseSearch = document.getElementById('courseSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const sortFilter = document.getElementById('sortFilter');

    if (courseSearch) courseSearch.value = '';
    if (categoryFilter) categoryFilter.value = '';
    if (difficultyFilter) difficultyFilter.value = '';
    if (sortFilter) sortFilter.value = 'newest';
    
    this.filterCourses();
  }

  // Course Reader
  openCourse(courseId) {
    const course = COURSES_DATA.courses.find(c => c.id === courseId);
    if (!course) return;

    this.currentCourse = course;
    this.currentLesson = course.lessons[0];
    
    this.navigateToPage('courseReader');
    this.renderCourseReader();
  }

  renderCourseReader() {
    if (!this.currentCourse) return;

    // Update course header
    const courseTitle = document.getElementById('courseTitle');
    const courseDifficulty = document.getElementById('courseDifficulty');
    const courseDuration = document.getElementById('courseDuration');

    if (courseTitle) courseTitle.textContent = this.currentCourse.title;
    if (courseDifficulty) courseDifficulty.textContent = this.currentCourse.difficulty;
    if (courseDuration) courseDuration.textContent = this.currentCourse.duration;

    // Render lesson navigation
    this.renderLessonNavigation();
    
    // Render current lesson
    this.renderCurrentLesson();
    
    // Update progress
    this.updateProgressDisplay();
    
    // Load notes for current lesson
    this.loadCurrentLessonNotes();
  }

  renderLessonNavigation() {
    const nav = document.getElementById('lessonNav');
    if (!nav) return;

    const lessonsList = this.currentCourse.lessons.map(lesson => {
      const isCompleted = this.isLessonCompleted(this.currentCourse.id, lesson.id);
      const isActive = this.currentLesson && this.currentLesson.id === lesson.id;
      
      return `
        <div class="lesson-nav-item">
          <div class="lesson-nav-link ${isActive ? 'active' : ''}" data-lesson-id="${lesson.id}">
            <div class="lesson-check ${isCompleted ? 'completed' : ''}">
              ${isCompleted ? '✓' : ''}
            </div>
            <div class="lesson-info">
              <div class="lesson-title">${lesson.title}</div>
              <div class="lesson-duration">${lesson.duration}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    nav.innerHTML = lessonsList;

    // Add click listeners to lesson links
    nav.addEventListener('click', (e) => {
      const lessonLink = e.target.closest('.lesson-nav-link');
      if (lessonLink) {
        const lessonId = lessonLink.getAttribute('data-lesson-id');
        this.navigateToLesson(lessonId);
      }
    });
  }

  renderCurrentLesson() {
    if (!this.currentLesson) return;

    const content = document.getElementById('lessonContent');
    if (!content) return;

    // Convert markdown-like content to HTML
    const htmlContent = this.convertMarkdownToHTML(this.currentLesson.content);
    
    content.innerHTML = `
      ${htmlContent}
      ${this.currentLesson.quiz ? `
        <div class="lesson-quiz-section">
          <h3>Test Your Knowledge</h3>
          <p>Ready to check your understanding? Take the quiz for this lesson.</p>
          <button class="btn btn--primary" id="startQuizBtn">Start Quiz</button>
        </div>
      ` : ''}
    `;

    // Add event listener for quiz button
    const startQuizBtn = document.getElementById('startQuizBtn');
    if (startQuizBtn) {
      startQuizBtn.addEventListener('click', () => this.startQuiz());
    }

    // Update navigation buttons
    this.updateLessonNavigation();
  }

  convertMarkdownToHTML(markdown) {
    return markdown
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^- (.*$)/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(?!<[h|u|l])(.+)$/gm, '<p>$1</p>')
      .replace(/<p><\/p>/g, '');
  }

  navigateToLesson(lessonId) {
    const lesson = this.currentCourse.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    this.currentLesson = lesson;
    this.renderCurrentLesson();
    this.renderLessonNavigation();
    this.loadCurrentLessonNotes();
  }

  updateLessonNavigation() {
    const currentIndex = this.currentCourse.lessons.findIndex(l => l.id === this.currentLesson.id);
    const prevBtn = document.getElementById('prevLessonBtn');
    const nextBtn = document.getElementById('nextLessonBtn');

    if (prevBtn) {
      prevBtn.disabled = currentIndex === 0;
      prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    }

    if (nextBtn) {
      nextBtn.disabled = currentIndex === this.currentCourse.lessons.length - 1;
      nextBtn.style.opacity = currentIndex === this.currentCourse.lessons.length - 1 ? '0.5' : '1';
    }
  }

  navigateToPreviousLesson() {
    const currentIndex = this.currentCourse.lessons.findIndex(l => l.id === this.currentLesson.id);
    if (currentIndex > 0) {
      this.navigateToLesson(this.currentCourse.lessons[currentIndex - 1].id);
    }
  }

  navigateToNextLesson() {
    const currentIndex = this.currentCourse.lessons.findIndex(l => l.id === this.currentLesson.id);
    if (currentIndex < this.currentCourse.lessons.length - 1) {
      this.navigateToLesson(this.currentCourse.lessons[currentIndex + 1].id);
    }
  }

  // Progress Management
  isLessonCompleted(courseId, lessonId) {
    return this.userProgress[courseId] && 
           this.userProgress[courseId].lessons[lessonId] && 
           this.userProgress[courseId].lessons[lessonId].completed;
  }

  updateProgressDisplay() {
    if (!this.currentCourse) return;

    const completedLessons = this.currentCourse.lessons.filter(lesson => 
      this.isLessonCompleted(this.currentCourse.id, lesson.id)
    ).length;

    const totalLessons = this.currentCourse.lessons.length;
    const progressPercent = (completedLessons / totalLessons) * 100;

    const progressBar = document.getElementById('courseProgress');
    if (progressBar) {
      progressBar.style.width = `${progressPercent}%`;
    }
  }

  // Quiz System
  startQuiz() {
    if (!this.currentLesson.quiz) return;

    this.quizState = {
      currentQuiz: this.currentLesson.quiz,
      currentQuestion: 0,
      answers: [],
      score: 0
    };

    this.renderQuiz();
    const quizModal = document.getElementById('quizModal');
    if (quizModal) {
      quizModal.classList.remove('hidden');
    }
  }

  renderQuiz() {
    const quizContent = document.getElementById('quizContent');
    if (!quizContent || !this.quizState.currentQuiz) return;

    const question = this.quizState.currentQuiz[this.quizState.currentQuestion];
    
    quizContent.innerHTML = `
      <div class="quiz-question">
        <h4>Question ${this.quizState.currentQuestion + 1} of ${this.quizState.currentQuiz.length}</h4>
        <p>${question.question}</p>
        <ul class="quiz-options">
          ${question.options.map((option, index) => `
            <li class="quiz-option">
              <label>
                <input type="radio" name="quiz-answer" value="${index}">
                ${option}
              </label>
            </li>
          `).join('')}
        </ul>
        <div id="quizFeedback" class="quiz-feedback hidden"></div>
      </div>
      <div class="quiz-actions">
        <button class="btn btn--outline" id="exitQuizBtn">Exit Quiz</button>
        <button class="btn btn--primary" id="submitAnswerBtn">Submit Answer</button>
      </div>
    `;

    // Add event listeners for quiz buttons
    const exitQuizBtn = document.getElementById('exitQuizBtn');
    if (exitQuizBtn) {
      exitQuizBtn.addEventListener('click', () => this.closeQuiz());
    }

    const submitAnswerBtn = document.getElementById('submitAnswerBtn');
    if (submitAnswerBtn) {
      submitAnswerBtn.addEventListener('click', () => this.submitQuizAnswer());
    }
  }

  submitQuizAnswer() {
    const selectedAnswer = document.querySelector('input[name="quiz-answer"]:checked');
    if (!selectedAnswer) {
      this.showToast('Please select an answer');
      return;
    }

    const answerIndex = parseInt(selectedAnswer.value);
    const question = this.quizState.currentQuiz[this.quizState.currentQuestion];
    const isCorrect = answerIndex === question.correct;

    this.quizState.answers.push(answerIndex);
    if (isCorrect) {
      this.quizState.score++;
    }

    this.showQuizFeedback(isCorrect, question);
    
    setTimeout(() => {
      if (this.quizState.currentQuestion < this.quizState.currentQuiz.length - 1) {
        this.quizState.currentQuestion++;
        this.renderQuiz();
      } else {
        this.showQuizResults();
      }
    }, 2000);
  }

  showQuizFeedback(isCorrect, question) {
    const feedback = document.getElementById('quizFeedback');
    if (!feedback) return;

    feedback.classList.remove('hidden');
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
    feedback.innerHTML = `
      <strong>${isCorrect ? 'Correct!' : 'Incorrect'}</strong>
      ${!isCorrect ? `<br>The correct answer is: ${question.options[question.correct]}` : ''}
    `;
  }

  showQuizResults() {
    const percentage = Math.round((this.quizState.score / this.quizState.currentQuiz.length) * 100);
    const passed = percentage >= 70;

    const quizContent = document.getElementById('quizContent');
    if (quizContent) {
      quizContent.innerHTML = `
        <div class="quiz-results">
          <h3>Quiz Complete!</h3>
          <div class="quiz-score">
            <div class="score-circle ${passed ? 'passed' : 'failed'}">
              ${percentage}%
            </div>
            <p>You scored ${this.quizState.score} out of ${this.quizState.currentQuiz.length} questions correctly.</p>
          </div>
          <div class="quiz-actions">
            <button class="btn btn--outline" id="retakeQuizBtn">Retake Quiz</button>
            <button class="btn btn--primary" id="completeLessonBtn">Continue</button>
          </div>
        </div>
      `;

      // Add event listeners for result buttons
      const retakeQuizBtn = document.getElementById('retakeQuizBtn');
      if (retakeQuizBtn) {
        retakeQuizBtn.addEventListener('click', () => this.retakeQuiz());
      }

      const completeLessonBtn = document.getElementById('completeLessonBtn');
      if (completeLessonBtn) {
        completeLessonBtn.addEventListener('click', () => this.completeLesson());
      }
    }

    // Add CSS for quiz results
    if (!document.getElementById('quiz-results-styles')) {
      const style = document.createElement('style');
      style.id = 'quiz-results-styles';
      style.textContent = `
        .quiz-results { text-align: center; }
        .score-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          margin: 20px auto;
          color: white;
        }
        .score-circle.passed { background: var(--color-success); }
        .score-circle.failed { background: var(--color-error); }
      `;
      document.head.appendChild(style);
    }
  }

  retakeQuiz() {
    this.startQuiz();
  }

  completeLesson() {
    this.updateLessonProgress(this.currentCourse.id, this.currentLesson.id, true);
    this.closeQuiz();
    this.showToast('Lesson completed! 🎉');
    
    // Auto-advance to next lesson if available
    const currentIndex = this.currentCourse.lessons.findIndex(l => l.id === this.currentLesson.id);
    if (currentIndex < this.currentCourse.lessons.length - 1) {
      setTimeout(() => {
        this.navigateToNextLesson();
      }, 1500);
    }
  }

  closeQuiz() {
    const quizModal = document.getElementById('quizModal');
    if (quizModal) {
      quizModal.classList.add('hidden');
    }
    
    this.quizState = {
      currentQuiz: null,
      currentQuestion: 0,
      answers: [],
      score: 0
    };
  }

  // Focus Mode
  toggleFocusMode() {
    this.focusMode = !this.focusMode;
    const readerContent = document.querySelector('.reader-content');
    const focusModeBtn = document.getElementById('focusModeBtn');
    
    if (this.focusMode) {
      readerContent?.classList.add('focus-mode');
      if (focusModeBtn) focusModeBtn.textContent = 'Exit Focus';
      this.showToast('Focus mode enabled');
    } else {
      readerContent?.classList.remove('focus-mode');
      if (focusModeBtn) focusModeBtn.textContent = 'Focus';
      this.showToast('Focus mode disabled');
    }
  }

  // Notes System
  toggleNotes() {
    const notesSidebar = document.getElementById('notesSidebar');
    const notesBtn = document.getElementById('notesToggleBtn');
    
    if (notesSidebar && notesBtn) {
      if (notesSidebar.classList.contains('hidden')) {
        notesSidebar.classList.remove('hidden');
        notesBtn.textContent = 'Hide Notes';
      } else {
        notesSidebar.classList.add('hidden');
        notesBtn.textContent = 'Notes';
      }
    }
  }

  loadCurrentLessonNotes() {
    if (!this.currentCourse || !this.currentLesson) return;
    
    const notes = this.loadNotes(this.currentCourse.id, this.currentLesson.id);
    const textarea = document.getElementById('notesTextarea');
    if (textarea) {
      textarea.value = notes;
    }
  }

  saveCurrentNotes() {
    if (!this.currentCourse || !this.currentLesson) return;
    
    const textarea = document.getElementById('notesTextarea');
    if (textarea) {
      this.saveNotes(this.currentCourse.id, this.currentLesson.id, textarea.value);
    }
  }

  // Testimonials
  loadTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;

    grid.innerHTML = COURSES_DATA.testimonials.map(testimonial => `
      <div class="testimonial-card">
        <div class="testimonial-avatar">${testimonial.avatar}</div>
        <div class="testimonial-content">"${testimonial.content}"</div>
        <div class="testimonial-author">${testimonial.name}</div>
        <div class="testimonial-role">${testimonial.role}</div>
      </div>
    `).join('');
  }

  // Form Handling
  handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail')?.value;
    const messageEl = document.getElementById('newsletterMessage');
    
    if (!email || !messageEl) return;
    
    // Simple email validation
    if (!this.isValidEmail(email)) {
      messageEl.textContent = 'Please enter a valid email address.';
      messageEl.className = 'form-message error';
      return;
    }
    
    // Simulate API call
    messageEl.textContent = 'Thank you for subscribing! We\'ll be in touch soon.';
    messageEl.className = 'form-message success';
    
    const emailInput = document.getElementById('newsletterEmail');
    if (emailInput) emailInput.value = '';
    
    this.showToast('Successfully subscribed to newsletter!');
  }

  handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const messageEl = document.getElementById('contactMessage');
    
    if (!form || !messageEl) return;
    
    // Simple validation
    const name = document.getElementById('contactName')?.value;
    const email = document.getElementById('contactEmail')?.value;
    const subject = document.getElementById('contactSubject')?.value;
    const message = document.getElementById('contactMessage')?.value;
    
    if (!name || !email || !subject || !message) {
      messageEl.textContent = 'Please fill in all required fields.';
      messageEl.className = 'form-message error';
      return;
    }
    
    if (!this.isValidEmail(email)) {
      messageEl.textContent = 'Please enter a valid email address.';
      messageEl.className = 'form-message error';
      return;
    }
    
    // Simulate API call
    messageEl.textContent = 'Thank you for your message! We\'ll get back to you within 24 hours.';
    messageEl.className = 'form-message success';
    form.reset();
    
    this.showToast('Message sent successfully!');
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Keyboard Shortcuts
  handleKeyboardShortcuts(e) {
    // Only handle shortcuts when not in input fields
    if (e.target.matches('input, textarea, select')) return;
    
    switch (e.key.toLowerCase()) {
      case 't':
        if (e.ctrlKey || e.metaKey) return; // Allow browser shortcuts
        e.preventDefault();
        this.toggleTheme();
        break;
      case 'f':
        if (e.ctrlKey || e.metaKey) return; // Allow browser shortcuts
        e.preventDefault();
        if (this.currentPage === 'courseReader') {
          this.toggleFocusMode();
        }
        break;
      case '=':
      case '+':
        if (this.currentPage === 'courseReader') {
          e.preventDefault();
          this.toggleFontSize();
        }
        break;
      case 'escape':
        // Close modals
        this.closeQuiz();
        break;
    }
  }

  // Toast Notifications
  showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    const messageEl = document.getElementById('toastMessage');
    
    if (!toast || !messageEl) return;
    
    messageEl.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('show');
    
    setTimeout(() => {
      this.hideToast();
    }, duration);
  }

  hideToast() {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 300);
    }
  }

  // Utility Methods
  renderCurrentPage() {
    // Initial page rendering logic if needed
    this.navigateToPage(this.currentPage);
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  window.drownfordApp = new DrownfordApp();
});

// Handle page visibility changes for better performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden, save any pending data
    if (window.drownfordApp) {
      window.drownfordApp.saveUserProgress();
    }
  }
});

// Handle before unload to save progress
window.addEventListener('beforeunload', () => {
  if (window.drownfordApp) {
    window.drownfordApp.saveUserProgress();
  }
});