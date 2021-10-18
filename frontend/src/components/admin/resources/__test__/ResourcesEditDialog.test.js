import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ResourcesContext } from '../../../../contexts/ResourcesContext';

import { ResourcesEditDialog } from '../ResourcesEditDialog';

const testResource = {
  name: 'Example resource name',
  author: 'Example resource author',
  duration: 12345,
  link: 'https://www.test.com',
};

const MockResourcesEditDialog = (props) => {
  return (
    <ResourcesContext.Provider
      value={{
        editingResource: props.editingResource,
      }}
    >
      <ResourcesEditDialog {...props} />
    </ResourcesContext.Provider>
  );
};

describe('ResourceEditDialog', () => {
  it('should display `New resource` if no parameters are passed', () => {
    render(<MockResourcesEditDialog />);

    expect(screen.getByText('New resource')).toBeVisible();
  });

  it('should display `Edit resource` if editing resource is passed', () => {
    render(<MockResourcesEditDialog editingResource={testResource} />);

    expect(screen.getByText('Edit resource')).toBeVisible();
  });

  it('should display correct values in editing fields', () => {
    render(<MockResourcesEditDialog editingResource={testResource} />);

    expect(screen.getByDisplayValue(testResource.name)).toBeVisible();
    expect(screen.getByDisplayValue(testResource.author)).toBeVisible();
    expect(screen.getByDisplayValue(testResource.duration)).toBeVisible();
    expect(screen.getByDisplayValue(testResource.link)).toBeVisible();
  });
});
