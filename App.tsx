import React, { useState, useCallback } from 'react';
import { ClipboardIcon, CheckIcon, SparklesIcon, TrashIcon } from './components/Icons';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleConvert = useCallback(() => {
    const convertedText = inputText
      .trim()
      .split(/\n\s*\n/) // Split into paragraphs by blank lines
      .map(paragraph => {
        // Collapse each paragraph into a single line by replacing newlines with spaces
        const singleLine = paragraph.replace(/\n/g, ' ').trim();
        
        if (singleLine.length === 0) {
          return '';
        }
        
        const match = singleLine.match(/^(\S+)(.*)/);
        if (!match) {
          return singleLine;
        }
        
        let firstWord = match[1];
        const restOfLine = match[2].trim();

        if (firstWord.endsWith(':')) {
          // If a colon is already there, just ensure spacing is right.
          return `${firstWord} ${restOfLine}`.trim();
        }

        return `${firstWord}: ${restOfLine}`.trim();
      })
      .filter(line => line.length > 0) // Filter out any empty results from blank paragraphs
      .join('\n'); // Join processed paragraphs with a single newline
    setOutputText(convertedText);
  }, [inputText]);

  const handleCopy = useCallback(() => {
    if (outputText) {
      navigator.clipboard.writeText(outputText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  }, [outputText]);
  
  const handleClear = useCallback(() => {
    setInputText('');
    setOutputText('');
  }, []);

  const placeholderText = `Muichiro
Tanjiro. (Calm, flat tone—slight pause before speaking)

Tanjiro
What?

Giyu Tomioka You should know that already.`;

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Script Formatter
          </h1>
          <p className="text-lg text-gray-400 mt-2">Instantly format your dialogue scripts.</p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <label htmlFor="input-text" className="text-xl font-semibold text-white">Your Text</label>
            <textarea
              id="input-text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={placeholderText}
              className="bg-gray-800 border-2 border-gray-700 rounded-xl p-4 w-full h-80 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-none"
              aria-label="Input text for script formatting"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="output-text" className="text-xl font-semibold text-white">Formatted Text</label>
            <div className="relative w-full h-80">
              <textarea
                id="output-text"
                value={outputText}
                readOnly
                placeholder="Formatted text will appear here..."
                className="bg-gray-800 border-2 border-gray-700 rounded-xl p-4 w-full h-full text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-none"
                aria-label="Formatted output text"
              />
              {outputText && (
                <button
                  onClick={handleCopy}
                  className="absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-label="Copy to clipboard"
                >
                  {isCopied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <ClipboardIcon className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>
        </main>
        
        <footer className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={handleConvert}
            disabled={!inputText}
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800/50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg shadow-blue-600/30"
          >
            <SparklesIcon className="w-5 h-5" />
            <span>Convert</span>
          </button>
          <button
            onClick={handleClear}
            disabled={!inputText && !outputText}
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800/50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            <TrashIcon className="w-5 h-5" />
            <span>Clear</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default App;