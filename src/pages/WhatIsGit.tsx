import React from 'react';
import { LessonLayout } from '../components/LessonLayout';
import { Terminal } from '../components/Terminal';
import { CodeBlock } from '../components/CodeBlock';
import { GitBranch, Save, Users, History } from 'lucide-react';

const WhatIsGit: React.FC = () => {
  const demoCommands = [
    {
      input: 'git init my-project',
      output: 'Initialized empty Git repository in /my-project/.git/',
      explanation: 'This creates a new Git repository in a folder called "my-project". Git will now track changes to files in this directory.'
    },
    {
      input: 'echo "Hello World" > README.md',
      output: '',
      explanation: 'We create a simple text file. This represents any file you might work on in your project.'
    },
    {
      input: 'git add README.md',
      output: '',
      explanation: 'This tells Git to start tracking changes to README.md. The file is now "staged" for the next commit.'
    },
    {
      input: 'git commit -m "Add initial README"',
      output: '[main (root-commit) a1b2c3d] Add initial README\n 1 file changed, 1 insertion(+)\n create mode 100644 README.md',
      explanation: 'This saves a snapshot of your project. Git creates a permanent record with the message "Add initial README".'
    }
  ];

  return (
    <LessonLayout
      title="What is Git?"
      description="Understanding version control and why Git is essential for any developer"
      nextLesson={{ path: '/installation', title: 'Installation' }}
    >
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Version Control System</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Git is a <strong className="text-foreground">distributed version control system</strong> that tracks 
              changes in your files over time. Think of it as a sophisticated "save" system that remembers 
              every version of your project and lets you collaborate with others seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-card p-4 rounded-lg border border-border">
              <Save className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold mb-2">Track Changes</h3>
              <p className="text-sm text-muted-foreground">
                Every modification is recorded with who made it and when
              </p>
            </div>
            
            <div className="bg-gradient-card p-4 rounded-lg border border-border">
              <Users className="w-8 h-8 text-secondary mb-3" />
              <h3 className="font-semibold mb-2">Collaborate</h3>
              <p className="text-sm text-muted-foreground">
                Multiple people can work on the same project without conflicts
              </p>
            </div>
            
            <div className="bg-gradient-card p-4 rounded-lg border border-border">
              <History className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Time Travel</h3>
              <p className="text-sm text-muted-foreground">
                Go back to any previous version of your project instantly
              </p>
            </div>
            
            <div className="bg-gradient-card p-4 rounded-lg border border-border">
              <GitBranch className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold mb-2">Branch & Merge</h3>
              <p className="text-sm text-muted-foreground">
                Work on features separately, then combine them safely
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">See Git in Action</h3>
          <Terminal commands={demoCommands} interactive={true} />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">Why Every Developer Needs Git</h2>
        
        <div className="bg-gradient-card p-6 rounded-xl border border-border">
          <h3 className="text-xl font-semibold mb-4">Imagine This Scenario...</h3>
          <p className="text-muted-foreground mb-4">
            You're working on a website. You make changes, but something breaks. Without Git, 
            you might have to manually undo everything or restore from a backup (if you have one).
          </p>
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">With Git:</strong> You simply run <code className="bg-code-bg px-2 py-1 rounded text-code-string">git checkout</code> 
            and instantly return to any working version. You can see exactly what changed, 
            when it changed, and who changed it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-destructive">Without Git 😰</h3>
            <CodeBlock 
              title="File Management Nightmare"
              code={`project-folder/
├── index.html
├── index-backup.html
├── index-backup-2.html
├── index-working-copy.html
├── index-final.html
├── index-final-final.html
└── index-actually-final.html`}
              language="text"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-accent">With Git 😍</h3>
            <CodeBlock 
              title="Clean & Organized"
              code={`project-folder/
├── index.html
└── .git/
    └── (All versions safely stored)`}
              language="text"
            />
          </div>
        </div>
      </div>
    </LessonLayout>
  );
};

export default WhatIsGit;