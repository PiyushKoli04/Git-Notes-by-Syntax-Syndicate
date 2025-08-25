
import React from 'react';
import { LessonLayout } from '../components/LessonLayout';
import { Terminal } from '../components/Terminal';
import { CodeBlock } from '../components/CodeBlock';
import { GitBranch, GitMerge, Plus, Shuffle } from 'lucide-react';

const Branching: React.FC = () => {
  const branchCommands = [
    {
      input: 'git branch',
      output: '* main',
      explanation: 'Shows all branches. The asterisk (*) indicates your current branch.'
    },
    {
      input: 'git branch feature-login',
      output: '',
      explanation: 'Creates a new branch called "feature-login" but stays on the current branch.'
    },
    {
      input: 'git checkout feature-login',
      output: 'Switched to branch \'feature-login\'',
      explanation: 'Switches to the feature-login branch. Now your changes will be made on this branch.'
    },
    {
      input: 'echo "Login feature" > login.js',
      output: '',
      explanation: 'Create a new file on the feature branch.'
    },
    {
      input: 'git add login.js && git commit -m "Add login feature"',
      output: '[feature-login a1b2c3d] Add login feature\n 1 file changed, 1 insertion(+)',
      explanation: 'Commit the changes to the feature branch.'
    },
    {
      input: 'git checkout main',
      output: 'Switched to branch \'main\'',
      explanation: 'Switch back to the main branch. Notice login.js is not here!'
    },
    {
      input: 'git merge feature-login',
      output: 'Updating 1a2b3c4..a1b2c3d\nFast-forward\n login.js | 1 +\n 1 file changed, 1 insertion(+)',
      explanation: 'Merges the feature-login branch into main. Now login.js appears in main!'
    }
  ];

  return (
    <LessonLayout
      title="Branching & Merging"
      description="Master Git's powerful branching system for parallel development"
      prevLesson={{ path: '/repositories', title: 'Repositories' }}
      nextLesson={{ path: '/github-basics', title: 'GitHub Basics' }}
    >
      <div className="space-y-8">
        {/* What is Branching */}
        <div className="bg-gradient-card p-6 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">What is Branching?</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Branching allows you to create separate lines of development. Think of it as creating 
            parallel universes of your code where you can experiment without affecting the main project.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Analogy:</strong> Imagine writing a book. The main branch 
              is your published story, but you create branches to try different plot twists without 
              affecting the original until you're happy with the changes.
            </p>
          </div>
        </div>

        {/* Interactive Branching Demo */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Interactive Branching Workflow</h2>
          <Terminal commands={branchCommands} interactive={true} />
        </div>

        {/* Branch Operations */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <Plus className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">Creating Branches</h3>
            <CodeBlock 
              code="# Create and switch to new branch
git checkout -b feature-name

# Or create without switching
git branch feature-name"
              language="bash"
              copyable={true}
            />
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <Shuffle className="w-8 h-8 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Switching Branches</h3>
            <CodeBlock 
              code="# Switch to existing branch
git checkout branch-name

# Modern alternative
git switch branch-name"
              language="bash"
              copyable={true}
            />
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <GitMerge className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Merging Branches</h3>
            <CodeBlock 
              code="# Switch to target branch first
git checkout main

# Then merge the feature
git merge feature-name"
              language="bash"
              copyable={true}
            />
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <GitBranch className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">Managing Branches</h3>
            <CodeBlock 
              code="# List all branches
git branch

# Delete merged branch
git branch -d feature-name"
              language="bash"
              copyable={true}
            />
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-accent/10 border border-accent/20 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-accent">🌟 Branching Best Practices</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-accent font-bold">•</span>
              <div>
                <strong>Use descriptive names:</strong>
                <code className="bg-code-bg px-2 py-1 rounded text-code-string ml-2">feature/user-authentication</code>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent font-bold">•</span>
              <div>
                <strong>Keep branches focused:</strong> One feature or fix per branch
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent font-bold">•</span>
              <div>
                <strong>Regular commits:</strong> Commit often with clear messages
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent font-bold">•</span>
              <div>
                <strong>Clean up:</strong> Delete branches after merging
              </div>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
};

export default Branching;
