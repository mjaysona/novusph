import { Block } from 'payload/types';
import link from '../../fields/link';

type Data = Record<string, unknown>;

export type Type = {
  title: 'image',
  description?: unknown
  type: 'svg' | 'lottie'
}

export const HomeBanner: Block = {
  slug: 'header',
  labels: {
    singular: 'Home Banner',
    plural: 'Home Banners',
  },
  fields: [
    {
      name: 'title',
      label: 'Homepage Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Homepage Description',
      type: 'richText',
    },
    link,
    {
      name: 'graphics',
      type: 'group',
      fields: [
        {
          name: 'type',
          label: 'Type',
          required: true,
          type: 'radio',
          defaultValue: 'lottie',
          options: [
            {
              label: 'Lottie Animation',
              value: 'lottie',
            },
            {
              label: 'SVG',
              value: 'svg',
            },
          ],
        },
        {
          name: 'lottie',
          label: 'Select Lottie Animation',
          type: 'relationship',
          relationTo: 'lotties',
          required: true,
          admin: {
            condition: (_: Data, siblings: Data): boolean => (
              siblings.type === 'lottie'
            ),
          },
        },
      ],
    },
  ],
};
