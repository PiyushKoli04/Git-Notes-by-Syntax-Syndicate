
import React from 'react';
import { LessonLayout } from '../components/LessonLayout';
import { Terminal } from '../components/Terminal';
import { CodeBlock } from '../components/CodeBlock';
import { Github, Upload, Download, Eye, Star } from 'lucide-react';

const GitHubBasics: React.FC = () => {
  const githubCommands = [
    {
      input: 'git remote add origin https://github.com/username/my-repo.git',
      output: '',
      explanation: 'Connect your local repository to GitHub. Replace username/my-repo with your actual repository.'
    },
    {
      input: 'git branch -M main',
      output: '',
      explanation: 'Rename the current branch to "main" (GitHub\'s default branch name).'
    },
    {
      input: 'git push -u origin main',
      output: 'Enumerating objects: 3, done.\nCounting objects: 100% (3/3), done.\nWriting objects: 100% (3/3), 242 bytes | 242.00 KiB/s, done.\nTotal 3 (delta 0), reused 0 (delta 0)\nTo https://github.com/username/my-repo.git\n * [new branch]      main -> main\nBranch \'main\' set up to track remote branch \'main\' from \'origin\'.',
      explanation: 'Upload your local commits to GitHub. The -u flag sets up tracking for future pushes.'
    },
    {
      input: 'git pull origin main',
      output: 'Already up to date.',
      explanation: 'Download any new changes from GitHub to your local repository.'
    }
  ];

  return (
    <LessonLayout
      title="GitHub Essentials"
      description="Learn to work with remote repositories and collaborate on GitHub"
      prevLesson={{ path: '/branching', title: 'Branching & Merging' }}
      nextLesson={{ path: '/collaboration', title: 'Collaboration' }}
    >
      <div className="space-y-8">
        {/* What is GitHub */}
        <div className="bg-gradient-card p-6 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Github className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">What is GitHub?</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            GitHub is a cloud-based platform that hosts Git repositories. Think of it as 
            "Google Drive for code" - it stores your projects online, enables collaboration, 
            and provides additional features like issue tracking and project management.
          </p>
        </div>

        {/* GitHub vs Git */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                <span className="text-accent font-bold text-sm">Git</span>
              </span>
              Git (Local)
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Version control system</li>
              <li>• Works on your computer</li>
              <li>• Tracks file changes</li>
              <li>• Command-line tool</li>
            </ul>
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Github className="w-8 h-8 text-primary" />
              GitHub (Remote)
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Cloud hosting service</li>
              <li>• Stores repos online</li>
              <li>• Enables collaboration</li>
              <li>• Web interface + features</li>
            </ul>
          </div>
        </div>

        {/* Working with Remote Repositories */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Connecting to GitHub</h2>
          <Terminal commands={githubCommands} interactive={true} />
        </div>

        {/* Key GitHub Concepts */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <Upload className="w-8 h-8 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Push (Upload)</h3>
            <p className="text-muted-foreground mb-4">
              Send your local commits to GitHub so others can see your work.
            </p>
            <CodeBlock 
              code="git push origin main"
              language="bash"
              copyable={true}
            />
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <Download className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">Pull (Download)</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest changes from GitHub to your local repository.
            </p>
            <CodeBlock 
              code="git pull origin main"
              language="bash"
              copyable={true}
            />
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <Eye className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Clone</h3>
            <p className="text-muted-foreground mb-4">
              Download an entire repository from GitHub to start working on it.
            </p>
            <CodeBlock 
              code="git clone https://github.com/user/repo.git"
              language="bash"
              copyable={true}
            />
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <Star className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">Fork</h3>
            <p className="text-muted-foreground mb-4">
              Create your own copy of someone else's repository to experiment with.
            </p>
            <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">
              Done through GitHub's web interface
            </div>
          </div>
        </div>

        {/* GitHub Features */}
        <div className="bg-accent/10 border border-accent/20 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-accent">🚀 GitHub Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">For Developers</h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Issue tracking and bug reports</li>
                <li>• Pull requests for code review</li>
                <li>• GitHub Actions for automation</li>
                <li>• Releases and version tags</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">For Teams</h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Team management and permissions</li>
                <li>• Project boards for planning</li>
                <li>• Code review workflows</li>
                <li>• Documentation with wikis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
};

export default GitHubBasics;
