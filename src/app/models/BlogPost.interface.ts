export interface BlogPostInterface {
  _id: string;
  title: string;
  date: string;
  link?: string;
  content: string; // can have HTML tags
}
