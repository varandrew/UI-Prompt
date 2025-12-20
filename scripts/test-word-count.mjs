import fs from 'fs';

// Current word counting function
function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}

console.log('═══════════════════════════════════════════════');
console.log('🧪 WORD COUNTING FUNCTION VERIFICATION');
console.log('═══════════════════════════════════════════════\n');

// Test cases
const testCases = [
  {
    text: 'Soft halo with radial blur and atmospheric rendering',
    expected: 8,
    description: 'Example from user'
  },
  {
    text: 'Hello world',
    expected: 2,
    description: 'Simple case'
  },
  {
    text: '  Extra   spaces   between   words  ',
    expected: 4,
    description: 'Multiple spaces'
  },
  {
    text: 'One',
    expected: 1,
    description: 'Single word'
  },
  {
    text: '',
    expected: 0,
    description: 'Empty string'
  }
];

console.log('📊 Test Cases:\n');

let allPassed = true;

testCases.forEach((testCase, i) => {
  const result = countWords(testCase.text);
  const passed = result === testCase.expected;
  allPassed = allPassed && passed;

  console.log(`Test ${i + 1}: ${testCase.description}`);
  console.log(`  Input: "${testCase.text}"`);
  console.log(`  Expected: ${testCase.expected} words`);
  console.log(`  Got: ${result} words`);
  console.log(`  Status: ${passed ? '✅ PASS' : '❌ FAIL'}`);
  console.log('');
});

console.log('═══════════════════════════════════════════════');
console.log(allPassed ? '✅ ALL TESTS PASSED!' : '❌ SOME TESTS FAILED!');
console.log('═══════════════════════════════════════════════\n');

// Now test with the actual Ambient Light description
const content = JSON.parse(fs.readFileSync('src/data/styles/generated/visual/ambient/manifest.json', 'utf-8'));
const descEn = content.family.description['en-US'];

console.log('📄 Ambient Light Description Analysis:\n');
console.log('Full text:', descEn);
console.log('');

// Break down by sentences
const sentences = descEn.split('. ');
sentences.forEach((sentence, i) => {
  const wordCount = countWords(sentence);
  console.log(`Sentence ${i + 1}: (${wordCount} words)`);
  console.log(`  "${sentence}${i < sentences.length - 1 ? '.' : ''}"`);
  console.log('');
});

console.log('📊 Total word count:', countWords(descEn));
console.log('📊 Expected range: 60-100 words');
console.log('📊 Status:', countWords(descEn) >= 60 && countWords(descEn) <= 100 ? '✅ PASS' : '❌ FAIL');
