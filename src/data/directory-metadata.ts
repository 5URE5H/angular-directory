import { Directory, Type } from './directory-type';

export const data: Directory[] = [
  {
    name: 'src',
    type: Type.folder,
    children: [
      {
        name: 'app',
        type: Type.folder,
        children: [
          {
            name: 'app.module.ts',
            type: Type.file,
          },
          {
            name: 'app.component.ts',
            type: Type.file,
          },
          {
            name: 'app.component.html',
            type: Type.file,
          },
          {
            name: 'app.component.css',
            type: Type.file,
          },
          {
            name: 'preview',
            type: Type.folder,
            children: [
              {
                name: 'preview.component.ts',
                type: Type.file,
              },
              {
                name: 'preview.component.html',
                type: Type.file,
              },
              {
                name: 'preview.component.css',
                type: Type.file,
              },
            ],
          },
        ],
      },
      {
        name: 'assets',
        type: Type.folder,
        children: [
          {
            name: 'images',
            type: Type.folder,
            children: [
              {
                name: 'user.png',
                type: Type.file,
              },
              {
                name: 'banner.jpg',
                type: Type.file,
              },
            ],
          },
          {
            name: 'logo',
            type: Type.folder,
            children: [
              {
                name: 'main-logo.svg',
                type: Type.file,
              },
              {
                name: 'icon.png',
                type: Type.file,
              },
            ],
          },
        ],
      },
      {
        name: 'services',
        type: Type.folder,
        children: [
          {
            name: 'record.service.ts',
            type: Type.file,
          },
          {
            name: 'user.service.ts',
            type: Type.file,
          },
        ],
      },
    ],
  },
  {
    name: 'lib',
    type: Type.folder,
    children: [
      {
        name: 'common',
        type: Type.folder,
        children: [
          {
            name: 'src',
            type: Type.folder,
            children: [
              {
                name: 'index.ts',
                type: Type.file,
              },
            ],
          },
          {
            name: 'index.ts',
            type: Type.file,
          },
        ],
      },
      {
        name: 'package.json',
        type: Type.file,
      },
    ],
  },
  {
    name: 'index.html',
    type: Type.file,
  },
];
