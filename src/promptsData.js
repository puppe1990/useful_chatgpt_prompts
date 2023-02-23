import React from 'react';
import PropTypes from 'prop-types';

const categories = [
  { id: 0, name: 'All' },
  { id: 1, name: 'Resume' },
  { id: 2, name: 'Copywriting' },
  { id: 3, name: 'Role Playing' },
  { id: 4, name: 'Programming' },
  { id: 5, name: 'Useful Prompts' },
  { id: 6, name: 'Daily Life' },
  { id: 7, name: 'Marketing' },
  { id: 8, name: 'Writing' },
  { id: 9, name: 'Learning New Things' },
  { id: 10, name: 'Language Learning' },
];

const prompts = [
  // Resume
  {
    id: 1,
    category: 'Resume',
    title: 'Ask for Resume Feedback',
    description:
      'What can I do to make this position resume better? Please provide specific suggestions and rewrite the experience with your suggestions. Please keep the format. Attach the resume',
  },
  {
    id: 2,
    category: 'Resume',
    title: 'Add Quantitative Data to Resume',
    description: 'Add quantitative data to the following resume. Attach the resume',
  },
  {
    id: 3,
    category: 'Resume',
    title: 'Make Resume More Concise',
    description: 'Make the following resume more concise without sacrificing the quality. Attach the resume',
  },
  {
    id: 4,
    category: 'Resume',
    title: 'Customize Resume',
    description:
      'I am applying for position and company, rewrite the following experience, so that I can better fit company name\'s corporate culture. Attach the experience\n👉 I am applying for Google\'s front-end engineer, rewrite the following experience, so that I can better fit Google\'s corporate culture. [Attach the experience]',
  },

  // Copywriting
  {
    id: 5,
    category: 'Copywriting',
    title: 'Social Media Copywriting',
    description:
      'Create a compelling, eye-catching social media post for purpose. The post should include keyword 1, keyword 2, and keyword 3. Also, it should follow these rules: rule 1, rule 2, rule 3, and rule 4.\n👉 Create a compelling, eye-catching Instagram post for promoting my brand. The post should include #travel, #disney, and #disneyworld. Also, it should follow these rules: 1. Use the share voice. 2. Be about 80-100 words. 3. Include a call to action. 4. Include 5-10 tags.',
  },
  {
    id: 6,
    category: 'Copywriting',
    title: 'Social Media Post Title',
    description:
      'Write 5 social media post titles about Topic for Social Media Platform, following these rules: rule 1, rule 2, and rule 3\n👉 Write 5 social media post titles about Disney World for Instagram, following these rules: 1. Titles should be less than 20 characters. 2. Titles should include emojis. 3. Titles should be in the form of a question.',
  },
  {
    id: 7,
    category: 'Copywriting',
    title: 'Email Writing',
    description: 'Write me a formal email to recipient about purpose.\n👉 Write me a formal email to Google about business collaboration.',
  },
  {
    id: 8,
    category: 'Copywriting',
    title: 'Email Writing',
    description:
      'You are a position, I will send you an email, you need to reply to this email. Email: attach content\n👉 You are a product manager, I will send you an email, you need to reply to this email. Email: [attach content]',},
      {
      id: 9,
      category: 'Copywriting',
      title: 'Production Description',
      description:
      'Write a 10 sentence product description for the following product keywords. Product keywords: keyword 1, keyword 2, keyword 3, and keyword 4.\n👉 Write a 10 sentence product description for the following product keywords. Product keywords: sneakers, spring, multiple colors, and suitable for running.',
      },
      {
      id: 10,
      category: 'Copywriting',
      title: 'Outlines',
      description: 'Write an outline for the following article: attach content\n👉 Write an outline for the following article: [attach content]',
      },
      {
      id: 11,
      category: 'Copywriting',
      title: 'Write a Blog Post',
      description: 'Write a number word blog post about topic.\n👉 Write a 500 word blog post about the latest iPhone.',
      },
      
      // Role Playing
      {
      id: 12,
      category: 'Role Playing',
      title: 'General Role Playing',
      description: 'You are a role, I will ask you some questions, you need to answer them professionally. My first question is: question\n👉 You are a career coach, I will ask you some questions, you need to answer them professionally. My first question is: How to set my career goal?',
      },
      {
      id: 13,
      category: 'Role Playing',
      title: 'Interviewer',
      description:
      'You are a role interviewer, and I am a role interviewee. You need to follow these rules: rule 1, rule 2, and rule 3. My first sentence is: sentence\n👉 You are a product manager interviewer, and I am a product manager interviewee. You need to follow these rules: 1. You can only ask me questions related to product management. 2. No need to write explanations. 3. You need to wait for me to answer the question before asking the next question. My first sentence is: ...',
      },
      {
      id: 14,
      category: 'Role Playing',
      title: 'Tour Guide',
      description:
      'You are a tour guide, I will give you the location of my travel, you need to recommend a place near my location. In some cases, I will also tell you the type of the place I want to travel. You will also recommend me a place similar to the type of the first place near my location. My first request is request.',
      },
      
      // Programming
      {
      id: 15,
      category: 'Programming',
      title: 'Write a function',
      description:
      'Your are programming language expert, please write a function that can do something.\n👉 You are a JavaScript expert, please write a function that can do input a one-dimensional array, convert this one-dimensional array into a two-dimensional array. At the same time, I can freely decide the length of the subarray in the two-dimensional array.',
      },
      {
      id: 16,
      category: 'Programming',
      title: 'Explain Code',
      description:
      'You are a programming language expert, please explain the following code to me. attach code\n👉 You are a Rust expert, please explain the following Rust code to me. [attach code]',
    },
    {
    id: 17,
    category: 'Programming',
    title: 'Refactor Code',
    description:
    'You are a Clean Code expert, I have the following code, please refactor it in a more clean and concise way so that my colleagues can maintain the code more easily. Also, explain why you want to refactor the code so that I can add the explanation to the Pull Request. attach code',
    },
    {
    id: 18,
    category: 'Programming',
    title: 'Debug',
    description:
    'You are a programming language expert, I have a piece of code and, I expect this code to do something, but it fails the test case. Please help me find out what I did wrong and rewrite it in the correct way. attach code\n👉 You are a C++ expert. I have a piece of code and I expect this code to check if a string is a palindrome, but it fails the test case abbccde. Please help me find out what I did wrong and rewrite it in the correct way. [attach code]',
    },
    {
    id: 19,
    category: 'Programming',
    title: 'Write test',
    description:
    'You are a programming language expert, I have a piece of code attach code, please write tests for it. Please provide at least number test cases, and cover the extreme cases, so that I can be sure that my code is correct. attach code\n👉 You are a python expert. I have a piece of code [attach code], please write a test for it. Please provide at least 5 test cases, and cover the extreme cases, so that I can be sure that my code is correct. [attach code]',
    },
    {
    id: 20,
    category: 'Programming',
    title: 'Write Regex',
    description:
    'You are now a Regex Expert, please write a Regex that can do something\n👉 You are now a Regex Expert, please write a Regex that can extract all the numbers from a string',
    },
    
    // Useful Prompts
    {
    id: 21,
    category: 'Useful Prompts',
    title: 'How to do something',
    description: 'How to do something?\n👉 How to make a website?',
    },
    {
    id: 22,
    category: 'Useful Prompts',
    title: 'Summarize a topic',
    description: 'Summarize topic for me.\n👉 Summarize the topic of quantum computer for me.',
    },
    {
    id: 23,
    category: 'Useful Prompts',
    title: 'Summarize an article',
    description: 'Summarize article for me based on the following content: attach content',
    },
    {
    id: 24,
    category: 'Useful Prompts',
    title: 'Teach me something',
    description: 'You are an expert in topic, teach me something about topic.\n👉 You are an expert in machine learning, teach me something about machine learning.',
    },
    
    // Daily Life
    {
    id: 25,
    category: 'Daily Life',
    title: 'Provide a recipe',
    description: 'Please list the shopping list and steps of this recipe: number person of a dish.\n👉 Please list the shopping list and steps of this recipe: 1 person of tomato egg.',
    },
    {
    id: 26,
    category: 'Daily Life',
    title: 'Event Planning',
    description: 'Please help me plan a event for number people.\n👉 Please help me plan a birthday party for 10 people.',
  },
  {
  id: 27,
  category: 'Daily Life',
  title: 'Brainstorming',
  description: 'Please help me brainstorm topic.\n👉 Please help me brainstorm the topic of how to celebrate the wedding anniversary.',
  },
  {
  id: 28,
  category: 'Daily Life',
  title: 'Travel Plan',
  description: 'Generate a travel plan for number days in location, the transportation is transportation. You need to follow these rules: rule 1, rule 2, and rule 3.\n👉 Generate a travel plan for 5 days in Tokyo, the transportation is bus, subway and train. You need to follow these rules: 1. The location should include Tokyo Tower, Mount Fuji, Disney Land 2. Need to include how to travel 3. No more than three locations per day.',
  },
  
  // Marketing
  {
  id: 29,
  category: 'Marketing',
  title: 'SEO Keyword',
  description: 'Please list the SEO keywords for topic.\n👉 Please list the SEO keywords for the topic of NBA.',
  },
  
  // Writing
  {
  id: 30,
  category: 'Writing',
  title: 'Short Story',
  description: 'Write a short story about topic.\n👉 Write a short story about the topic of a girl who never gives up.',
  },
  {
  id: 31,
  category: 'Writing',
  title: 'Research Report',
  description: 'Write a research report about topic.\n👉 Write a research report about the topic of the impact of COVID-19 on the economy.',
  },
  
  // Learning New Things
  {
  id: 32,
  category: 'Learning New Things',
  title: 'Learning and self testing',
  description: 'As a domain expert, teach me a topic in the domain and give me a quiz on it. I will answer it and you tell me if I am right or wrong.\n👉 As a math expert, teach me how calculus works and give me a quiz on it. I will answer it and you tell me if I am right or wrong.',
  },
  {
  id: 33,
  category: 'Learning New Things',
  title: 'Explain a topic in depth',
  description: 'You are now a position, I need to understand topic. Please explain it in depth.\n👉 You are now a senior computer engineer, I need to understand how a CPU works. Please explain it in depth.',
  },
  {
  id: 34,
  category: 'Learning New Things',
  title: 'Explain a complex concept in a simple way',
  description: 'You are now a position, I need to understand topic. Please describe it in a simple way.\n👉 You are now a math teacher, I need to understand the working principle of quadratic formula. Please describe it in a simple way.',
  },
  
  // Language Learning
  {
  id: 35,
  category: 'Language Learning',
  title: 'Learn English Vocabulary',
  description: 'Please explain word, and give me 5 examples of using it in a sentence.\n👉 Please explain "ubiquitous", and give me 5 examples of using it in a sentence.',
  },
  {
  id: 36,
  category: 'Language Learning',
  title: 'Improve Conversational Skills',
  description: 'Can we have a conversation about topic?\n👉 Can we have a conversation about "artificial intelligence"?',
},
];

const Prompts = ({ list, setShow }) => {
  return (
    <div>
      {/* Category buttons */}
      <div>
        {categories.map((category) => (
          <button key={category.id} onClick={() => setShow(category.name)}>
            {category.name}
          </button>
        ))}
      </div>
      {/* Prompt list */}
      <div>
    {list.map((prompt) => (
      <div key={prompt.id}>
        <h3>{prompt.title}</h3>
        <p>{prompt.description}</p>
      </div>
        ))}
      </div>
    </div>

  );
};

Prompts.propTypes = {
  list: PropTypes.array.isRequired,
  setShow: PropTypes.func.isRequired,
};

export { categories, prompts, Prompts };
