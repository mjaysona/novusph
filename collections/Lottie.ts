import { CollectionConfig } from 'payload/dist/collections/config/types';

export type Type = {
  name: string,
}

const Lottie: CollectionConfig = {
  slug: 'lottie',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: (): boolean => true,
  },
  upload: {
    adminThumbnail: 'card',
    mimeTypes: ['application/json'],
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
};

export default Lottie;
