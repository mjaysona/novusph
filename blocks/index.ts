import { CallToAction, Component as cta } from './CallToAction';
import { Content, Component as content } from './Content';
import {
  ContentWithListBadgesComponent as contentWithListBadges,
} from './ContentWithListBadges';
import {
  ContentWithGenericListComponent as contentWithGenericList,
} from './ContentWithGenericList';
import { HomeBanner } from './HomeBanner';
import { Image, Component as image } from './Image';

export const collections = {
  CallToAction,
  Content,
  Image,
  HomeBanner,
};

export const components = {
  cta,
  content,
  contentWithListBadges,
  contentWithGenericList,
  image,
};
