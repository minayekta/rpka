import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importing jest-dom for extended matchers
import KanbanBoard from '../src/components/KanbanBoard';
import { defaultTasks } from './libs/data/data';

describe('KanbanBoard Component', () => {
  it('renders without crashing', () => {
    render(<KanbanBoard />);
    expect(screen.getByTestId('kanban-board')).toBeInTheDocument();
  });

  it('renders RayanIcon component', () => {
    render(<KanbanBoard />);
    expect(screen.getByTestId('rayan-icon')).toBeInTheDocument();
  });


  // For example, testing state updates
  it('calls createTask function when a new task is created', () => {
    const createTaskMock = jest.fn();
    render(<KanbanBoard createTask={defaultTasks} />);


    // Check if createTask function is called
    expect(createTaskMock).toHaveBeenCalled();
  });
});