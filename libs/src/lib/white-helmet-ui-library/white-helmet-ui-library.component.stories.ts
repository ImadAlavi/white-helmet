import type { Meta, StoryObj } from '@storybook/angular';
import { WhiteHelmetUiLibraryComponent } from './white-helmet-ui-library.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<WhiteHelmetUiLibraryComponent> = {
  component: WhiteHelmetUiLibraryComponent,
  title: 'WhiteHelmetUiLibraryComponent',
};
export default meta;
type Story = StoryObj<WhiteHelmetUiLibraryComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/white-helmet-ui-library works!/gi)).toBeTruthy();
  },
};
