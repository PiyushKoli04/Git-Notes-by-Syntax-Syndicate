
import React from 'react';
import { LessonLayout } from '../components/LessonLayout';
import { Terminal } from '../components/Terminal';
import { CodeBlock } from '../components/CodeBlock';
import { FolderOpen, GitBranch, Download, Upload } from 'lucide-react';

const Repositories: React.FC = () => {
  const repoCommands = [
    {
      input: 'mkdir my-new-project',
      output: '',
      explanation: 'Create a new directory for your project.'
    },
    {
      input: 'cd my-new-project',
      output: '',
      explanation: 'Navigate into the new directory.'
    },
    {
      input: 'git init',
      output: 'Initialized empty Git repository in /my-new-project/.git/',
      explanation: 'Initialize a new Git repository in the current directory.'
    },
    {
      input: 'git remote add origin https://github.com/username/my-repo.git',
      output: '',
      explanation: 'Connect your local repository to a remote repository on GitHub.'
    },
    {
      input: 'git remote -v',
      output: 'origin  https://github.com/username/my-repo.git (fetch)\norigin  https://github.com/username/my-repo.git (push)',
      explanation: 'Verify that your remote repository is properly connected.'
    }
  ];

  return (
    <LessonLayout
      title="Working with Repositories"
      description="Learn how to create, clone, and manage Git repositories"
      prevLesson={{ path: '/basic-commands', title: 'Basic Commands' }}
      nextLesson={{ path: '/branching', title: 'Branching & Merging' }}
    >
      <div className="space-y-8">
        {/* What is a Repository */}
        <div className="bg-gradient-card p-6 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-4">
            <FolderOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">What is a Repository?</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A Git repository (or "repo") is a directory that contains your project files along with 
            a special <code className="bg-code-bg px-2 py-1 rounded text-code-string">.git</code> folder 
            that tracks all the changes, history, and metadata of your project.
          </p>
        </div>

        {/* Creating Repositories */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Creating a New Repository</h2>
          <Terminal commands={repoCommands} interactive={true} />
        </div>

        {/* Types of Repositories */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <Download className="w-8 h-8 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Local Repository</h3>
            <p className="text-muted-foreground mb-4">
              Lives on your computer. This is where you do your actual work and make commits.
            </p>
            <CodeBlock 
              code="git init
# Creates a new local repository"
              language="bash"
              copyable={true}
            />
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <Upload className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">Remote Repository</h3>
            <p className="text-muted-foreground mb-4">
              Lives on a server (like GitHub). Used for backup and collaboration with others.
            </p>
            <CodeBlock 
              code="git clone https://github.com/user/repo.git
# Downloads a remote repository"
              language="bash"
              copyable={true}
            />
          </div>
        </div>

        {/* Cloning vs Initializing */}
        <div className="bg-accent/10 border border-accent/20 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-accent">💡 Clone vs Initialize</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Use <code>git init</code> when:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Starting a brand new project</li>
                <li>• Converting existing files to a Git repo</li>
                <li>• You want to create everything from scratch</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Use <code>git clone</code> when:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Working on an existing project</li>
                <li>• Contributing to someone else's code</li>
                <li>• You want to download and work on a repo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
};

export default Repositories;
