import type { Schema, Attribute } from '@strapi/strapi';

export interface CateSubsection extends Schema.Component {
  collectionName: 'components_cate_subsections';
  info: {
    displayName: 'subsection';
  };
  attributes: {
    name: Attribute.String;
    billboard_category: Attribute.Relation<
      'cate.subsection',
      'oneToOne',
      'api::billboard-category.billboard-category'
    >;
  };
}

export interface RatecardRatecardtable extends Schema.Component {
  collectionName: 'components_ratecard_ratecardtables';
  info: {
    displayName: 'ratecardtable';
  };
  attributes: {
    faces: Attribute.String;
    rate: Attribute.String;
    maximum_qty: Attribute.String;
    city: Attribute.Relation<
      'ratecard.ratecardtable',
      'oneToOne',
      'api::city.city'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cate.subsection': CateSubsection;
      'ratecard.ratecardtable': RatecardRatecardtable;
    }
  }
}
