import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
      render(<Nav />);
    });
  
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
      
        expect(asFragment()).toMatchSnapshot();
      });
  })

  //test for emoji visibility
  describe('emoji is visible', () => {
      it('inserts emoji into the h2', () => {
          //Arrange
        const { getByLabelText } = render(<Nav />); //getByLabelText function return a snapshot of Nav component
        expect(getByLabelText('camera')).toHaveTextContent('📸');
          //Assert
      });
  })

  //test for link visibility, we'll verify that the text content is being inserted into the <a> tags (i.e., that the links are visible to users). 
  describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })

