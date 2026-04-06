import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error('No API KEY found');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    // There isn't a direct listModels on the client instance in some versions, 
    // but let's try a simple generation on a known model to verify it works, or fallback to pro.
    console.log('Testing gemini-1.5-flash...');
    await model.generateContent('Hi');
    console.log('Success: gemini-1.5-flash is working.');
  } catch (e) {
    console.log('Failed gemini-1.5-flash:', e.message);
  }
  
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-001' });
    console.log('Testing gemini-1.5-flash-001...');
    await model.generateContent('Hi');
    console.log('Success: gemini-1.5-flash-001 is working.');
  } catch (e) {
    console.log('Failed gemini-1.5-flash-001:', e.message);
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    console.log('Testing gemini-pro...');
    await model.generateContent('Hi');
    console.log('Success: gemini-pro is working.');
  } catch (e) {
      console.log('Failed gemini-pro:', e.message);
  }
}

listModels();
