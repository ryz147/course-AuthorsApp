import { CourseApp1Page } from './app.po';

describe('course-app1 App', function() {
  let page: CourseApp1Page;

  beforeEach(() => {
    page = new CourseApp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
