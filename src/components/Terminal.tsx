import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Play, RotateCcw } from 'lucide-react';

interface TerminalProps {
  commands: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  interactive?: boolean;
}

export const Terminal: React.FC<TerminalProps> = ({ commands, interactive = false }) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const currentCommand = commands[currentCommandIndex];

  const typeText = (text: string, callback?: () => void) => {
    setIsTyping(true);
    setTypedText('');
    let i = 0;
    
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        if (callback) callback();
      }
    }, 50);
  };

  const runCommand = () => {
    if (!currentCommand) return;
    
    typeText(currentCommand.input, () => {
      setTimeout(() => {
        setShowOutput(true);
      }, 500);
    });
  };

  const nextCommand = () => {
    if (currentCommandIndex < commands.length - 1) {
      setCurrentCommandIndex(currentCommandIndex + 1);
      setTypedText('');
      setShowOutput(false);
    }
  };

  const resetDemo = () => {
    setCurrentCommandIndex(0);
    setTypedText('');
    setShowOutput(false);
  };

  useEffect(() => {
    if (!interactive) {
      runCommand();
    }
  }, [currentCommandIndex, interactive]);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        <span className="text-sm text-muted-foreground ml-2">Git Terminal</span>
      </div>
      
      <div className="terminal-content">
        <div className="flex items-center mb-2">
          <span className="text-terminal-prompt">$</span>
          <span className="ml-2 text-terminal-command">
            {typedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </span>
        </div>
        
        {showOutput && currentCommand?.output && (
          <div className="text-terminal-text mb-4 whitespace-pre-line">
            {currentCommand.output}
          </div>
        )}

        {currentCommand?.explanation && showOutput && (
          <div className="mt-4 p-3 bg-muted rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Explanation:</strong> {currentCommand.explanation}
            </p>
          </div>
        )}

        {interactive && (
          <div className="flex gap-2 mt-4">
            <Button 
              onClick={runCommand} 
              variant="default" 
              size="sm"
              disabled={isTyping || showOutput}
            >
              <Play className="w-4 h-4 mr-2" />
              Run Command
            </Button>
            
            {showOutput && currentCommandIndex < commands.length - 1 && (
              <Button onClick={nextCommand} variant="outline" size="sm">
                Next Command
              </Button>
            )}
            
            <Button onClick={resetDemo} variant="ghost" size="sm">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};