import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import path from 'path';
import Page from './collections/Page';
import Media from './collections/Media';
import Lottie from './collections/Lottie';
import List from './collections/List';
import Team from './collections/Team';
import Menu from './globals/Menu';
import SocialMedia from './globals/SocialMedia';

dotenv.config();

export default buildConfig({
  admin: {
    css: path.resolve(__dirname, './css/overrides.css'),
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
    Lottie,
    List,
    Team,
  ],
  globals: [
    Menu,
    SocialMedia,
  ],
});
