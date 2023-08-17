/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'dozer',
    'architecture',
    'installation',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting_started',
      },
      collapsed: false,
      items: [
        {
          type: 'html',
          value: 'DOZER CORE',
          defaultStyle: false,
          className: 'sidebar-item-group',
          customProps: {
            id: 'dozer-core',
          },
        },
        'getting_started/core/connecting-to-sources',
        'getting_started/core/adding-transformations',
        'getting_started/core/querying-data',
        'getting_started/core/monitoring-your-application'
        // {
        //   type: 'html',
        //   value: 'DOZER CLOUD',
        //   defaultStyle: false,
        //   className: 'sidebar-item-group',
        //   customProps: {
        //     id: 'dozer-cloud',
        //   },
        // },
        // 'getting_started/cloud/installation',
      ]
    },

    'cli-reference',
    {
      type: 'category',
      label: 'Configuration',
      link: {
        type: 'doc',
        id: 'configuration',
      },
      items: [
        {
          type: 'category',
          label: 'Data Sources',
          link: {
            type: "generated-index",
            title: "Data Sources"
          },
          collapsed: false,
          items: [
            'configuration/sources/postgres',
            'configuration/sources/mongodb',
            'configuration/sources/mysql',
            'configuration/sources/snowflake',
            'configuration/sources/kafka',

            {
              type: 'category',
              label: 'Object Stores',
              link: {
                type: 'doc',
                id: 'configuration/sources/object-stores',
              },
              items: [
                {
                  type: 'html',
                  value: 'STORAGE TYPES',
                  defaultStyle: false,
                  className: 'sidebar-item-group',
                  customProps: {
                    id: 'object-stores',
                  },
                },
                'configuration/sources/object-stores/types/aws-s3',
                // 'configuration/sources/object-stores/types/google-cloud-storage',
                // 'configuration/sources/object-stores/types/azure-blob-storage',
                {
                  type: 'html',
                  value: 'FILE FORMATS',
                  defaultStyle: false,
                  className: 'sidebar-item-group',
                  customProps: {
                    id: 'file-formats',
                  },
                },
                'configuration/sources/object-stores/formats/csv',
                'configuration/sources/object-stores/formats/parquet',
                'configuration/sources/object-stores/formats/deltalake',
              ]
            },
            'configuration/sources/ethereum',
            'configuration/sources/grpc',
          ],
        },
      
      ]
    },

    {
      type: 'category',
      label: 'Transforming Data using SQL',
      link: {
        type: 'doc',
        id: 'transforming-data',
      },
      items: [
        'transforming-data/data-types',
        'transforming-data/operators',
        'transforming-data/scalar-functions',
        'transforming-data/aggregation-functions',
        'transforming-data/geospatial',
        'transforming-data/json',
      ]
    },


    {
      type: 'category',
      label: 'Accessing Data',
      link: {
        type: 'doc',
        id: 'accessing-data',
      },
      items: [
        'accessing-data/querying-using-grpc',
        'accessing-data/querying-using-rest',
        'accessing-data/authorization'
      ]
    },
    {
      type: 'category',
      label: 'Deployment',
      link: {
        type: 'doc',
        id: 'deployment',
      },
      items: []
    }

   
  ],
};

module.exports = sidebars;
