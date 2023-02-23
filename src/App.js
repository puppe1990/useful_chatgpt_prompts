import React, { useState } from 'react';
import { Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = [
  'All',
  'Resume',
  'Copywriting',
  'Role Playing',
  'Programming',
  'Useful Prompts',
  'Daily Life',
  'Marketing',
  'Writing',
  'Learning New Things',
  'Language Learning'
];

const categoryPrompts = {
  'All': [
    'What are some tips for staying productive?',
    'What is your favorite book and why?',
    'What are some good conversation starters for meeting new people?'
  ],
  'Resume': [
    'What are some key skills to include on a resume?',
    'How do you highlight your accomplishments on a resume?',
    'What is the best way to format a resume?'
  ],
  'Copywriting': [
    'How do you write a compelling headline?',
    'What are some techniques for improving your writing?',
    'What is the importance of storytelling in copywriting?'
  ],
  'Role Playing': [
    'What are some tips for creating a believable character?',
    'How do you create a compelling story for a role-playing game?',
    'What is the best way to handle conflicts between players in a role-playing game?'
  ],
  'Programming': [
    'What are some essential programming concepts every developer should know?',
    'What are some common coding mistakes to avoid?',
    'How do you debug code effectively?'
  ],
  'Useful Prompts': [
    'What are some tips for dealing with stress?',
    'How do you overcome writer\'s block?',
    'What are some good ways to network professionally?'
  ],
  'Daily Life': [
    'What are some tips for staying organized?',
    'How do you develop healthy habits?',
    'What are some good ways to unwind after a long day?'
  ],
  'Marketing': [
    'What are some effective marketing strategies for a new product?',
    'How do you create a successful social media campaign?',
    'What is the importance of market research in marketing?'
  ],
  'Writing': [
    'How do you write a great story?',
    'What are some tips for improving your writing style?',
    'What is the best way to edit your own writing?'
  ],
  'Learning New Things': [
    'What are some effective ways to learn a new skill?',
    'How do you overcome the fear of failure when learning something new?',
    'What is the importance of practice when learning a new skill?'
  ],
  'Language Learning': [
    'What are some effective ways to learn a new language?',
    'How do you stay motivated when learning a new language?',
    'What are some good ways to practice speaking a new language?'
  ]
};

const Prompts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrompts = categoryPrompts[selectedCategory].filter(prompt =>
    prompt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategorySelect = category => {
    setSelectedCategory(category);
    setSearchTerm('');
  };

  const handlePromptCopy = prompt => {
    navigator.clipboard.writeText(prompt);
  };

  return (
    <Container>
      <h1 className="my-4 ">CHATGPT Prompts</h1>
      <Row>
        <Col xs={12} md={4}>
          <h2>Categories</h2>
          {categories.map(category => (
            <Button
              key={category}
              variant={category === selectedCategory ? 'primary' : 'secondary'}
              onClick={() => handleCategorySelect(category)}
              className="mr-2 my-1"
            >
              {category}
            </Button>
          ))}
        </Col>
        <Col xs={12} md={8}>
          <h2>Prompts</h2>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search for prompts..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </InputGroup>
          {filteredPrompts.length === 0 && (
            <p>No prompts found for this category.</p>
          )}
          {filteredPrompts.map(prompt => (
            <div key={prompt} className="mb-3">
              <p>{prompt}</p>
              <Button variant="secondary" onClick={() => handlePromptCopy(prompt)}>
                Copy
              </Button>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Prompts;
