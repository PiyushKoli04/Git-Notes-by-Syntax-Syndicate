import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface LessonLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  prevLesson?: { path: string; title: string };
  nextLesson?: { path: string; title: string };
}

export const LessonLayout: React.FC<LessonLayoutProps> = ({
  children,
  title,
  description,
  prevLesson,
  nextLesson
}) => {
  return (
    <div className="flex min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-xl text-muted-foreground">{description}</p>
          </header>

          <div className="space-y-8">
            {children}
          </div>

          <footer className="mt-12 pt-8 border-t border-border flex justify-between items-center">
            {prevLesson ? (
              <Button variant="outline" asChild>
                <Link to={prevLesson.path}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {prevLesson.title}
                </Link>
              </Button>
            ) : (
              <div />
            )}

            {nextLesson && (
              <Button variant="default" asChild>
                <Link to={nextLesson.path}>
                  {nextLesson.title}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            )}
          </footer>
        </div>
      </main>
    </div>
  );
};