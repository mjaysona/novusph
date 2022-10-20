import { GlobalConfig } from 'payload/types';

const SocialMedia: GlobalConfig = {
  slug: 'social-media',
  label: 'Social Media',
  fields: [
    {
      name: 'social-media-links',
      labels: {
        singular: 'Social Media Link',
        plural: 'Social Media Links',
      },
      type: 'array',
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'Link',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};

export default SocialMedia;
