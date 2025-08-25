import React from 'react';
import { Button } from '../components/ui/button';
import { Navigation } from '../components/Navigation';
import { 
  GitBranch, 
  Github, 
  Code, 
  Users, 
  BookOpen,
  Play,
  CheckCircle,
  Star
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="flex-1 ml-64">
        {/* Hero Section */}
        <section className="px-8 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 inline-block">
              <div className="flex items-center justify-center gap-4 mb-6">
                <GitBranch className="w-16 h-16 text-primary animate-glow" />
                <Github className="w-16 h-16 text-secondary" />
              </div>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 gradient-text">
              Master Git & GitHub
            </h1>
            
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Learn version control from scratch with interactive lessons, 
              hands-on exercises, and real-world examples. Perfect for beginners and pros alike.
            </p>
            
            <div className="flex gap-4 justify-center mb-12">
              <Button variant="hero" size="xl" asChild>
                <a href="/what-is-git">
                  <Play className="w-6 h-6 mr-2" />
                  Start Learning
                </a>
              </Button>
              
              <Button variant="github" size="xl" asChild>
                <a href="/basic-commands">
                  <Code className="w-6 h-6 mr-2" />
                  Try Commands
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Why Learn With GitMaster?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-card p-8 rounded-xl border border-border interactive-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Interactive Learning</h3>
                <p className="text-muted-foreground">
                  Practice Git commands in a real terminal simulator. See instant results 
                  and understand exactly what each command does.
                </p>
              </div>
              
              <div className="bg-gradient-card p-8 rounded-xl border border-border interactive-hover">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Step-by-Step Lessons</h3>
                <p className="text-muted-foreground">
                  From complete beginner to advanced workflows. Each lesson builds 
                  on the previous one with clear explanations.
                </p>
              </div>
              
              <div className="bg-gradient-card p-8 rounded-xl border border-border interactive-hover">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real Collaboration</h3>
                <p className="text-muted-foreground">
                  Learn GitHub workflows, pull requests, and team collaboration 
                  with practical examples and best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="px-8 py-16 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Your Learning Journey</h2>
            
            <div className="space-y-6">
              {[
                { title: 'What is Git?', description: 'Understanding version control concepts', completed: true },
                { title: 'Installation & Setup', description: 'Get Git running on your system', completed: true },
                { title: 'Basic Commands', description: 'Learn essential Git operations', current: true },
                { title: 'Working with Repositories', description: 'Create and manage Git repositories', upcoming: true },
                { title: 'Branching & Merging', description: 'Master Git\'s powerful branching system', upcoming: true },
                { title: 'GitHub Essentials', description: 'Remote repositories and collaboration', upcoming: true },
                { title: 'Advanced Workflows', description: 'Pull requests, code reviews, and more', upcoming: true },
                { title: 'Best Practices', description: 'Professional Git workflows and tips', upcoming: true },
              ].map((lesson, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gradient-card border border-border">
                  <div className={`progress-dot ${lesson.completed ? 'completed' : lesson.current ? 'current' : 'upcoming'}`}></div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{lesson.title}</h3>
                    <p className="text-muted-foreground text-sm">{lesson.description}</p>
                  </div>
                  {lesson.completed && <CheckCircle className="w-5 h-5 text-accent" />}
                  {lesson.current && <Star className="w-5 h-5 text-primary animate-pulse" />}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;