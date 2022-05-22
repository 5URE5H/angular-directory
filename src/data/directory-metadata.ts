import { Directory, Type } from './directory-type';

export const data: Directory[] = [
  {
    name: 'One',
    type: Type.folder,
    children: [
      {
        name: 'One_One',
        type: Type.folder,
        children: [
          {
            name: 'One_One_One',
            type: Type.file,
          },
          {
            name: 'One_One_Two',
            type: Type.folder,
            children: [
              {
                name: 'One_One_Two_One',
                type: Type.file,
              },
              {
                name: 'One_One_Two_Two',
                type: Type.file,
              },
            ],
          },
        ],
      },
      {
        name: 'One_Two',
        type: Type.folder,
        children: [
          {
            name: 'One_Two_One',
            type: Type.folder,
            children: [
              {
                name: 'One_Two_One_One',
                type: Type.file,
              },
              {
                name: 'One_Two_One_Two',
                type: Type.file,
              },
            ],
          },
        ],
      },
      {
        name: 'One_Three',
        type: Type.folder,
        children: [
          {
            name: 'One_Three_One',
            type: Type.file,
          },
          {
            name: 'One_Three_Two',
            type: Type.file,
          },
        ],
      },
    ],
  },
  {
    name: 'Two',
    type: Type.folder,
    children: [
      {
        name: 'Two_One',
        type: Type.folder,
        children: [
          {
            name: 'Two_One_One',
            type: Type.folder,
            children: [
              {
                name: 'Two_One_One_One',
                type: Type.file,
              },
            ],
          },
          {
            name: 'Two_One_Two',
            type: Type.file,
          },
        ],
      },
      {
        name: 'Two_Two',
        type: Type.file,
      },
    ],
  },
  {
    name: 'Three',
    type: Type.file,
  },
];
