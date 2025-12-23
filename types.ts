import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  icon?: React.ReactNode;
}

export interface Skill {
  name: string;
  category: 'core' | 'web' | 'tools';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}