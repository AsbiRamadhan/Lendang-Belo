export interface PostItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  createdAt: string;
}

export interface BlogFormData {
  title: string;
  slug: string;
  author: string;
  excerpt: string;
  content: string;
  imagePath: string;
}

export interface AlertMessage {
  type: "success" | "error";
  text: string;
}
