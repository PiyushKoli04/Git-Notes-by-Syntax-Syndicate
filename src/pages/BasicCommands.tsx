import React from 'react';
import { LessonLayout } from '../components/LessonLayout';
import { Terminal } from '../components/Terminal';
import { CodeBlock } from '../components/CodeBlock';
import { Terminal as TerminalIcon, FileText, Plus, Save } from 'lucide-react';

const BasicCommands: React.FC = () => {
  const basicCommands = [
    {
      input: 'git status',
      output: 'On branch main\nNothing to commit, working tree clean',
      explanation: 'Shows the current state of your repository. This is your first go-to command to see what\'s happening.'
    },
    {
      input: 'echo "# My Project" > README.md',
      output: '',
      explanation: 'Creates a new file. Let\'s see how Git detects this change.'
    },
    {
      input: 'git status',
      output: 'On branch main\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n        README.md\n\nnothing added to commit but untracked files present (use "git add" to track)',
      explanation: 'Git detected our new file! It\'s "untracked" - Git sees it but isn\'t managing it yet.'
    },
    {
      input: 'git add README.md',
      output: '',
      explanation: 'Stages the file. Think of this as putting the file in a "staging area" before making it permanent.'
    },
    {
      input: 'git commit -m "Add project README"',
      output: '[main a1b2c3d] Add project README\n 1 file changed, 1 insertion(+)\n create mode 100644 README.md',
      explanation: 'Commits the change! This creates a permanent snapshot with your descriptive message.'
    }
  ];

  const commands = [
    {
      command: 'git init',
      description: 'Initialize a new Git repository',
      example: 'git init my-project'
    },
    {
      command: 'git status',
      description: 'Check the status of your working directory',
      example: 'git status'
    },
    {
      command: 'git add',
      description: 'Stage files for the next commit',
      example: 'git add filename.txt\ngit add .'
    },
    {
      command: 'git commit',
      description: 'Create a snapshot of staged changes',
      example: 'git commit -m "Your message here"'
    },
    {
      command: 'git log',
      description: 'View commit history',
      example: 'git log --oneline'
    },
    {
      command: 'git diff',
      description: 'See what has changed',
      example: 'git diff\ngit diff --staged'
    }
  ];

  return (
    <LessonLayout
      title="Essential Git Commands"
      description="Master the fundamental commands every Git user needs to know"
      prevLesson={{ path: '/installation', title: 'Installation' }}
      nextLesson={{ path: '/repositories', title: 'Working with Repositories' }}
    >
      <div className="space-y-8">
        {/* Interactive Demo */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <TerminalIcon className="w-6 h-6 text-primary" />
            Interactive Git Demo
          </h2>
          <p className="text-muted-foreground mb-6">
            Follow along with this interactive demo to understand the basic Git workflow:
          </p>
          <Terminal commands={basicCommands} interactive={true} />
        </div>

        {/* The Git Workflow */}
        <div className="bg-gradient-card p-6 rounded-xl border border-border">
          <h2 className="text-2xl font-semibold mb-6">The Basic Git Workflow</h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <FileText className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
              <h3 className="font-semibold mb-2">1. Edit Files</h3>
              <p className="text-sm text-muted-foreground">Make changes to your project files</p>
            </div>
            
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <Plus className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">2. Stage Changes</h3>
              <p className="text-sm text-muted-foreground">Use <code>git add</code> to select changes</p>
            </div>
            
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <Save className="w-8 h-8 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold mb-2">3. Commit</h3>
              <p className="text-sm text-muted-foreground">Save snapshot with <code>git commit</code></p>
            </div>
            
            <div className="text-center p-4 bg-secondary/10 rounded-lg">
              <TerminalIcon className="w-8 h-8 mx-auto mb-3 text-secondary" />
              <h3 className="font-semibold mb-2">4. Repeat</h3>
              <p className="text-sm text-muted-foreground">Continue the cycle for each change</p>
            </div>
          </div>
        </div>

        {/* Command Reference */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Command Quick Reference</h2>
          
          <div className="grid gap-4">
            {commands.map((cmd, index) => (
              <div key={index} className="bg-gradient-card p-4 rounded-lg border border-border">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary font-mono">{cmd.command}</h3>
                    <p className="text-muted-foreground">{cmd.description}</p>
                  </div>
                  <div className="lg:w-80">
                    <CodeBlock 
                      code={cmd.example} 
                      language="bash"
                      copyable={true}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Tips */}
        <div className="bg-accent/10 border border-accent/20 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-accent">💡 Pro Tips</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              Always use <code className="bg-code-bg px-2 py-1 rounded text-code-string">git status</code> before and after commands to understand what's happening
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              Write clear, descriptive commit messages - your future self will thank you!
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              Use <code className="bg-code-bg px-2 py-1 rounded text-code-string">git add .</code> to stage all changed files at once
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <code className="bg-code-bg px-2 py-1 rounded text-code-string">git log --oneline</code> shows a compact view of your commit history
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
};

export default BasicCommands;