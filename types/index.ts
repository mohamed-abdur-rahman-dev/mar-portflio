export type Project = {
  id:          string;
  name:        string;
  outcome:     string;
  tech:        string[];
  highlights:  string[];
  metrics?:    string[];
  architectureDiagram?: string;
  decisions?:  { label: string; value: string }[];
  links: {
    demo?:         string;
    github?:       string;
    architecture?: string;
  };
};

export type WorkExperience = {
  role:     string;
  company:  string;
  location: string;
  date:     string;
  bullets:  string[];
  link?:    string;
};
