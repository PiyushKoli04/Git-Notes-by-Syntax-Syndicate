import React from 'react';
import { LessonLayout } from '../components/LessonLayout';
import { Terminal } from '../components/Terminal';
import { CodeBlock } from '../components/CodeBlock';
import { Download, Monitor, Apple, Smartphone } from 'lucide-react';

const Installation: React.FC = () => {
  const installCommands = [
    {
      input: 'git --version',
      output: 'git version 2.34.1',
      explanation: 'Check if Git is already installed and see the version number.'
    },
    {
      input: 'git config --global user.name "Your Name"',
      output: '',
      explanation: 'Set your name that will appear in your commits.'
    },
    {
      input: 'git config --global user.email "your.email@example.com"',
      output: '',
      explanation: 'Set your email address for commits.'
    },
    {
      input: 'git config --list',
      output: 'user.name=Your Name\nuser.email=your.email@example.com\ncore.editor=nano',
      explanation: 'Verify your configuration settings are correct.'
    }
  ];

  return (
    <LessonLayout
      title="Installing Git"
      description="Get Git up and running on your system in minutes"
      prevLesson={{ path: '/what-is-git', title: 'What is Git?' }}
      nextLesson={{ path: '/basic-commands', title: 'Basic Commands' }}
    >
      <div className="space-y-8">
        {/* Installation Methods */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <Monitor className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Windows</h3>
            <p className="text-muted-foreground mb-4">
              Download Git for Windows from the official website. It includes Git Bash, a terminal emulator.
            </p>
            <CodeBlock 
              code="# Download from: https://git-scm.com/download/win
# Or use Chocolatey:
choco install git"
              language="bash"
              copyable={true}
            />
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <Apple className="w-8 h-8 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3">macOS</h3>
            <p className="text-muted-foreground mb-4">
              Use Homebrew for easy installation, or download from the official site.
            </p>
            <CodeBlock 
              code="# Using Homebrew:
brew install git

# Or using Xcode Command Line Tools:  
xcode-select --install"
              language="bash"
              copyable={true}
            />
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <Smartphone className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">Linux</h3>
            <p className="text-muted-foreground mb-4">
              Most Linux distributions include Git in their package managers.
            </p>
            <CodeBlock 
              code="# Ubuntu/Debian:
sudo apt-get install git

# CentOS/RHEL/Fedora:
sudo yum install git"
              language="bash"
              copyable={true}
            />
          </div>
        </div>

        {/* Configuration */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Download className="w-6 h-6 text-primary" />
            First-Time Setup
          </h2>
          
          <div className="bg-gradient-card p-6 rounded-xl border border-border mb-6">
            <p className="text-muted-foreground mb-4">
              After installing Git, you need to configure your identity. This information will be 
              included in your commits and helps identify who made which changes.
            </p>
          </div>

          <Terminal commands={installCommands} interactive={true} />
        </div>

        {/* Verification */}
        <div className="bg-accent/10 border border-accent/20 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-accent">✅ Verify Installation</h2>
          <p className="text-muted-foreground mb-4">
            Run these commands to make sure everything is working correctly:
          </p>
          <CodeBlock 
            code="git --version
git config --global --list"
            language="bash"
            copyable={true}
          />
          <p className="text-muted-foreground mt-4">
            You should see your Git version and configuration details. If you see this, you're ready to start using Git!
          </p>
        </div>
      </div>
    </LessonLayout>
  );
};

export default Installation;