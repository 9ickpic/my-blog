export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
  projectUrl: string | null;
  githubUrl: string | null;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
};
