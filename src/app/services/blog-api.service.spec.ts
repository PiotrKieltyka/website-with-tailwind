import { BlogApiService } from './blog-api.service';
import { BlogPostInterface } from '../models/BlogPost.interface';
import { of } from 'rxjs';

const expectedPosts: Array<BlogPostInterface> = [
  {
    _id: '6161b94050e9400008ad2500',
    title: 'What’s new with DevTools: Cross-Browser Edition.',
    date: 'October 9, 2021',
    link: 'https://www.smashingmagazine.com/2021/09/devtools-cross-browser-edition/',
    content:
      'Learn what’s new with developer tools in Firefox, Edge, Chrome and Safari. Discover new and powerful features that will help you be more comfortable and productive when testing and debugging across browsers.',
  },
  {
    _id: '6161b8f450e9400008ad24fd',
    title: 'Design patterns in JavaScript.',
    date: 'October 5, 2021',
    link: 'https://dev.to/zeeshanhshaheen/design-patterns-in-javascript-1pgm',
    content: '20+ Design Patterns explanation in JavaScript.',
  },
  {
    _id: '6161b84650e9400008ad24f9',
    title: 'Designing beautiful shadows in CSS.',
    date: 'October 1, 2021',
    link: 'https://www.joshwcomeau.com/css/designing-shadows/',
    content: 'Click below if you want to know how to make prettier shadows.',
  },
];

describe('BlogApiService', () => {
  let httpClientSpy: { get: jest.SpyInstance };
  let service: BlogApiService;

  beforeEach(() => {
    service = new BlogApiService(httpClientSpy as any, 'api.host');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
