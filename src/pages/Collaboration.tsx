
import React from 'react';
import { LessonLayout } from '../components/LessonLayout';
import { Terminal } from '../components/Terminal';
import { CodeBlock } from '../components/CodeBlock';
import { Users, GitPullRequest, MessageSquare, Shield } from 'lucide-react';

const Collaboration: React.FC = () => {
  const collabCommands = [
    {
      input: 'git checkout -b fix-login-bug',
      output: 'Switched to a new branch \'fix-login-bug\'',
      explanation: 'Create a new branch for your contribution. Always work on a separate branch!'
    },
    {
      input: 'echo "Fixed login validation" > fix.js',
      output: '',
      explanation: 'Make your changes to fix the issue.'
    },
    {
      input: 'git add . && git commit -m "Fix login validation bug"',
      output: '[fix-login-bug a1b2c3d] Fix login validation bug\n 1 file changed, 1 insertion(+)',
      explanation: 'Commit your changes with a clear, descriptive message.'
    },
    {
      input: 'git push origin fix-login-bug',
      output: 'To https://github.com/username/project.git\n * [new branch]      fix-login-bug -> fix-login-bug',
      explanation: 'Push your branch to GitHub to create a pull request.'
    }
  ];

  return (
    <LessonLayout
      title="Collaboration & Teamwork"
      description="Master GitHub workflows for effective team collaboration"
      prevLesson={{ path: '/github-basics', title: 'GitHub Basics' }}
    >
      <div className="space-y-8">
        {/* Collaboration Overview */}
        <div className="bg-gradient-card p-6 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">Collaborating on GitHub</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            GitHub transforms individual coding into team collaboration. Learn the workflows 
            that allow hundreds of developers to work on the same project without conflicts.
          </p>
        </div>

        {/* The Contribution Workflow */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">The Standard Contribution Workflow</h2>
          <Terminal commands={collabCommands} interactive={true} />
        </div>

        {/* Pull Requests */}
        <div className="bg-gradient-card p-6 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-4">
            <GitPullRequest className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-semibold">Pull Requests (PRs)</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            A pull request is a way to propose changes to a repository. It's like saying 
            "Hey, I made some improvements. Would you like to include them?"
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">1. Create</h3>
              <p className="text-sm text-muted-foreground">
                Push your branch and open a PR on GitHub's web interface
              </p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">2. Review</h3>
              <p className="text-sm text-muted-foreground">
                Team members review your code and suggest improvements
              </p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">3. Merge</h3>
              <p className="text-sm text-muted-foreground">
                Once approved, your changes are merged into the main branch
              </p>
            </div>
          </div>
        </div>

        {/* Collaboration Features */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <MessageSquare className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">Code Reviews</h3>
            <p className="text-muted-foreground mb-4">
              Team members can comment on specific lines of code, suggest improvements, 
              and ensure quality before merging.
            </p>
            <div className="bg-muted/50 p-3 rounded text-sm text-muted-foreground">
              "This function could be optimized..." 💬
            </div>
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border">
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Branch Protection</h3>
            <p className="text-muted-foreground mb-4">
              Protect important branches by requiring reviews, passing tests, 
              and preventing direct pushes.
            </p>
            <div className="bg-muted/50 p-3 rounded text-sm text-muted-foreground">
              Requires 2 approving reviews ✅
            </div>
          </div>
        </div>

        {/* Collaboration Best Practices */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Collaboration Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent">✅ Do This</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <div>
                    <strong>Clear commit messages</strong>
                    <br />
                    <code className="text-sm bg-code-bg px-2 py-1 rounded text-code-string">
                      "Fix user authentication bug in login form"
                    </code>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <div>
                    <strong>Small, focused pull requests</strong>
                    <br />
                    <span className="text-sm text-muted-foreground">Easier to review and understand</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <div>
                    <strong>Write descriptive PR descriptions</strong>
                    <br />
                    <span className="text-sm text-muted-foreground">Explain what and why you changed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-destructive">❌ Avoid This</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <div>
                    <strong>Vague commit messages</strong>
                    <br />
                    <code className="text-sm bg-code-bg px-2 py-1 rounded text-muted-foreground">
                      "Fixed stuff" or "WIP"
                    </code>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <div>
                    <strong>Massive pull requests</strong>
                    <br />
                    <span className="text-sm text-muted-foreground">Hard to review, more likely to have bugs</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <div>
                    <strong>Pushing directly to main</strong>
                    <br />
                    <span className="text-sm text-muted-foreground">Bypasses code review and testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="bg-accent/10 border border-accent/20 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-accent">🚀 Quick Collaboration Commands</h2>
          <CodeBlock 
            code={`# Start contributing to a project
git clone https://github.com/user/project.git
cd project
git checkout -b my-feature

# Make changes, then...
git add .
git commit -m "Add amazing new feature"
git push origin my-feature

# Create pull request on GitHub web interface
# After PR is merged:
git checkout main
git pull origin main
git branch -d my-feature  # Clean up`}
            language="bash"
            copyable={true}
          />
        </div>
      </div>
    </LessonLayout>
  );
};

export default Collaboration;
