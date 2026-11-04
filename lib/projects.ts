export interface Project {
  title: string;
  category: string;
  year: number;
  description: string;
  technologies: string[];
  projectUrl?: string;
  sourceUrl?: string;
}

// Array order is display order ("Latest first"), so list newest at the top.
// Replace these placeholders with the data your Flask app was passing in.
export const projects: Project[] = [
  {
    title: "Example project",
    category: "Robotics",
    year: 2026,
    description: "A short description of what the project does and why.",
    technologies: ["Python", "C++"],
    projectUrl: "https://example.com",
    sourceUrl: "https://github.com/your-username/example",
  },
];